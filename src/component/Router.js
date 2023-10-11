import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Cards";
import App from "./App";
const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Cards/:id" element={<Cards/>}/>
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router