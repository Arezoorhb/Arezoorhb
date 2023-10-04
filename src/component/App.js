import Navbar from './Navbar'

const App = () => {
    return (
        <div>
            <div>
                <div className=" p-16 h-[1000px]  w-[full]   bg-[url('./image/hero_2.jpg')] mix-blend-overlay ">
                    <Navbar/>
                    {/*--------------------------------------------------heding in site --------------------------------------------                    */}
                    <div className="text-center mt-36 ">
                        <h1 className="text-5xl text-white  ">Largest Classifieds In The World</h1>
                        <h2 className="text-xl mt-8 ">You can buy, sell anything you want.
                        </h2>
                    </div>
                    {/*--------------------------------------------------serch bar-------------------------------------------------*/}
                    <div
                        className=" flex justify-items-center rounded ml-40 text-center mt-36 w-3/4 h-46  relative	">
                        <div className="absolute opacity-50  bg-white h-[80px] w-full rounded z-0"> </div>
                        <input placeholder="What are you looking for? " type="text"
                               className="border  rounded m-4 h-8 w-56 p-2 z-99 "/>
                        <input placeholder="Location " type="text"
                               className="border  rounded m-4 h-8 w-56 p-2  z-99 "/>
                        {/*<input type="text" className="border rounded m-4 h-8 w-56 p-2 " />*/}
                        <select className="border  bg-white rounded m-4 h-8 w-56 pl-2 z-99 ">
                            <option className="selected">All categories</option>
                            <option>All categories</option>
                            <option>All categories</option>
                            <option>All categories</option>
                        </select>
                        <button className="w-36 h-8 rounded bg-emerald-300 m-4"> Serch</button>

                    </div>
                    {/*----------------------------------------------------users----------------------------------------------------*/}
                    <div className="w-3/4 h-40 bg-white rounded-xl mt-80 ml-44 flex  justify-items-center shadow-2xl">
                        <div
                            className="w-32  ml-8 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mb-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2 ">3,921</span>
                        </div>
                        <div
                            className="w-32  ml-8 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mb-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2">3,921</span>
                        </div>
                        <div
                            className="w-32  ml-8 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mb-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2">3,921</span>
                        </div>
                        <div
                            className="w-32  ml-8 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mb-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2">3,921</span>
                        </div>
                        <div
                            className="w-32  ml-8 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mb-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2">3,921</span>
                        </div>
                        <div
                            className="w-32  ml-8 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mr-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2">3,921</span>
                        </div>
                    </div>
                    {/*---------------------------------------------Featured Ads-------------------------------------------------------------*/}
                    <div className="w-full h-96  bg-gray-100 ml-30 mt-32 p-4 flex ">

                        <div className="bg-white w-64 h-80 shadow-2xl m-6 p-4">
                            <div className=" w-64 mb-4 bg-no-repeat bg-contain h-40 bg-[url('./image/img_1.jpg.jpg')]">
                            </div>
                            <span
                                className="bg-gray-300 w-24 h-32 rounded-xl  text-center mt-10 p-1">car and vehicles</span>
                            <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600"></i>
                            <a href="#" className="mt-8 block text-green-600">House with Swimming Pool</a>
                            <address>Don St, Brooklyn, New York</address>
                            <i className="fa-solid fa-star text-yellow-600  "></i>
                            <i className="fa-solid fa-star text-yellow-600  "></i>
                            <i className="fa-solid fa-star text-gray-600  "></i>

                        </div>

                        <div className="bg-white w-64  h-80 shadow-2xl m-6 p-2">
                            <div
                                className=" w-full mb-4 bg-no-repeat bg-contain h-40 bg-[url('./image/img_1.jpg.jpg')]">
                            </div>
                            <span
                                className="bg-gray-300 w-24 h-36 rounded-xl  text-center mt-10 p-1">car and vehicles</span>
                            <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600"></i>
                            <a href="#" className="mt-8 block text-green-600">Wooden Chair & Table</a>
                            <address>Don St, Brooklyn, New York</address>
                            <i className="fa-solid fa-star text-yellow-600  "></i>
                            <i className="fa-solid fa-star text-yellow-600  "></i>
                            <i className="fa-solid fa-star text-gray-600  "></i>
                        </div>

                        <div className="bg-white w-64  h-80 shadow-2xl m-6 p-2">
                            <div
                                className=" w-full mb-4 bg-no-repeat bg-contain h-40 bg-[url('./image/img_1.jpg.jpg')]">
                            </div>
                            <span
                                className="bg-gray-300 w-24 h-36 rounded-xl  text-center mt-10 p-1">car and vehicles</span>
                            <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600"></i>
                            <a href="#" className="mt-8 block text-green-600">Wooden Chair & Table</a>
                            <address>Don St, Brooklyn, New York</address>
                            <i className="fa-solid fa-star text-yellow-600  "></i>
                            <i className="fa-solid fa-star text-yellow-600  "></i>
                            <i className="fa-solid fa-star text-gray-600  "></i>
                        </div>

                        <div className="bg-white w-64 h-80 shadow-2xl m-6 p-2">
                            <div
                                className=" w-full mb-4 bg-no-repeat bg-contain h-40 bg-[url('./image/img_1.jpg.jpg')]">
                            </div>
                            <span
                                className="bg-gray-300 w-24 h-36 rounded-xl  text-center mt-10 p-1">car and vehicles</span>
                            <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600 "></i>
                            <a href="#" className="mt-8 block text-green-600">House with Swimming Pool</a>
                            <address>Don St, Brooklyn, New York</address>
                            <i className="fa-solid fa-star text-yellow-600  "></i>
                            <i className="fa-solid fa-star text-yellow-600  "></i>
                            <i className="fa-solid fa-star text-gray-600  "></i>
                        </div>

                    </div>
                    {/*------------------------------------------Popular Products----------------------------------------------------------------------------                    */}

                    <div>
                        <h1 className=" text-green-600 text-3xl text-center mt-24" >Popular Products</h1>
                        <h2 className="  text-center mt-4">Lorem Ipsum Dolor Sit Amet</h2>
                    </div>
                    <div className="flex" >
                        <div className=" w-96 bg-no-repeat bg-contain h-96 pt-48 pl-8 bg-[url('./image/img_1.jpg.jpg')] rounded-xl m-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <a href="#"
                                className="bg-emerald-600 w-24 h-36 rounded-xl  text-center mt-56 p-1 text-white ">car and vehicles</a>
                            <a href="#" className="text-2xl text-white block mt-4">Red Luxury Car</a>
                            <span className="text-white mt-4">West Orange, New York</span>
                        </div>

                        <div className=" w-96 bg-no-repeat bg-contain h-96 pt-48 pl-8 bg-[url('./image/img_1.jpg.jpg')] rounded-xl m-8  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <a href="#"
                               className="bg-emerald-600 w-24 h-36 rounded-xl  text-center mt-56 p-1 text-white">car and vehicles</a>
                            <a href="#" className="text-2xl text-white block mt-4">Red Luxury Car</a>
                            <span className="text-white mt-4">West Orange, New York</span>
                        </div>

                        <div className=" w-96 bg-no-repeat bg-contain h-96 pt-48 pl-8 bg-[url('./image/img_1.jpg.jpg')] rounded-xl  m-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <a href="#"
                               className="bg-emerald-600 w-24 h-36 rounded-xl  text-center mt-56 p-1 text-white ">car and vehicles</a>
                            <a href="#" className="text-2xl text-white block mt-4">Red Luxury Car</a>

                            <span className="text-white mt-4">West Orange, New York</span>


                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default App;
