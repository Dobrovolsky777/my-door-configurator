import React from 'react';
import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    image: '/images/category1.jpg',
    title: 'Входные двери',
    description: 'Надёжные и стильные двери для вашего дома.',
    delay: 100,
  },
  {
    image: '/images/category2.jpg',
    title: 'Межкомнатные двери',
    description: 'Эстетика и функциональность в одном решении.',
    delay: 200,
  },
  {
    image: '/images/category3.jpg',
    title: 'Раздвижные системы',
    description: 'Идеально для экономии пространства и дизайна.',
    delay: 300,
  },
  {
    image: '/images/category4.jpg',
    title: 'Фурнитура',
    description: 'Ручки, петли и другие аксессуары высокого качества.',
    delay: 400,
  },
];

const Categories = () => {
  return (
    <section id="categories" className="categories my-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Наши Категории</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
