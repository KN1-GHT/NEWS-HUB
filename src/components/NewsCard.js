// src/components/NewsCard.jsx
import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover rounded-md" />
      <h3 className="font-bold text-lg mt-2">{article.title}</h3>
      <p className="text-gray-600 mt-2">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
