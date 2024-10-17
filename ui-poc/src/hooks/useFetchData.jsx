import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const BASE_URL = process.env.REACT_APP_API_URL;
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
      if (url === `${BASE_URL}/motor-health/fetch-motor-health`) {
        fetchData();
      }
    }, 30000);

    return () => clearInterval(intervalId);
  }, [url]);

  return { data, loading, error, setLoading };
};

export default useFetchData;
