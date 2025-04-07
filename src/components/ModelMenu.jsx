
import React from 'react';

const ModelMenu = ({ showMenuPanel, searchQuery, setSearchQuery, filteredDoors, handleDoorChange }) => (
  <div className={`absolute top-4 left-4 bg-white shadow-lg rounded-lg p-4 max-h-[80vh] overflow-y-auto w-64 z-50 transition-all duration-300 ${showMenuPanel ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
    <h3 className="text-lg font-semibold mb-2">Поиск модели двери</h3>
    <input
      type="text"
      placeholder="Поиск по номеру..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full mb-3 p-2 border rounded"
    />
    <div className="space-y-2">
      {filteredDoors.map((door) => (
        <div
          key={door.id}
          className="border hover:shadow cursor-pointer rounded overflow-hidden fade-item"
          onClick={() => handleDoorChange(door)}
        >
          <img src={door.image} alt={door.name} className="w-full h-32 object-cover" />
          <div className="p-2 text-center font-medium">{door.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ModelMenu;
