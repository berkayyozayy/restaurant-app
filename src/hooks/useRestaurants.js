import React, { useState } from "react";
import yelp from "../api/yelp";

export default (initialTerm = "Burger") => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 15,
          term: searchTerm,
          location: "Istanbul",
        },
      });
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };

  return [results, searchRestaurants];
};
