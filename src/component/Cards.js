import {useParams} from "react-router-dom";

const Cards = (props) => {
    const {id} = useParams()
    return (
        <>

            <div className="  bg-white w-64 h-80 shadow-2xl m-6 md:ml-40  ">
                <img src={props.img} className=" w-full  bg-no-repeat bg-contain h-40"/>


                <div className="bg-gray-300 w-52 h-8 rounded-xl mt-4 text-center ml-2">{props.description}</div>

                <div className="p-2">

                    <a href="#" className="mt-1 block text-green-600">{props.title}</a>
                    <i className="fa-solid  w-20 fa-heart text-green-600 ml-44 hover:text-red-600 block"></i>
                    <address className="">{props.category}</address>
                    <i className="fa-solid fa-star text-yellow-600  "></i>
                    <i className="fa-solid fa-star text-yellow-600  "></i>
                    <i className="fa-solid fa-star text-gray-600  "></i>

                </div>
                {/*<button onClick= {()=>navigate(`Cards/${users.id}`)}>click here</button>*/}



            </div>


        </>
    )
}
export default Cards