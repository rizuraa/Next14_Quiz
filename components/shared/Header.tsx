import Link from "next/link";
import React from "react";
import LoginButton from "./LoginLogoutButton";

const Header = () => {
  return (
    <header className="w-full border-b shadow">
      <div className="wrapper flex items-center justify-between">
        <Link
          href="/"
          className="w-36"
        >
          Quiz App
        </Link>

        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
