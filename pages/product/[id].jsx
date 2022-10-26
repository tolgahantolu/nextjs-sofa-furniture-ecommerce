import React, { useEffect, useState } from "react";
import Image from "next/image";
import product2 from "../../public/product-2.png";
import { getProductDetailsData } from "../../firebase/index";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";

const ProductDetails = ({ id }) => {
  const [productDetails, setProductDetails] = useState({});

  const getProductDetails = async (id) => {
    const res = await getProductDetailsData(id);
    return setProductDetails(res);
  };

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div className="w-11/12 h-full mt-20 pb-20 mx-auto flex">
      <div className="w-2/4 px-5 py-10 flex justify-center ">
        <div>
          <Image
            src={product2}
            width={500}
            height={300}
            className="object-center object-cover"
          />
          <div className="flex justify-between items-center">
            <Image
              src={product2}
              width={150}
              height={75}
              className="object-center object-cover"
            />
            <Image
              src={product2}
              width={150}
              height={75}
              className="object-center object-cover"
            />
            <Image
              src={product2}
              width={150}
              height={75}
              className="object-center object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-2/4 px-5 py-10 text-color-black ">
        <div className="font-bold">
          <h1 className="text-2xl leading-7">{productDetails.title}</h1>
          <p className="mt-2 mb-3 text-[28px] text-color-secondary">
            ${productDetails.price}
          </p>
        </div>
        <div className="inline-flex gap-x-2 opacity-75">
          <span className="bg-color-black text-color-white px-3 py-1 text-[10px] rounded-2xl">
            In Stock
          </span>
          <span className="bg-color-black text-color-white px-3 py-1 text-[10px] rounded-2xl">
            Sofa
          </span>
          <span className="bg-color-black text-color-white px-3 py-1 text-[10px] rounded-2xl">
            Household
          </span>
        </div>

        <span className="block w-full h-auto border-b border-slate-300 my-6" />

        <p className="opacity-75 leading-[22px]">{productDetails.desc}</p>

        <div className="mt-10 mb-6 inline-block w-50 h-auto bg-red-600">
          <span>
            <AiOutlineMinus />
          </span>
          <input
            type="text"
            value="1"
            max="10"
            min="0"
            className="bg-transparent"
          />
          <span>
            <AiOutlinePlus />
          </span>
        </div>

        <div className="flex items-center gap-x-4">
          <button
            type="button"
            className="uppercase text-lg bg-color-secondary text-color-white font-semibold px-10 py-4 "
          >
            Add To Cart
          </button>
          <button
            type="button"
            className="text-2xl bg-color-white border border-slate-300 rounded-full p-3 transition duration-300 hover:bg-color-secondary hover:text-color-white hover:border-color-secondary"
          >
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = async ({ params: { id } }) => {
  await id;
  return {
    props: {
      id,
    },
  };
};
