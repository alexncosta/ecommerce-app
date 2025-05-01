import React from "react";

type Props = {
  key: string;
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const ProductCard = (props: Props) => {
  return (
    <div
      key={props.id}
      className="bg-white shadow-lg shadow-gray-300 rounded-lg p-4 w-full place-content-stretch"
    >
      <div className="flex justify-center items-center w-[180px] h-[148px] overflow-hidden mx-auto">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="rounded-lg max-w-full max-h-full object-contain"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full h-1/2 p-4">
        <h2 className="text-md font-semibold">{props.name}</h2>
        <div className="flex flex-col items-start justify-start w-full min-h-12 h-46">
          <p className="text-gray-400 text-sm">{props.description}</p>
        </div>
        <p className="text-lg font-bold text-green-600">
          ${props.price.toFixed(2)}
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
