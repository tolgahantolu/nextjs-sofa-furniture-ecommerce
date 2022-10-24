import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { register } from "../../firebase";

const Register = () => {
  const router = useRouter();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handlerFormSubmit = async (e) => {
    e.preventDefault();

    const full_name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    await register(full_name, email, password);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <div className="w-3/5 mx-auto h-[400px] mt-20 flex">
        <div className="w-1/2 bg-register-section bg-cover bg-center bg-no-repeat"></div>
        <div className="w-1/2 bg-color-black text-color-white">
          <h1 className="text-center text-[28px] font-bold capitalize mt-3">
            Register
          </h1>
          <p className="text-center text-xs mt-1">
            Register to take advantage!
          </p>

          <div className="w-3/4 mx-auto mt-5">
            <form
              className="flex flex-col gap-y-5"
              onSubmit={handlerFormSubmit}
            >
              <input
                ref={nameInputRef}
                required
                type="text"
                placeholder="Enter full name"
                className="w-full h-10 outline-none focus:outline-none text-color-black border-2 px-2 border-gray-400 placeholder-gray-500"
              />
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
                placeholder="Enter password"
                className="w-full h-10 outline-none focus:outline-none text-color-black border-2 px-2 border-gray-400 placeholder-gray-500"
              />
              <div>
                <button
                  type="submit"
                  className="px-6 py-2  font-semibold text-lg bg-color-secondary"
                >
                  Register
                </button>
                <p className="text-xs mt-8">
                  Have an account?
                  <Link href="/login">
                    <a className="text-color-secondary ml-1 transition-all hover:underline font-medium">
                      Login
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

export default Register;
