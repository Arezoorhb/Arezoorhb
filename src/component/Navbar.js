const Navbar = () => {
    return (
        <div className="w-[366px] bg-white h-20 flex items-center  rounded-xl p-2   md:w-3/4 md:ml-36 ">
            <h1><span className=" text-2xl">CLASS</span><span className="text-emerald-400 text-2xl">YADS</span></h1>
            <ul className=" flex items-center ml-48 ">
                <li className="m-2  hover:text-emerald-400">Home</li>
                <li className="m-4 hover:text-emerald-400 ">Ads</li>
                <li className="m-4  hover:text-emerald-400">About</li>
                <li className="m-4 hover:text-emerald-400 ">Blog</li>
                <li className="m-4 hover:text-emerald-400 ">Contact</li>
            </ul>

            <ul className=" flex items-center  ">

                <li className="m-4   hover:text-emerald-400">Login</li>

                <li className="m-4  hover:text-emerald-400">Register</li>
            </ul>
            <button className="w-64 h-8 rounded bg-emerald-300 m-4 text-white"> +Post an Ad</button>
            {/*<button className=" w-64 h-8 rounded-xl bg-emerald-300  text-white">+Post an Ad</button>*/}
        </div>
    )
}
export default Navbar
