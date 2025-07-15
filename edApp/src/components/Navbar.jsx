

export const Navbar = () => {
    return (
        <header className="shadow mb-2">
            <div className="max-w-screen-lg mx-auto py-4 flex items-center">
            <a href="#" className="text-2xl flex items-center font-black">
                <span>edApp</span>
            </a>
            <nav className="">
                <ul className="flex md:gap-x-8">
                    <li className=""><a href="">About</a></li>
                    <li className=""><a href="">Sign Up</a></li>
                    <li className=""><a href="" className="border-2 px-6 py-2 rounded-xl border-blue-600 text-blue-600 font-medium">Log In</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}