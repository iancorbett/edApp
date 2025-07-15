import { Link } from "react-router-dom"


export const HomePage = () => {
    return (
        <>
            <h1>hello</h1>
            
            <Link to="/form">
                <button>
                    Enter
                </button>
            </Link>
            
        </>
    )
}