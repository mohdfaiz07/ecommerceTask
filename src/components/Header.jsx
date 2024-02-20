import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiHospital1 } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { productContext } from "../context/ContextStore";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { bagItems, searchInputVal, setSearchInputVal } = useContext(
    productContext
  );
  const { isAuthenticated, user } = useAuth0();
  console.log(user);

  return (
    <nav className="flex justify-between gap-3 px-10 py-3 items-center shadow-sm hover:shadow-md">
      <Link to="/">
        <img src="/myntra_logo.webp" alt="" className=" h-10 cursor-pointer" />
      </Link>
      <ul className="flex gap-7 uppercase text-sm font-bold ">
        <li>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            women
          </NavLink>
        </li>
        <li>
          <NavLink>Home&living</NavLink>
        </li>
        <li>
          <NavLink>Beauty</NavLink>
        </li>
        <li>
          <NavLink>Studio</NavLink>
        </li>
      </ul>
      <div>
        <input
          type="text"
          placeholder="Search for Products"
          value={searchInputVal}
          onChange={(e) => setSearchInputVal(e.target.value)}
          className=" bg-gray-200 text-sm px-14 py-2"
        />
      </div>
      <div className="flex gap-8 text-xs ">
        <div className="flex items-center flex-col">
          <CiHeart className=" text-base " />
          <h6>Wishlist</h6>
        </div>

        <div className="flex items-center flex-col relative  cursor-pointer ">
          <Link to="/bag">
            <IoBagOutline className="text-base" />
            <h6>Bag</h6>

            {bagItems.length >= 1 && (
              <div className="rounded-full px-1 absolute top-[-8px] right-[-5px]  bg-red-600">
                <p className=" text-white font-bold text-[12px] ">
                  {bagItems.length}
                </p>
              </div>
            )}
          </Link>
        </div>
        <div className="flex items-center flex-col">
          <CgProfile className="text-base" />
          <h6> {user.name}</h6>
        </div>
        {isAuthenticated && <LogoutButton />}
      </div>
    </nav>
  );
};

export default Header;
