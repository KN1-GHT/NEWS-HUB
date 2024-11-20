import { useQuery } from 'react-query';
import axios from 'axios';

const fetchNews = async (page = 1) => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=Nothing&pageSize=10&page=${page}&apiKey=${'dabf6664781641729c79c3a40fccf201'}`);
  return response.data;
};

const useFetchNews = (page) => {
  return useQuery(['news', page], () => fetchNews(page), {
    keepPreviousData: true,
  });
};

export default useFetchNews;
