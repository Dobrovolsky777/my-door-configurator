import React from 'react';

const HingeMenu = ({ hingeOptions, selectedHinge, setSelectedHinge, showMenuPanel }) => (
  <div className={`absolute top-4 left-4 bg-white shadow-lg rounded-lg p-4 w-64 z-50 transition-all duration-300 ${showMenuPanel ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
    <h3 className="text-lg font-semibold mb-4">Выбор петель</h3>
    <div className="space-y-2">
      {hingeOptions.map((hinge, index) => (
        <button
          key={index}
          onClick={() => setSelectedHinge(hinge.image)}
          className={`w-full text-left border p-2 rounded fade-item ${selectedHinge === hinge.image ? 'ring-2 ring-blue-500' : ''}`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {hinge.name}
        </button>
      ))}
    </div>
  </div>
);

export default HingeMenu;
