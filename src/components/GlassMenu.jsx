import React from 'react';

const GlassMenu = ({ hasTopGlass, setHasTopGlass, showMenuPanel }) => (
  <div className={`absolute top-4 left-4 bg-white shadow-lg rounded-lg p-4 w-64 z-50 transition-all duration-300 ${showMenuPanel ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
    <h3 className="text-lg font-semibold mb-4">Добавить остекление</h3>
    <label className="flex items-center gap-2 fade-item" style={{ animationDelay: '100ms' }}>
      <input
        type="checkbox"
        checked={hasTopGlass}
        onChange={() => setHasTopGlass(!hasTopGlass)}
      />
      Остекление сверху
    </label>
  </div>
);

export default GlassMenu;
