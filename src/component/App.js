import react, {useState} from 'react'
import  Navbar from './Navbar'
const App = () => {
    return (
        <div>
            <Navbar/>
            <img  className=" bg-cover  z-0 rounded-xl" src={require("../images/hero_2.jpg")}/>

        </div>



    )
}

export default App;
