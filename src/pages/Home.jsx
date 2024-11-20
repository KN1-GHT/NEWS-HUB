// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import useFetchNews from '../hooks/useFetchNews';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useFetchNews(page);

  // Save fetched data to localStorage
  useEffect(() => {
    if (data) {
      localStorage.setItem(`newsPage-${page}`, JSON.stringify(data));
    }
  }, [data, page]);

  if (isLoading) return <div className='flex items-center justify-center h-screen text-center text-4xl'>Loading...</div>;
  if (isError) return <div className='flex items-center justify-center h-screen text-center text-3xl text-red-600'>Error loading news.</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl text-center font-bold py-5 mb-5 bg-gray-400">Personalized News Hub</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.articles?.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-gray-400 p-2 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data?.totalResults <= page * 10}
          className="bg-gray-400 p-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
