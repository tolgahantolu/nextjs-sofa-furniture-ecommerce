import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import product2 from "../../public/product-2.png";

import { BiLeftArrowAlt } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Cart = () => {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      {user && (
        <div className="w-11/12 mt-20 pb-20 mx-auto">
          <Link href="/products">
            <a className="inline-flex gap-x-px items-center text-sm font-semibold">
              <span className="text-lg">
                <BiLeftArrowAlt />
              </span>
              Continue Shopping
            </a>
          </Link>

          <h1 className="mt-5 text-4xl text-color-black flex gap-x-4 items-end font-bold">
            Shopping Cart
            <span className="text-color-secondary text-base">3 items</span>
          </h1>

          <div className="flex mt-20">
            {/* left side */}
            <div className="w-2/3">
              <div className="flex items-center border-b-2 py-5 first:pt-0 last:border-none border-slate-300">
                <Image
                  src={product2}
                  width={150}
                  height={75}
                  className="object-center object-cover"
                />
                <div className="flex-1 text-color-black pl-4">
                  <h2 className="font-bold text-lg leading-2">
                    Perfect Dry / Suit Armless Amazing, Crazy Seat
                  </h2>
                  <h3 className="text-sm -mt-[2px] opacity-75 mb-4">
                    Color: Brown, Type: Leather Sofa
                  </h3>
                  <div className="opacity-75 text-sm">
                    <span className="mr-2">Qty.</span>
                    <input
                      type="number"
                      max="99"
                      min="0"
                      className="pl-1 w-10  outline-none focus:outline-none border rounded-md border-slate-300 bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-x-10 items-center pr-10 text-xl">
                  <h2 className="opacity-80 font-bold">$540</h2>
                  <button
                    type="button"
                    className="opacity-50 transition duration-300 hover:opacity-100 hover:text-color-secondary"
                  >
                    <IoMdCloseCircleOutline />
                  </button>
                </div>
              </div>
              <div className="flex items-center border-b-2 py-5 first:pt-0 last:border-none border-slate-300">
                <Image
                  src={product2}
                  width={150}
                  height={75}
                  className="object-center object-cover"
                />
                <div className="flex-1 text-color-black pl-4">
                  <h2 className="font-bold text-lg leading-2">
                    Perfect Dry / Suit Armless Amazing, Crazy Seat
                  </h2>
                  <h3 className="text-sm -mt-[2px] opacity-75 mb-4">
                    Color: Brown, Type: Leather Sofa
                  </h3>
                  <div className="opacity-75 text-sm">
                    <span className="mr-2">Qty.</span>
                    <input
                      type="number"
                      max="99"
                      min="0"
                      className="pl-1 w-10  outline-none focus:outline-none border rounded-md border-slate-300 bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-x-10 items-center pr-10 text-xl ">
                  <h2 className="opacity-80 font-bold">$540</h2>
                  <button
                    type="button"
                    className="opacity-50 transition duration-300 hover:opacity-100 hover:text-color-secondary"
                  >
                    <IoMdCloseCircleOutline />
                  </button>
                </div>
              </div>
              <div className="flex items-center border-b-2 py-5 first:pt-0 last:border-none border-slate-300">
                <Image
                  src={product2}
                  width={150}
                  height={75}
                  className="object-center object-cover"
                />
                <div className="flex-1 text-color-black pl-4">
                  <h2 className="font-bold text-lg leading-2">
                    Perfect Dry / Suit Armless Amazing, Crazy Seat
                  </h2>
                  <h3 className="text-sm -mt-[2px] opacity-75 mb-4">
                    Color: Brown, Type: Leather Sofa
                  </h3>
                  <div className="opacity-75 text-sm">
                    <span className="mr-2">Qty.</span>
                    <input
                      type="number"
                      max="99"
                      min="0"
                      className="pl-1 w-10  outline-none focus:outline-none border rounded-md border-slate-300 bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-x-10 items-center pr-10 text-xl ">
                  <h2 className="opacity-80 font-bold">$540</h2>
                  <button
                    type="button"
                    className="opacity-50 transition duration-300 hover:opacity-100 hover:text-color-secondary"
                  >
                    <IoMdCloseCircleOutline />
                  </button>
                </div>
              </div>
              <div className="flex items-center border-b-2 py-5 first:pt-0 last:border-none border-slate-300">
                <Image
                  src={product2}
                  width={150}
                  height={75}
                  className="object-center object-cover"
                />
                <div className="flex-1 text-color-black pl-4">
                  <h2 className="font-bold text-lg leading-2">
                    Perfect Dry / Suit Armless Amazing, Crazy Seat
                  </h2>
                  <h3 className="text-sm -mt-[2px] opacity-75 mb-4">
                    Color: Brown, Type: Leather Sofa
                  </h3>
                  <div className="opacity-75 text-sm">
                    <span className="mr-2">Qty.</span>
                    <input
                      type="number"
                      max="99"
                      min="0"
                      className="pl-1 w-10  outline-none focus:outline-none border rounded-md border-slate-300 bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-x-10 items-center pr-10 text-xl ">
                  <h2 className="opacity-80 font-bold">$540</h2>
                  <button
                    type="button"
                    className="opacity-50 transition duration-300 hover:opacity-100 hover:text-color-secondary"
                  >
                    <IoMdCloseCircleOutline />
                  </button>
                </div>
              </div>
              <div className="flex items-center border-b-2 py-5 first:pt-0 last:border-none border-slate-300">
                <Image
                  src={product2}
                  width={150}
                  height={75}
                  className="object-center object-cover"
                />
                <div className="flex-1 text-color-black pl-4">
                  <h2 className="font-bold text-lg leading-2">
                    Perfect Dry / Suit Armless Amazing, Crazy Seat
                  </h2>
                  <h3 className="text-sm -mt-[2px] opacity-75 mb-4">
                    Color: Brown, Type: Leather Sofa
                  </h3>
                  <div className="opacity-75 text-sm">
                    <span className="mr-2">Qty.</span>
                    <input
                      type="number"
                      max="99"
                      min="0"
                      className="pl-1 w-10  outline-none focus:outline-none border rounded-md border-slate-300 bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-x-10 items-center pr-10 text-xl ">
                  <h2 className="opacity-80 font-bold">$540</h2>
                  <button
                    type="button"
                    className="opacity-50 transition duration-300 hover:opacity-100 hover:text-color-secondary"
                  >
                    <IoMdCloseCircleOutline />
                  </button>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="w-1/3 py-6 px-6 bg-slate-200  text-color-black">
              <div className="w-1/2">
                <h2 className="text-xl font-bold">Tolgahan Doe</h2>
                <p className="opacity-75 leading-5">
                  Tönü Cad. No:39/12, Konak/İZMİR
                </p>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between text-xl border-b-2 border-slate-400 pb-2">
                  <p>
                    Subtotal <span>(3 items)</span>
                  </p>
                  <p>$640</p>
                </div>

                <form className="flex flex-col gap-y-2 mt-5">
                  <input
                    required
                    type="text"
                    placeholder="Enter name"
                    className="w-full h-10 outline-none focus:outline-none text-color-black border-2 px-2 border-gray-400 placeholder-gray-500"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Enter surname"
                    className="w-full h-10 outline-none focus:outline-none text-color-black border-2 px-2 border-gray-400 placeholder-gray-500"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Enter credit card"
                    className="w-full h-10 outline-none focus:outline-none text-color-black border-2 px-2 border-gray-400 placeholder-gray-500"
                  />
                  <button className="px-6 py-2  font-semibold text-lg bg-color-secondary text-color-white">
                    Checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
