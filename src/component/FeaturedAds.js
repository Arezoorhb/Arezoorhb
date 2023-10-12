import axios from "axios";
import {useEffect, useState} from "react";
import Cards from "./Cards";
import {useNavigate} from "react-router-dom";

const Featured = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        FechUser()
    }, [])

    const FechUser = () => {

        axios.get("https://topdays.ir/apiMovie/index.php")
            .then(response => {
                const user = response.data;
                setUsers(user)
            })
            .catch(error => console.error("error"))
    }

    return (

        <>

            <div
                className="  flex flex-col  bg-gray-100 md:ml-30 mt-32 p-4 md:w-full md:h-200px md:flex-row mx-auto md:justify-item-center ">

                {users.map((item, key) => {
                        return (
                            <div key={key}>

                                <Cards title={[item.title]} img={[item.image]} description={[item.description]}
                                       category={item.category} id={item.id}/>

                            </div>
                        )
                    }
                )}

            </div>


            {/*<div className="md:ml-40 bg-white w-64  h-80 shadow-2xl m-6 ">*/}
            {/*    <img src="./image/img_1.jpg.jpg" className=" w-full  bg-no-repeat bg-contain h-40"/>*/}
            {/*    <div className="p-4">*/}
            {/*            <span*/}
            {/*                className="bg-gray-300 w-24 h-36 rounded-xl  text-center mt-10 p-1">car and vehicles</span>*/}
            {/*        <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600"></i>*/}
            {/*        <a href="#" className="mt-8 block text-green-600">Wooden Chair & Table</a>*/}
            {/*        <address>Don St, Brooklyn, New York</address>*/}
            {/*        <i className="fa-solid fa-star text-yellow-600  "></i>*/}
            {/*        <i className="fa-solid fa-star text-yellow-600  "></i>*/}
            {/*        <i className="fa-solid fa-star text-gray-600  "></i>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className=" md:ml-40 bg-white w-64  h-80 shadow-2xl m-6  ">*/}
            {/*    <img src="./image/img_1.jpg.jpg" className=" w-full  bg-no-repeat bg-contain h-40"/>*/}
            {/*    <div className="p-4">*/}
            {/*            <span*/}
            {/*                className="bg-gray-300 w-24 h-36 rounded-xl  text-center mt-10 p-1">car and vehicles</span>*/}
            {/*        <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600"></i>*/}
            {/*        <a href="#" className="mt-8 block text-green-600">Wooden Chair & Table</a>*/}
            {/*        <address>Don St, Brooklyn, New York</address>*/}
            {/*        <i className="fa-solid fa-star text-yellow-600  "></i>*/}
            {/*        <i className="fa-solid fa-star text-yellow-600  "></i>*/}
            {/*        <i className="fa-solid fa-star text-gray-600  "></i>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="md:ml-40 bg-white w-64 h-80 shadow-2xl m-6  ">*/}
            {/*    <img src="./image/img_1.jpg.jpg" className=" w-full  bg-no-repeat bg-contain h-40"/>*/}
            {/*    <div className="p-4">*/}
            {/*            <span*/}
            {/*                className="bg-gray-300 w-24 h-36 rounded-xl  text-center mt-10 p-1">car and vehicles</span>*/}
            {/*        <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600 "></i>*/}
            {/*        <a href="#" className="mt-8 block text-green-600">House with Swimming Pool</a>*/}
            {/*        <address>Don St, Brooklyn, New York</address>*/}
            {/*        <i className="fa-solid fa-star text-yellow-600  "></i>*/}
            {/*        <i className="fa-solid fa-star text-yellow-600  "></i>*/}
            {/*        <i className="fa-solid fa-star text-gray-600  "></i>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </>
    )
}
export default Featured