import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"


export const HomePage = () => {
    return (
        <>
            <Navbar />
            
            <h1>hello</h1>
            
            <Link to="/form">
                <button className="bg-auto">
                    Enter
                </button>
            </Link>
            
        </>
    )
}