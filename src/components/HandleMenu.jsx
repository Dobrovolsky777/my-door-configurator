import React from 'react';

const HandleMenu = ({ handleOptions, selectedHandle, setSelectedHandle, showMenuPanel }) => (
  <div className={`absolute top-4 left-4 bg-white shadow-lg rounded-lg p-4 w-64 z-50 transition-all duration-300 ${showMenuPanel ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
    <h3 className="text-lg font-semibold mb-4">Выбор ручки</h3>
    <div className="space-y-2">
      {handleOptions.map((handle, index) => (
        <button
          key={index}
          onClick={() => setSelectedHandle(handle.image)}
          className={`w-full text-left border p-2 rounded fade-item ${selectedHandle === handle.image ? 'ring-2 ring-blue-500' : ''}`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {handle.name}
        </button>
      ))}
    </div>
  </div>
);

export default HandleMenu;
