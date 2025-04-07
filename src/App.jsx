import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import Footer from './components/Footer';
import Configurator from './pages/Configurator';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen flex flex-col">

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
              </>
            }
          />
          <Route path="/configurator" element={<Configurator />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
