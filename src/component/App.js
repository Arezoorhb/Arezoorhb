import Navbar from './Navbar'

const App = () => {
    return (
        <div>
            <div>
                <div className=" p-16 h-[1000px]  w-[full]   bg-[url('./image/hero_2.jpg')]  ">
                    <Navbar/>
                    <div className="text-center mt-36 ">
                        <h1 className="text-5xl text-white  ">Largest Classifieds In The World</h1>
                        <h2 className="text-xl mt-8 ">You can buy, sell anything you want.
                        </h2>
                    </div>
                    <div
                        className=" flex justify-items-center rounded-xl ml-40 text-center mt-36 w-3/4 h-46 bg-white 	">
                        <input placeholder="What are you looking for? " type="text"
                               className="border  rounded m-4 h-8 w-56 p-2 "/>
                        <input placeholder="Location " type="text"
                               className="border  rounded m-4 h-8 w-56 p-2 "/>
                        {/*<input type="text" className="border rounded m-4 h-8 w-56 p-2 " />*/}
                        <select className="border rounded m-4 h-8 w-56 pl-2 ">
                            <option className="selected">All categories</option>
                            <option>All categories</option>
                            <option>All categories</option>
                            <option>All categories</option>
                        </select>
                        <button className="w-36 h-8 rounded bg-emerald-300 m-4"> Serch</button>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default App;
