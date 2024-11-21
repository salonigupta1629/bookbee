"use client"
import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HiBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 w-full lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-black"
      >
        <Link href="/" className="flex items-center hover:text-blue-500 transition-colors">
          Dashboard
          </Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-black"
      >
        <Link href="/admin/student" className="flex items-center hover:text-blue-500 transition-colors">
          Students
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-black"
      >
        <Link href="/admin/book" className="flex items-center hover:text-blue-500 transition-colors">
          Books
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-black"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Logout
        </a>
      </Typography>
    </ul>
  );
}
 
export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 bg-gray-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-black font-bold text-2xl"
        >
          BookBee
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <HiMiniXMark className="h-6 w-6" strokeWidth={2} />
          ) : (
            <HiBars3 className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
     
    </Navbar>
  );
}