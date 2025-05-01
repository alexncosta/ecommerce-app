import ProductCard from "../product-card";
import Products from "@/app/products.json";

const Storefront = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="grid grid-cols-4 grid-rows-2 gap-8 w-[60vw] h-[82vh] p-4 m-6">
        {Products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.image}
          />
        ))}
      </div>
      <div className="flex justify-center items-center w-full h-16">
        <button className="w-[180px] bg-blue-500 text-white font-bold py-2 px-4 rounded mb-6">
          View all products
        </button>
      </div>
    </div>
  );
};

export default Storefront;
