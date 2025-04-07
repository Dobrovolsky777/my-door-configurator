import React from "react";
import { useParams } from "react-router-dom";

const categoryData = {
  "vkhodnye-dveri": {
    title: "Входные двери",
    description: "Надёжные и стильные двери для вашего дома.",
    image: "/images/category1.jpg",
  },
  "mezhkomnatnye-dveri": {
    title: "Межкомнатные двери",
    description: "Эстетика и функциональность в одном решении.",
    image: "/images/category2.jpg",
  },
  "razdvizhnye-sistemy": {
    title: "Раздвижные системы",
    description: "Идеально для экономии пространства и дизайна.",
    image: "/images/category3.jpg",
  },
  furnitura: {
    title: "Фурнитура",
    description: "Ручки, петли и другие аксессуары высокого качества.",
    image: "/images/category4.jpg",
  },
};

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categoryData[slug];

  if (!category) {
    return (
      <div className="text-center py-20 text-2xl text-red-600">
        Категория не найдена
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-6">{category.title}</h2>
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
      />
      <p className="text-lg text-gray-700">{category.description}</p>
    </div>
  );
};

export default CategoryPage;
