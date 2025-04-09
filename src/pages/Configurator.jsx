import React, { useState } from 'react';
import html2canvas from 'html2canvas';

import doorModels from '../data/doorModels.json';
import doorColors from '../data/doorColors.json';
import handleOptions from '../data/handleOptions.json';
import hingeOptions from '../data/hingeOptions.json';

import ModelMenu from "../components/ModelMenu";
import GlassMenu from "../components/GlassMenu";
import ColorMenu from "../components/ColorMenu";
import HandleMenu from "../components/HandleMenu";
import HingeMenu from "../components/HingeMenu";

import '../styles/animations.css';

const Configurator = () => {
  const [menu, setMenu] = useState('');
  const [showMenuPanel, setShowMenuPanel] = useState(false);
  const [position, setPosition] = useState({ x: -20, y: 78 });
  const [size, setSize] = useState({ width: 300, height: 'auto' });
  const [glassOffset, setGlassOffset] = useState({ x: 0, y: 0 });
  const [glassScale, setGlassScale] = useState(1);
  const [hingeScale, setHingeScale] = useState(1); // <-- Добавлено
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoorData, setSelectedDoorData] = useState(doorModels[0]);
  const [showControlMenu, setShowControlMenu] = useState(false);
  const [hasTopGlass, setHasTopGlass] = useState(false);
  const [viewInside, setViewInside] = useState(true);
  const [selectedHandle, setSelectedHandle] = useState(handleOptions[0].image);
  const [selectedHinge, setSelectedHinge] = useState(hingeOptions[0].image);
  const [doorColor, setDoorColor] = useState(doorColors[0]);

  const doorOffset = { x: 12, y: -19 };
  const backgroundOffset = { x: -20, y: 30 };

  const toggleMenu = (menuName) => {
    if (menu === menuName) {
      hideMenu();
    } else {
      setMenu(menuName);
      setShowMenuPanel(true);
    }
  };

  const hideMenu = () => {
    setShowMenuPanel(false);
    setTimeout(() => setMenu(''), 300);
  };

  const handleDoorChange = (door) => {
    setSelectedDoorData(door);
    hideMenu();
  };

  const filteredDoors = doorModels.filter((door) =>
    door.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExport = () => {
    const node = document.getElementById('configurator-view');
    html2canvas(node).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'door-configuration.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <aside className="bg-white w-full md:w-64 border-r p-4 space-y-2">
        <h2 className="text-xl font-bold mb-4">Меню</h2>
        <button onClick={() => toggleMenu('model')} className="block w-full text-left hover:bg-gray-200 px-3 py-2 rounded transform transition duration-200 hover:scale-105">🚪 Модель двери</button>
        <button onClick={() => toggleMenu('glassIn')} className="block w-full text-left hover:bg-gray-200 px-3 py-2 rounded transform transition duration-200 hover:scale-105">🛡️ Добавить остекление</button>
        <button onClick={() => toggleMenu('color')} className="block w-full text-left hover:bg-gray-200 px-3 py-2 rounded transform transition duration-200 hover:scale-105">🩸 Цвет двери</button>
        <button onClick={() => toggleMenu('handle')} className="block w-full text-left hover:bg-gray-200 px-3 py-2 rounded transform transition duration-200 hover:scale-105">🧷 Ручка</button>
        <button onClick={() => toggleMenu('hinge')} className="block w-full text-left hover:bg-gray-200 px-3 py-2 rounded transform transition duration-200 hover:scale-105">💈 Петли</button>
        <button onClick={() => setViewInside(!viewInside)} className="block w-full text-left hover:bg-gray-200 px-3 py-2 rounded transform transition duration-200 hover:scale-105">🔄 Вид: {viewInside ? 'Внутри' : 'Снаружи'}</button>
        <button onClick={() => setShowControlMenu(!showControlMenu)} className="block w-full text-left hover:bg-gray-200 px-3 py-2 rounded transform transition duration-200 hover:scale-105">⚙️ Управление дверью</button>
        <button onClick={handleExport} className="block w-full text-left hover:bg-gray-200 px-3 py-2 rounded transform transition duration-200 hover:scale-105">💾 Сохранить</button>
      </aside>

      <main
        className="flex-grow bg-cover bg-center flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div
          id="configurator-view"
          className="w-full h-full bg-cover bg-center scale-75"
          style={{
            backgroundImage: `url('/images/${viewInside ? 'interior' : 'exterior'}.jpg')`,
            backgroundPosition: `${50 + backgroundOffset.x}% ${50 + backgroundOffset.y}%`,
            position: 'relative',
          }}
        >
          <div
            className="absolute cursor-move transition-all"
            style={{
              top: `calc(50% + ${position.y + doorOffset.y}px)`,
              left: `calc(50% + ${position.x + doorOffset.x}px)`,
              transform: 'translate(-50%, -50%)',
              width: `${size.width}px`,
              height: size.height,
            }}
          >
            <img src={`/images/colors/${doorColor.image}`} alt={doorColor.name} className="w-full h-full object-contain absolute top-0 left-0 z-0" />

            {hasTopGlass && (
              <div
                className="absolute"
                style={{
                  top: `${glassOffset.y - 126}px`,
                  left: `${glassOffset.x - 37}px`,
                  width: '125%',
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <img
                  src="/images/glass_top.png"
                  alt="Top Glass"
                  style={{
                    width: `${glassScale * 80}%`,
                    height: 'auto',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
            )}

            <img src={`/images/${selectedHandle}`} alt="handle" className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" style={{ width: '40px' }} />

            <img
              src={`/images/${selectedHinge}`}
              alt="hinge"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
              style={{ width: `${1000 * hingeScale}px`, transition: 'all 0.3s ease' }}
            />

            <img src={selectedDoorData.image} alt="door" className="w-full h-full object-contain relative z-1" />
          </div>
        </div>

        <div
          className={`absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 w-64 z-50 space-y-4 transition-all duration-300 ${
            showControlMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <h3 className="text-lg font-semibold">Управление дверью</h3>
          <div>
            <label className="block text-sm font-medium mb-1">Ширина двери: {size.width}px</label>
            <input
              type="range"
              min="200"
              max="400"
              value={size.width}
              onChange={(e) => setSize({ ...size, width: Number(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Положение двери</label>
            <div className="flex justify-center space-x-2 mt-1">
              <button onClick={() => setPosition(p => ({ ...p, y: p.y - 10 }))}>⬆️</button>
            </div>
            <div className="flex justify-center space-x-2">
              <button onClick={() => setPosition(p => ({ ...p, x: p.x - 10 }))}>⬅️</button>
              <button onClick={() => setPosition({ x: 0, y: 0 })}>Центр</button>
              <button onClick={() => setPosition(p => ({ ...p, x: p.x + 10 }))}>➡️</button>
            </div>
            <div className="flex justify-center space-x-2">
              <button onClick={() => setPosition(p => ({ ...p, y: p.y + 10 }))}>⬇️</button>
            </div>
          </div>
        </div>

        {menu === 'model' && (
          <ModelMenu
            showMenuPanel={showMenuPanel}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredDoors={filteredDoors}
            handleDoorChange={handleDoorChange}
          />
        )}

        {menu === 'glassIn' && (
          <GlassMenu
            hasTopGlass={hasTopGlass}
            setHasTopGlass={setHasTopGlass}
            showMenuPanel={showMenuPanel}
          />
        )}

        {menu === 'color' && (
          <ColorMenu
            doorColors={doorColors}
            doorColor={doorColor}
            setDoorColor={setDoorColor}
            showMenuPanel={showMenuPanel}
          />
        )}

        {menu === 'handle' && (
          <HandleMenu
            handleOptions={handleOptions}
            selectedHandle={selectedHandle}
            setSelectedHandle={setSelectedHandle}
            showMenuPanel={showMenuPanel}
          />
        )}

        {menu === 'hinge' && (
          <HingeMenu
            hingeOptions={hingeOptions}
            selectedHinge={selectedHinge}
            setSelectedHinge={setSelectedHinge}
            hingeScale={hingeScale}
            setHingeScale={setHingeScale}
            showMenuPanel={showMenuPanel}
          />
        )}
      </main>
    </div>
  );
};

export default Configurator;
