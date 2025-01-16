import { useQuery } from "react-query";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

// Function to get trending items
const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/week?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const useTrending = () => {
  return useQuery("trending", getTrending);
};
export const getTrendingByFilter = async (
  filter: string,
  page: number,
  query: string
) => {
  let endpoint = "";

  if (filter) {
    switch (filter) {
      case "Movies":
        endpoint = "movie";
        break;
      case "TV Series":
        endpoint = "tv";
        break;
      default:
        break;
    }
  }

  if (endpoint) {
    if (query) {
      const response = await axios.get(
        `${BASE_URL}search/multi?api_key=${API_KEY}&query=${query}&page=${page}`
      );
      return response.data;
    }
    const response = await axios.get(
      `${BASE_URL}trending/${endpoint}/week?api_key=${API_KEY}&page=${page}`
    );
    return response.data;
  } else {
    return []; // Return an empty array if the filter is not recognized
  }
};
