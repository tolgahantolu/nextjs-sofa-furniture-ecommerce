import Head from "next/head";
import Router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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
        <div className="grid place-items-center">
          Burası Cart Sayfası. Login olmadan göremezsin!
        </div>
      )}
    </>
  );
};

export default Cart;
