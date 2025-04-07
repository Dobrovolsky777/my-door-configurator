import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900">
          Interius.si
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600 ">Главная</Link>
          <Link to="/configurator" className="text-gray-600 hover:text-blue-600">Конфигуратор</Link>
          <a href="#contacts" className="text-gray-600 hover:text-blue-600">Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
