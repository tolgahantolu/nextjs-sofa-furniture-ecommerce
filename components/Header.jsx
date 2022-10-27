import React from "react";
import logoImage from "../public/logo.png";
import {
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { logout } from "../firebase";
import { useRouter } from "next/router";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  const handlerLogout = () => {
    if (user) {
      logout();
      router.push("/login");
    }
  };

  return (
    <header className="w-full h-25 flex items-center bg-background-primary">
      <div className="absolute top-0 left-0 z-10">
        <Link href="#">
          <a>
            <Image
              src={logoImage}
              width={150}
              height={125}
              className="object-center object-cover"
            />
          </a>
        </Link>
      </div>
      <nav className="pl-50 flex-1">
        <ul className="flex gap-x-6 font-medium text-color-primary text-lg">
          <li className="transition duration-300 hover:text-color-secondary">
            <Link href="/">
              <a className="capitalize">home</a>
            </Link>
          </li>
          <li className="transition duration-300 hover:text-color-secondary">
            <Link href="/products">
              <a className="capitalize">products</a>
            </Link>
          </li>
          <li className="transition duration-300 hover:text-color-secondary">
            <Link href="/">
              <a className="capitalize">blog</a>
            </Link>
          </li>
          <li className="transition duration-300 hover:text-color-secondary">
            <Link href="/">
              <a className="capitalize">about</a>
            </Link>
          </li>
          <li className="transition duration-300 hover:text-color-secondary">
            <Link href="/">
              <a className="capitalize">contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-x-10 pr-8">
        <label className="flex items-center">
          <input
            type="text"
            placeholder="Search Products"
            className="w-60 h-10 border-b bg-transparent border-color-primary placeholder-color-primary placeholder:opacity-60 outline-none focus:outline-none"
          />
          <button className="w-auto text-2xl grid place-items-center h-10 border-b border-color-primary">
            <AiOutlineSearch />
          </button>
        </label>
        <div className="flex gap-x-6">
          {user ? (
            <button type="button" onClick={handlerLogout}>
              <span className="text-4xl">
                <FaSignOutAlt />
              </span>
            </button>
          ) : (
            <Link href="/login">
              <a className="text-4xl">
                <AiOutlineUser />
              </a>
            </Link>
          )}
          <div className="relative">
            <Link href="/cart">
              <a className="text-4xl">
                <AiOutlineShopping />
              </a>
            </Link>
            <Link href="/cart">
              <a className="w-6 h-6 text-color-white bg-color-secondary absolute -bottom-1 -right-1 rounded-full grid place-items-center">
                0
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
