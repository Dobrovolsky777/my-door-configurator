import React from 'react';

const CategoryCard = ({ image, title, description, delay }) => {
  return (
    <div
      className="category-card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
