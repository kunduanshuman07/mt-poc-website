import { useState, useEffect } from 'react';
import axios from 'axios';
import { usePulseLoading } from "../context/LoadingProvider"
import { useFilter } from '../context/FilterProvider';

const useFetchData = (url) => {
  const { setPulseLoading } = usePulseLoading();
  const { refresh, interval } = useFilter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setPulseLoading(true);
    try {
      const updatedUrl = `${url}?intervalseconds=${interval}`;
      const response = await axios.get(updatedUrl, interval);
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
    }, refresh * 1000);

    return () => clearInterval(intervalId);
  }, [url, refresh, interval]);

  return { data, loading, error, setLoading };
};

export default useFetchData;
