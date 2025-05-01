import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="min-w-[80vw] min-h-[70vh] md:min-h-[60vh] bg-gradient-to-b from-gray-300 to-white lg-min-h-[90vh] flex flex-col md:flex-row justify-center items-center px-4 md:px-12 text-[#002230]">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Smartwatch Technology in your first
        </h1>
        <p className="mt-4 text-lg">
          This is a simple and elegant smartwatch that helps you to track your
          health and fitness. It has a sleek design and comes with various
          features to monitor your daily activities.
        </p>
        <Link href={"/about"}>
          <button className="mt-6 px-6 py-3 bg-[#002230] text-white rounded-lg hover:bg-[#003350] transition duration-300">
            Shop this Smartwatch
          </button>
        </Link>
      </div>
      <Image src="/smartwatch.png" alt="Smartwatch" width={500} height={500} />
    </div>
  );
};

export default Banner;
