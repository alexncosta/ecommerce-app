import { Settings, ShoppingCart, User } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-linear-to-b from-gray-900 to-gray-700 p-4 w-full h-18">
      <div className="text-white text-lg font-bold">
        <h1 className="text-3xl">e-commerce</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex justify-between items-center h-10">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-96 h-5/6 border-2 border-gray-100 rounded-md px-2 focus:outline-none focus:border-gray-100 text-white"
          />
        </div>
        <div className="flex justify-between items-center h-10">
          <div className="relative">
            <div className="absolute mt-[-6] ml-6 flex items-center justify-center w-5 h-5 bg-red-500 rounded-full text-white text-sm">
              0
            </div>
            <ShoppingCart className="text-white m-2" />
          </div>
          <User className="text-white m-2" />
          <Settings className="text-white m-2" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
