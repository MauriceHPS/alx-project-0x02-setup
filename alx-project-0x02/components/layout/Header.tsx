import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col">
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
