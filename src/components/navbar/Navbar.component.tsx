import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Navbar = () => (
  <nav className="w-full flex items-center justify-center border-b border-b-white h-20">
    <header className="w-11/12 flex justify-between items-center">
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16 object-contain"
        />
      </div>
      <div className="flex border border-gray-300 overflow-hidden relative text-white text-base px-3 py-3 lg:w-[25rem] w-full">
        <img
          src={search}
          alt="search"
          className="top-1/2 -translate-y-1/2 absolute left-3"
        />
        <Input
          className="bg-transparent w-full border-none outline-none focus:ring-0 focus-visible:ring-0 text-[16px] p-0 pl-6 placeholder:text-white font-medium h-auto"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center justify-center gap-x-1">
        <Button
          variant={"ghost"}
          className="rounded-none"
        >
          <BsThreeDotsVertical />
        </Button>
        <Button variant={"ghost"}>Log in</Button>
        <Button
          variant={"purple"}
          className="rounded-none"
        >
          Sign up
        </Button>
      </div>
    </header>
  </nav>
);

export default Navbar;
