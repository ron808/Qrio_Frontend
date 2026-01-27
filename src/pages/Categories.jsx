import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Science', icon: '🔬', color: 'bg-blue-100' },
    { name: 'History', icon: '📜', color: 'bg-yellow-100' },
    { name: 'Geography', icon: '🌍', color: 'bg-green-100' },
    { name: 'Sports', icon: '⚽', color: 'bg-orange-100' },
    { name: 'Movies', icon: '🎬', color: 'bg-purple-100' },
    { name: 'Music', icon: '🎵', color: 'bg-pink-100' },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-qrio-text mb-12 text-center">
        Quiz Categories
      </h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            to="/play"
            className={`${category.color} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <div className="text-6xl mb-4 text-center">{category.icon}</div>
            <h3 className="text-2xl font-bold text-qrio-text text-center">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;