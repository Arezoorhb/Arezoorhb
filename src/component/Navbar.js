const Navbar = () => {
    return (
        <div className="w-3/4 bg-white h-20 flex items-center  rounded-xl p-8 ml-36  ">
            <h1><span className=" text-2xl">CLASS</span><span className="text-emerald-400 text-2xl">YADS</span></h1>
            <ul className=" flex items-center ml-48 ">
                <li className="m-4  hover:text-emerald-400">Home</li>
                <li className="m-4 hover:text-emerald-400 ">Ads</li>
                <li className="m-4  hover:text-emerald-400">About</li>
                <li className="m-4 hover:text-emerald-400 ">Blog</li>
                <li className="m-4 hover:text-emerald-400 ">Contact</li>
            </ul>

            <ul className=" flex items-center ml-12 mr-6 ">

                <li className="m-4   hover:text-emerald-400">Login</li>

                <li className="m-4  hover:text-emerald-400">Register</li>
            </ul>
            <button className=" w-32 h-10 rounded-xl bg-emerald-300 ml-2 text-white">+Post an Ad</button>
        </div>
    )
}
export default Navbar
