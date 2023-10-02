import react from "react";
const Navbar = () => {
   return(
       <div className="w-3/4 bg-gray-100 h-24 flex items-center  rounded-xl p-8 ml-36 mt-16">
           <h1><span className=" text-2xl">CLASS</span><span className="text-emerald-400 text-2xl">YADS</span></h1>
           <ul className=" flex items-center ml-48 ">
               <li className="m-4  hover:text-emerald-400">Home</li>
               <li className="m-4 hover:text-emerald-400 ">Ads</li>
               <li className="m-4  hover:text-emerald-400">About</li>
               <li className="m-4 hover:text-emerald-400 ">Blog</li>
               <li className="m-4 hover:text-emerald-400 ">Contact</li>
           </ul>
       </div>
   )
}
export default Navbar
