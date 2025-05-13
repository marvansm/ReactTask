import React from "react";
import {
  Search,
  ChevronDown,
  CircleUser,
  Heart,
  RefreshCcw,
  ShoppingCart,
} from "lucide-react";
import { clsx } from "clsx";
import styles from "../header/style.module.scss";
import { navBar } from "../../constant/navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto px-4  flex-wrap sm:px-6 lg:px-10 flex items-center justify-between py-8">
        <div className="flex items-center gap-4 sm:gap-10">
          <img
            src="https://klbtheme.com/fynode/wp-content/uploads/2024/11/logo-black.png"
            alt="logo"
            className="h-6 sm:h-8"
          />

          <ul
            className={clsx(styles.items, "hidden sm:flex items-center gap-6")}
          >
            {navBar &&
              navBar.map((item, index) => (
                <Link to={item.path} key={index}>
                  <li key={index} className="flex items-center gap-1 text-sm">
                    {item.name}
                    <ChevronDown size={16} />
                  </li>
                </Link>
              ))}
          </ul>
        </div>
        <div className={clsx(styles.right)}>
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Search />
            </li>
            <li className="hidden sm:flex items-center gap-2">
              <CircleUser />
              Account
            </li>
            <li>
              <Heart />
            </li>
            <li>
              <RefreshCcw />
            </li>
            <li>
              <ShoppingCart />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
