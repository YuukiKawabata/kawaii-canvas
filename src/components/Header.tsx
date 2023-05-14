import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between bg-gray-800 text-white py-6">
      <h1 className="text-xl font-bold">イラストレーターのポートフォリオ</h1>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
