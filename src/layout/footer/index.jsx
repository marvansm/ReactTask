import React from "react";
import { clsx } from "clsx";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <div className="container mx-auto px-10 flex items-center justify-between bg-black w-[100%]">
      <div className="menu flex gap-30 py-8   flex-wrap">
        <ul className="text-[#A1A1AA] flex flex-col gap-4">
          <li>
            <img
              className="w-[150px]"
              src="https://klbtheme.com/fynode/wp-content/uploads/2024/11/logo-light.png"
              alt=""
            />
          </li>
          <li>Address: 1234 Fashion Street, Suite 567, New York, NY</li>
          <li>Phone: +123 456 7890</li>
          <li>Email: info@example.com</li>
        </ul>
        <ul className="text-[#A1A1AA] flex flex-col">
          <li className="title text-[#ffff] text-[18px] font-semibold mb-[14px]">
            Let Us Help You
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Accessibility Statement
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Your Orders
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Returns & Replacements
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Shipping Rates{" "}
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Refund and Returns{" "}
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Privacy Policy
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Terms and Conditions
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Cookie Settings
          </li>
          <li className=" hover:text-[#707070] duration-75 cursor-pointer">
            Help Center
          </li>
        </ul>
        <ul className="text-[#A1A1AA]">
          <li className="title text-[#ffff] text-[18px] font-semibold mb-[14px]">
            Get to Know Us
          </li>
          <li className="hover:text-[#707070] duration-75 cursor-pointer">
            Careers for Fynode
          </li>
          <li className="hover:text-[#707070] duration-75 cursor-pointer">
            About Fynode
          </li>
          <li className="hover:text-[#707070] duration-75 cursor-pointer">
            Inverstor Relations
          </li>
          <li className="hover:text-[#707070] duration-75 cursor-pointer">
            Fynode Devices
          </li>
          <li className="hover:text-[#707070] duration-75 cursor-pointer">
            Customer reviews
          </li>
          <li className="hover:text-[#707070] duration-75 cursor-pointer">
            Social Responsibility
          </li>
          <li className="hover:text-[#707070] duration-75 cursor-pointer">
            Store Locations
          </li>
        </ul>
        <ul className="text-[#A1A1AA] flex flex-col gap-3">
          <li className="title text-[#ffff] text-[18px] font-semibold mb-[14px]">
            Sign Up for Email
          </li>
          <li>
            Sign up to get first dibs on new arrivals, sales, <br /> exclusive
            content, events and more!
          </li>
          <li>
            <form className={clsx(styles.form)}>
              <input type="email" /> <button>Send</button>{" "}
            </form>
          </li>
          <li className="text-[12px]">
            By subscribing you agree to our{" "}
            <span className="text-[#fff] border-b-1">
              Terms & Conditions and <br /> Privacy & Cookies Policy.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
