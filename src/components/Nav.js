import React from 'react';
// import data
import { navData } from '../data';

const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className="flex flex-col items-center justify-center h-full gap-y-6">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-xl italic capitalize transition-all duration-300 font-primary hover:text-dark"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
