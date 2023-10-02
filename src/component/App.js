import  Navbar from './Navbar'
const App = () => {
    return (
        <div>
            <Navbar/>
            {/*<img  className=" bg-cover  z-0 rounded-xl" src={require("../images/hero_2.jpg")}/>*/}
            <div style={{backgroundImage:"/image/hero_2.jpg"}}></div>

        </div>

    )
}

export default App;
