import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white text-center py-32"
      style={{ backgroundImage: "url('/public/images/image.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Создайте свою идеальную дверь</h2>
        <p className="text-lg md:text-xl mb-8">Выбирайте материалы, цвета и стиль под себя</p>
        <a
          href="#categories"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Перейти к категориям
        </a>
      </div>
    </section>
  );
};

export default Hero;
