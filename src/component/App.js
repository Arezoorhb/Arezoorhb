import Navbar from './Navbar'

const App = () => {
    return (
        <div>
            <div>
                <div className=" h-[1000px] md:w-[full]   bg-[url('./image/hero_2.jpg')]  pt-20 bg-cover ">

                    {/*<Navbar/>*/}
                    {/*--------------------------------------------------heding in site --------------------------------------------                    */}
                    <div className="mt-36 ">
                        <h1 className="text-2xl mr-64 text-center text-white  md:text-5xl md:mr-16 md:text-center">Largest Classifieds
                            In The World</h1>
                        <h2 className="text-lg text-center mr-64 md:mr-16 mt-6 md: text-xl md:text-center  ">You can buy, sell
                            anything you want.
                        </h2>
                    </div>
                    {/*--------------------------------------------------serch bar-------------------------------------------------*/}
                    <div
                        className="  flex flex-col ml-24   relative md:flex-row md:justify-items-center   rounded md:ml-40 text-center mt-36 md: w-3/4 md:h-46   	">
                        <div
                            className=" h-80 w-72  mx-auto   absolute opacity-50  bg-white md:h-[80px] md:w-full rounded"></div>
                        <input placeholder="What are you looking for? " type="text"
                               className="border  rounded m-4 h-8 w-56 p-2 ml-8 "/>
                        <input placeholder="Location " type="text"
                               className="border    rounded m-4 h-8 w-56 p-2  ml-8 "/>
                        {/*<input type="text" className="border rounded m-4 h-8 w-56 p-2 " />*/}
                        <select className="border bg-white rounded m-4 h-8 w-56 pl-2 ml-8 ">
                            <option className="selected ">All categories</option>
                            <option>All categories</option>
                            <option>All categories</option>
                            <option>All categories</option>
                        </select>
                        <button className=" ml-15 w-36 h-8  rounded bg-emerald-300 m-4 ml-8"> Serch</button>

                    </div>
                    {/*----------------------------------------------------users----------------------------------------------------*/}
                    <div
                        className="shadow-2xl  mt-80 ml-32 w-52 flex flex-col  md:flex md:flex-row md:w-3/4 md:h-40 bg-white rounded-xl  md:ml-40  md:justify-items-center ">
                        <div
                            className="w-32  ml-6 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mb-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2 ">3,921</span>
                        </div>
                        <div
                            className="w-32  ml-6 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mb-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2">3,921</span>
                        </div>
                        <div
                            className="w-32  ml-6 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <i className="fa-solid fa-user text-indigo-600 mb-2"></i>
                            <span>RealEstate</span>
                            <span className="bg-gray-300 w-16 h-8 rounded-xl text-center mt-2">3,921</span>
                        </div>
                        <div
                            className="w-32  ml-6 mt-2 hover:bg-emerald-300 p-8 grid justify-items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
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
                    <div
                        className="  flex flex-col bg-gray-100 ml-30 mt-32 p-4 md:w-full md:h-96  md:flex-row  md:justify-center ">

                        <div className=" ml-20 bg-white w-64 h-80 shadow-2xl m-6 md:ml-14 ">

                            <img src="./image/img_1.jpg.jpg" className=" w-full  bg-no-repeat bg-contain h-40"/>
                            <div className="p-4">
                            <span
                                className="bg-gray-300 w-24 h-32 rounded-xl  text-center mt-10 p-1">car and vehicles</span>
                                <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600"></i>
                                <a href="#" className="mt-8 block text-green-600">House with Swimming Pool</a>
                                <address>Don St, Brooklyn, New York</address>
                                <i className="fa-solid fa-star text-yellow-600  "></i>
                                <i className="fa-solid fa-star text-yellow-600  "></i>
                                <i className="fa-solid fa-star text-gray-600  "></i>
                            </div>

                        </div>

                        <div className="md:ml-14 bg-white w-64  h-80 shadow-2xl m-6 ml-20">
                            <img src="./image/img_1.jpg.jpg" className=" w-full  bg-no-repeat bg-contain h-40"/>
                            <div className="p-4">
                            <span
                                className="bg-gray-300 w-24 h-36 rounded-xl  text-center mt-10 p-1">car and vehicles</span>
                                <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600"></i>
                                <a href="#" className="mt-8 block text-green-600">Wooden Chair & Table</a>
                                <address>Don St, Brooklyn, New York</address>
                                <i className="fa-solid fa-star text-yellow-600  "></i>
                                <i className="fa-solid fa-star text-yellow-600  "></i>
                                <i className="fa-solid fa-star text-gray-600  "></i>
                            </div>
                        </div>

                        <div className=" md:ml-14 bg-white w-64  h-80 shadow-2xl m-6 ml-20 ">
                            <img src="./image/img_1.jpg.jpg" className=" w-full  bg-no-repeat bg-contain h-40"/>
                            <div className="p-4">
                            <span
                                className="bg-gray-300 w-24 h-36 rounded-xl  text-center mt-10 p-1">car and vehicles</span>
                                <i className="fa-solid fa-heart text-green-600 ml-12 hover:text-red-600"></i>
                                <a href="#" className="mt-8 block text-green-600">Wooden Chair & Table</a>
                                <address>Don St, Brooklyn, New York</address>
                                <i className="fa-solid fa-star text-yellow-600  "></i>
                                <i className="fa-solid fa-star text-yellow-600  "></i>
                                <i className="fa-solid fa-star text-gray-600  "></i>
                            </div>
                        </div>

                        <div className="md:ml-14 bg-white w-64 h-80 shadow-2xl m-6 ml-20 ">
                            <img src="./image/img_1.jpg.jpg" className=" w-full  bg-no-repeat bg-contain h-40"/>
                            <div className="p-4">
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

                    </div>
                    {/*------------------------------------------Popular Products----------------------------------------------------------------------------                    */}

                    <div>
                        <h1 className=" text-center md:mr-12  mr-64 mt-20 text-xl text-green-600 md:text-3xl ">Popular Products</h1>
                        <h2 className="  mr-64 md:mr-12 text-center mt-4">Lorem Ipsum Dolor Sit Amet</h2>
                    </div>
                    <div className=" ml-12 flex-col md: flex md:flex-row justify-center">
                        <div
                            className="  rounded w-80 bg-no-repeat bg-contain h-80 pt-40 pl-4 m-4 bg-[url('./image/img_1.jpg.jpg')] rounded-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">

                            <a href="#"
                               className="bg-emerald-600 w-24 h-36 rounded-xl  text-center mt-56 p-1 text-white ">car
                                and vehicles</a>
                            <a href="#" className="text-2xl text-white block mt-4">Red Luxury Car</a>
                            <span className="text-white mt-4">West Orange, New York</span>
                        </div>

                        <div
                            className=" w-80 bg-no-repeat bg-contain h-80 pt-40 pl-4 m-4 bg-[url('./image/img_1.jpg.jpg')] rounded-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <a href="#"
                               className="bg-emerald-600 w-24 h-36 rounded-xl  text-center mt-56 p-1 text-white ">car
                                and vehicles</a>
                            <a href="#" className="text-2xl text-white block mt-4">Red Luxury Car</a>
                            <span className="text-white mt-4">West Orange, New York</span>
                        </div>

                        <div
                            className=" w-80 bg-no-repeat bg-contain h-80 pt-40 pl-4 m-4 bg-[url('./image/img_1.jpg.jpg')] rounded-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <a href="#"
                               className="bg-emerald-600 w-24 h-36 rounded-xl  text-center mt-56 p-1 text-white ">car
                                and vehicles</a>
                            <a href="#" className="text-2xl text-white block mt-4">Red Luxury Car</a>
                            <span className="text-white mt-4">West Orange, New York</span>
                        </div>
                    </div>
                    <div className="flex-col md:flex  md:flex-row justify-center md:w-full">

                        <div
                            className="md:ml-28 m-2 h-96 w-[500px] p-4 relative ml-30 bg-contain bg-no-repeat  bg-[url('./image/img_2.jpg')]  grid content-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <div className="bg-black absolute md:w-[447px] h-96 opacity-40 z-0 "></div>

                            <a href="#"
                               className="bg-emerald-600 w-32 h-8 mt-60 rounded-xl  text-center  p-1 text-white ">car
                                and vehicles</a>
                            <a href="#" className="text-2xl text-white block  mt-4">Red Luxury Car</a>

                            <span className="text-white mt-2">West Orange, New York</span>

                        </div>


                        <div
                            className="m-2 h-96 w-[500px] p-4 relative rounded  bg-no-repeat bg-contain bg-[url('./image/img_3.jpg')]  grid content-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                            <div className="bg-black absolute md:w-[447px] h-96 opacity-40"></div>
                            <a href="#"
                               className="bg-emerald-600 w-32 h-8 mt-60 rounded-xl  text-center  p-1 text-white ">car
                                and vehicles</a>
                            <a href="#" className="text-2xl text-white block  mt-4">Red Luxury Car</a>

                            <span className="text-white mt-2">West Orange, New York</span>

                        </div>


                    </div>
                    {/*----------------------------------------------------Trending Today--------------------------------------------------------*/}

                    <div className=" w-auto mt-12 p-4 bg-gray-100 md:w-full md:h-3/4 ">
                        <h1 className="mr-40 md:text-center  text-2xl text-green-600 m-4 md:text-4xl ">Trending Today</h1>
                        <div className=" grid-col-1 p-4 md:grid md:grid-cols-2 justify-items-center">

                            <div className=" flex bg-white  shadow-xl w-[400px] h-40 m-4">

                                <img className=" h-40  w-[40%] bg-no-repeat bg-contain" src={'./image/img_3.jpg'}/>
                                <div className="w-[60%] p-4">
                                    <a href="#"
                                       className="bg-gray-300 w-24 h-6  rounded-xl text-xs text-center  p-1 text-black  ">Furniture

                                    </a>
                                    <div className=" bg-gray-200 rounded-full w-8 h-8 ml-40  hover:bg-red-600">
                                        <i className="fa-solid fa-heart text-green-600  hover:text-white ml-2 mt-2 "></i>
                                    </div>

                                    <a className=" text-teal-400 block">House with Swimming Pool</a>
                                    <address className="mb-2">Don St, Brooklyn, New York</address>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>


                                </div>
                            </div>
                            <div className=" flex bg-white  shadow-xl w-[400px] h-40 m-4">

                                <img className=" h-40  w-[40%] bg-no-repeat bg-contain" src={'./image/img_1.jpg.jpg'}/>
                                <div className="w-[60%] p-4">
                                    <a href="#"
                                       className="bg-gray-300 w-24 h-6  rounded-xl text-xs text-center  p-1 text-black  ">Furniture

                                    </a>
                                    <div className=" bg-gray-200 rounded-full w-8 h-8 ml-40 hover:bg-red-600">
                                        <i className="fa-solid fa-heart text-green-600  hover:text-white  h-2 ml-2 mt-2 "></i>
                                    </div>

                                    <a className=" text-teal-400 block">House with Swimming Pool</a>
                                    <address className="mb-2">Don St, Brooklyn, New York</address>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>


                                </div>
                            </div>
                            <div className=" flex bg-white  shadow-xl w-[400px] h-40 m-4">

                                <img className=" h-40  w-[40%] bg-no-repeat bg-contain" src={'./image/img_2.jpg'}/>
                                <div className="w-[60%] p-4">
                                    <a href="#"
                                       className="bg-gray-300 w-24 h-6  rounded-xl text-xs text-center  p-1 text-black  ">Furniture

                                    </a>
                                    <div className=" bg-gray-200 rounded-full w-8 h-8 ml-40 hover:bg-red-600">
                                        <i className="fa-solid fa-heart text-green-600  hover:text-white ml-2 mt-2  "></i>
                                    </div>

                                    <a className=" text-teal-400 block">House with Swimming Pool</a>
                                    <address className="mb-2">Don St, Brooklyn, New York</address>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>


                                </div>
                            </div>
                            <div className=" flex bg-white  shadow-xl w-[400px] h-40 m-4">

                                <img className=" h-40  w-[40%] bg-no-repeat bg-contain" src={'./image/img_3.jpg'}/>
                                <div className="w-[60%] p-4">
                                    <a href="#"
                                       className="bg-gray-300 w-24 h-6  rounded-xl text-xs text-center  p-1 text-black  ">Furniture

                                    </a>
                                    <div className=" bg-gray-200 rounded-full w-8 h-8 ml-40 hover:bg-red-600">
                                        <i className="fa-solid fa-heart text-green-600  hover:text-white  ml-2 mt-2 "></i>
                                    </div>

                                    <a className=" text-teal-400 block">House with Swimming Pool</a>
                                    <address className="mb-2">Don St, Brooklyn, New York</address>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>


                                </div>
                            </div>
                            <div className=" flex bg-white  shadow-xl w-[400px] h-40 m-4">

                                <img className=" h-40  w-[40%] bg-no-repeat bg-contain" src={'./image/img_1.jpg.jpg'}/>
                                <div className="w-[60%] p-4">
                                    <a href="#"
                                       className="bg-gray-300 w-24 h-6  rounded-xl text-xs text-center  p-1 text-black  ">Furniture

                                    </a>
                                    <div className=" bg-gray-200 rounded-full w-8 h-8 ml-40 hover:bg-red-600">
                                        <i className="fa-solid fa-heart text-green-600  hover:text-white  ml-2 mt-2 "></i>
                                    </div>

                                    <a className=" text-teal-400 block">House with Swimming Pool</a>
                                    <address className="mb-2">Don St, Brooklyn, New York</address>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>


                                </div>
                            </div>
                            <div className=" flex bg-white  shadow-xl w-[400px] h-40 m-4">

                                <img className=" h-40  w-[40%] bg-no-repeat bg-contain" src={'./image/img_2.jpg'}/>
                                <div className="w-[60%] p-4">
                                    <a href="#"
                                       className="bg-gray-300 w-24 h-6  rounded-xl text-xs text-center  p-1 text-black  ">Furniture

                                    </a>
                                    <div className=" bg-gray-200 rounded-full w-8 h-8 ml-40 hover:bg-red-600 ">
                                        <i className="fa-solid fa-heart text-green-600  hover:text-white ml-2 mt-2 "></i>
                                    </div>

                                    <a className=" text-teal-400 block">House with Swimming Pool</a>
                                    <address className="mb-2">Don St, Brooklyn, New York</address>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-yellow-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>
                                    <i className="fa-solid fa-star text-gray-600  "></i>


                                </div>
                            </div>
                        </div>

                    </div>
                    {/*-------------------------------------------Testimonials------------------------------------------------------------*/}
                    <div className="md:w-full h-96  md:p-4 ">
                        <div className="">
                            <h1 className=" text-2xl text-green-600 m-4 text-center">Testimonials</h1>
                            <div
                                className=" rounded-full h-40  mx-auto w-40 bg-no-repeat bg-contain bg-[url('./image/person_3.jpg')]"></div>
                            <p className="text-center mt-6">“Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consectetur unde reprehenderit aperiam quaerat fugiat <br/>repudiandae explicabo animi
                                minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum
                                unde iusto.”</p>
                        </div>


                    </div>

                    {/*-------------------------------------------Our Blog-------------------------------------------------------*/}
                    <div className=" h-[900px] bg-gray-100 md:h-[700px] w-full flex-col  p-12 ">


                        <div className>
                            <h2 className="text-2xl text-green-500  md:text-3xl text-center ">Our Blog</h2>
                            <p className="text-gray-400 mt-4  text-center">See Our Daily News & Updates</p>
                        </div>


                        <div className="flex w-auto  justify-center  ">
                            <div className="w-[350px] mt-8 rounded  m-6 md:w-[350px] ">
                                <img src="./image/hero_1.jpg" className="mb-6"/>
                                <a href="#" className="text-2xl">Many People Selling Online</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea
                                    maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a
                                    eius.</p>
                            </div>
                            <div className="w-[350px] mt-8 rounded m-6">
                                <img src="./image/hero_1.jpg " className="mb-6"/>
                                <a href="#" className="text-2xl ">Many People Selling Online</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea
                                    maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a
                                    eius.</p>
                            </div>
                            <div className="w-[350px] mt-6 rounded m-6">
                                <img src="./image/hero_1.jpg" className="mb-6"/>
                                <a href="#" className="text-2xl">Many People Selling Online</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea
                                    maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a
                                    eius.</p>
                            </div>

                        </div>


                        <div className="w-full mx-aut flex  items-center justify-center md:mt-12  ">
                            <button className="w-40 rounded text-white h-12 bg-emerald-400 mx-auto">View All Posts
                            </button>
                        </div>

                    </div>
                    {/*-----------------------------------------EMAIL------------------------------------------------*/}
                    <div className="flex flex-col bg-emerald-400 w-full h-40 md:flex-row justify-center p-8 ">
                        <div className=" text-white md:text-xl p-4  w-[600px]">
                            <h2>Newsletter</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="p-4 w-[600px]">

                            <input placeholder="Email "
                                   className="bg-emerald-400 text-white  border-b-2 border-0 md:w-96 	"/>
                            <button className="w-40 ml-4  h-12 bg-white mx-auto hover:bg-black hover:text-white">View
                                All Posts
                            </button>
                        </div>
                    </div>

                    {/*------------------------------------------------------------------------------------*/}
                    <div className="bg-gray-900 md:w-full h-[600px] flex   justify-center ">
                        <div className="flex flex-col w-auto h-96 md:flex-row justify-center mt-40">
                            <div className="w-[350px] h-96">
                                <h2 className="text-white">About</h2>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Provident rerum unde possimus molestias dolorem fuga, illo quis fugiat!</p>
                            </div>

                            <div className="w-[200px] h-96">
                                <h2 className="text-white">Navigations</h2>
                                <ul className="text-gray-500">
                                    <li>About Us</li>
                                    <li>HOME</li>
                                    <li>Testimonials</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className="w-[200px] h-96">
                                <h2 className="text-white ">Follow Us</h2>
                                <div>
                                    <i className="fa-solid fa-star text-gray-500 "></i>
                                    <i className="fa-solid fa-star text-gray-500  "></i>
                                    <i className="fa-solid fa-star text-gray-500 "></i>
                                </div>
                            </div>
                            <div className="flex w-[300px]">
                                <input placeholder="Search products... " className="bg-gray-900 border w-60 h-12"/>
                                <button className="w-60 h-12 bg-white mx-auto hover:bg-black hover:text-white">View All
                                    Posts
                                </button>


                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>

    )
}

export default App;
