import react, {useState} from "react"

const Test = () => {

    const [nav, setNav] = useState({
        collapse: false

    })

    return (
        <>
            <button className="bg-green-300 w-24 mx-auto"
                    onClick={() => setNav({...nav, collapse: !nav.collapse},)}>click
            </button>

            {nav.collapse === true ? (<h2>hello world</h2>) : null

            }
        </>
    )
}
export default Test;