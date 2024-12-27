import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="relative">
    <ul className="flex flex-row items-center justify-end space-x-4 md:space-x-6 p-4 text-lg md:text-2xl text-white">
      <li className="hover:scale-110 transform transition duration-300 ease-in-out">
        <Link href="/about">About</Link>
      </li>
      <li className="hover:scale-110 transform transition duration-300 ease-in-out">
        <Link href="/dashboard">Dashboard</Link>
      </li>

      <li className="hover:scale-110 transform transition duration-300 ease-in-out">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </div>
  );
};

export default Navbar;