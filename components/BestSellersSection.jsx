import React from "react";
import Image from "next/image";
import Link from "next/link";
import product1 from "../public/product-1.png";
import product2 from "../public/product-2.png";
import product3 from "../public/product-3.png";

const BestSellersSection = ({ products }) => {
  console.log(products);
  return (
    <>
      <section className="w-full h-full bg-color-white pt-25">
        <div className="text-center">
          <h2 className="uppercase font-bold text-4xl mb-5 text-color-primary">
            best sellers
          </h2>
          <p className="text-gray-500 text-lg max-w-screen-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            enim, consequuntur possimus quo veniam id!
          </p>
        </div>

        <div className="mt-12 px-32">
          <div className="flex justify-center">
            <ul className="w-full best-sellers-tab relative flex justify-center items-center text-color-primary font-medium">
              <li className="py-4 px-8 z-10 active">
                <button>Sofa</button>
              </li>
              <li className="py-4 px-8 z-10">
                <button>Table</button>
              </li>
              <li className="py-4 px-8 z-10 active">
                <button>Bed</button>
              </li>
              <li className="py-4 px-8 z-10 ">
                <button>Chair</button>
              </li>
              <li className="py-4 px-8 z-10">
                <button>Lighting</button>
              </li>
              <li className="py-4 px-8 z-10 active">
                <button>Home Decor</button>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-16 mt-6">
            {products.map((item) => (
              <div key={item.id}>
                <Link href={`/product/${item.id}`}>
                  <a>
                    <Image src={product2} width={375} height={250} />
                    <h2 className="text-lg text-center text-color-primary py-2">
                      {item.title}
                    </h2>
                    <p className="pt-2 text-2xl text-center text-color-secondary font-semibold">
                      ${item.price}
                    </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .best-sellers-tab::after {
          content: "";
          width: 100%;
          height: 2px;
          background: #ccc;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .active {
          color: #f25042;
          border-bottom: 2px solid #f25042;
        }
      `}</style>
    </>
  );
};

export default BestSellersSection;
