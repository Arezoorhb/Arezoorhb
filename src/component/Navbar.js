import {useState} from "react";

const Navbar = () => {
    const [nav, setNav] = useState({
        collaps: false
    })
    return (
        <div className=" bg-white h-20 flex items-center  rounded-xl p-6   md:w-[80%] md:ml-60 ">
            <h1><span className=" text-2xl">CLASS</span><span className="text-emerald-400 text-2xl ">YADS</span></h1>
            <ul className="hidden md:flex items-center ml-72 ">
                <li className="m-4  hover:text-emerald-400">Home</li>
                <li className="m-4 hover:text-emerald-400 ">Ads</li>
                <li className="m-4  hover:text-emerald-400">About</li>
                <li className="m-4 hover:text-emerald-400 ">Blog</li>
                <li className="m-4 hover:text-emerald-400 ">Contact</li>
            </ul>

            <ul className=" invisible md:visible flex items-center md:ml-20 ">

                <li className="m-4   hover:text-emerald-400">Login</li>

                <li className="m-4  hover:text-emerald-400">Register</li>
            </ul>
            <button className=" invisible md:visible md:ml-40 w-40 h-8 rounded bg-emerald-300 m-4 text-white"> +Post an
                Ad
            </button>
            <button className="visible md:invisible  bg-green-200 w-[10%]  "
                    onClick={() => setNav({...nav, collaps: true})}>click
            </button>


            <div
                className={`w-full fixed h-[100vh] bg-white z-[99999] top-0 md:hidden transition-all ${nav.collaps === true ? "  left-[0%]" : " left-[-100%]"}`}>

                    <button
                        onClick={() => setNav({...nav, collaps: false})}
                        className={"bg-black top-0 right-0 text-white "}>X
                    </button>

                <ul className=" flex-col justify-center  items-center ">
                    <li className="m-4  hover:text-emerald-400">Home</li>
                    <li className="m-4 hover:text-emerald-400 ">Ads</li>
                    <li className="m-4  hover:text-emerald-400">About</li>
                    <li className="m-4 hover:text-emerald-400 ">Blog</li>
                    <li className="m-4 hover:text-emerald-400 ">Contact</li>
                </ul>

            </div>


        </div>
    )
}
export default Navbar
