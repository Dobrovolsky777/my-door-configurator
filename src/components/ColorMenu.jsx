import React from 'react';

const ColorMenu = ({ doorColors, setDoorColor, showMenuPanel }) => (
  <div className={`absolute top-4 left-4 bg-white shadow-lg rounded-lg p-4 w-64 z-50 transition-all duration-300 ${showMenuPanel ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
    <h3 className="text-lg font-semibold mb-4">Выбор цвета двери</h3>
    <div className="grid grid-cols-3 gap-2">
      {doorColors.map((color, index) => (
        <button
          key={index}
          onClick={() => setDoorColor(color)}
          className="w-full h-16 border rounded overflow-hidden focus:ring-2 ring-blue-500 fade-item"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <img
            src={`/images/colors/${color.image}`}
            alt={color.name}
            className="w-full h-full object-cover"
            title={color.name}
          />
        </button>
      ))}
    </div>
  </div>
);

export default ColorMenu;
