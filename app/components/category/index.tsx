import { Gamepad, Gamepad2, Laptop, Printer, Tv, Tv2 } from "lucide-react";

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[380px]">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-[60vw] h-[80vh] p-4 m-4">
        <div className="bg-amber-400 h-full rounded-lg p-8">
          <Gamepad2 className="w-10 h-10 text-gray-800" />
          <p className="text-1xl font-bold text-gray-800">Gaming Consoles</p>
        </div>
        <div className="col-span-2 bg-cyan-400 h-full rounded-lg p-8 justify-items-end">
          <Tv2 className="w-10 h-10 text-gray-800" />
          <p className="text-1xl font-bold text-gray-800">TVs</p>
        </div>
        <div className="col-span-2 bg-emerald-400 h-full rounded-lg p-8">
          <Laptop className="w-10 h-10 text-gray-800" />
          <p className="text-1xl font-bold text-gray-800">Laptops</p>
        </div>
        <div className="bg-red-400 h-full rounded-lg p-8 justify-items-end">
          <Printer className="w-10 h-10 text-gray-800" />
          <p className="text-1xl font-bold text-gray-800">Printers</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Categories;
