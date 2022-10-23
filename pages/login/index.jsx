import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { login } from "../../firebase";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handlerFormSubmit = async (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    await login(email, password);
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="w-3/5 mx-auto h-[350px] mt-20 flex">
        <div className="w-1/2 bg-login-section bg-cover bg-center bg-no-repeat"></div>
        <div className="w-1/2 bg-color-black text-color-white">
          <h1 className="text-center  text-[28px] font-bold capitalize mt-3">
            login
          </h1>
          <p className="text-center text-xs mt-1">
            Enter login details to get access
          </p>

          <div className="w-3/4 mx-auto mt-5">
            <form
              className="flex flex-col gap-y-5"
              onSubmit={handlerFormSubmit}
            >
              <input
                ref={emailInputRef}
                required
                type="email"
                placeholder="Email adress"
                className="w-full h-10 outline-none focus:outline-none text-color-black border-2 px-2 border-gray-400 placeholder-gray-500"
              />
              <input
                ref={passwordInputRef}
                required
                type="password"
                placeholder="Enter Password"
                className="w-full h-10 outline-none focus:outline-none text-color-black border-2 px-2 border-gray-400 placeholder-gray-500"
              />
              <div>
                <button
                  type="submit"
                  className="px-6 py-2  font-semibold text-lg bg-color-secondary"
                >
                  Login
                </button>
                <p className="text-xs mt-8">
                  Don't have an account?
                  <Link href="/register">
                    <a className="text-color-secondary ml-1 transition-all hover:underline font-medium">
                      Register
                    </a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
