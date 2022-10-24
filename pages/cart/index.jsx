import Head from "next/head";
import Router from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    Router.push("/login");
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      {user && (
        <div className="grid place-items-center">
          Burası Cart Sayfası. Login olmadan göremezsin!
        </div>
      )}
    </>
  );
};

export default Cart;
