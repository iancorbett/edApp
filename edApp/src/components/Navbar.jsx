import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="fixed w-full z-40 transition-all duration-300">
            <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center"
            href="#"
            >
                <span className="relative z-10">
                    <span className="text-glow text-foreground">ed</span>App
                </span>
            </a>
            </div>
        </nav>
    )
    
}
