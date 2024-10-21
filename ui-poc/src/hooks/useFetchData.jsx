import { useState, useEffect } from 'react';
import axios from 'axios';
import { usePulseLoading } from "../context/LoadingProvider"

const useFetchData = (url) => {
  const { setPulseLoading } = usePulseLoading();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    // setLoading(true);
    setPulseLoading(true); 
    try {
      const response = await axios.get(url);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
      setPulseLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(intervalId);
  }, [url]);

  return { data, loading, error, setLoading };
};

export default useFetchData;
