



export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left: Logo or brand */}
          <div className="text-xl font-bold text-blue-600">
            edApp
          </div>

          {/* Right: Navigation Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
          </div>

        </div>
      </div>
    </nav>
  );
};

