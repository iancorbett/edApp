import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"


export const HomePage = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-16 lg:flex lg:items-center lg:justify-between">
            <Navbar />

            <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Start Saving Time
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Visualize Data and Streamline Your Work Using EdApp's features!
        </p>
        <a
          href="#"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Get Started
        </a>
      </div>
            
            
      <div className="mt-12 lg:mt-0 lg:ml-12 flex justify-center">
        <div className="w-48 h-48 rounded-full bg-gray-200 shadow-md flex items-center justify-center text-2xl font-semibold text-brown-700 border-2 border-amber-600">
          EdApp
        </div>
      </div>
            
        </section>
    )
}