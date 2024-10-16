import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    // setLoading(true); 
    try {
      const response = await axios.get(url);
      setData(response.data);
      setError(null); 
    } catch (err) {
      setError(err);
      setData(null); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000); 

    return () => clearInterval(intervalId);
  }, [url]); 

  return { data, loading, error, setLoading };
};

export default useFetchData;
