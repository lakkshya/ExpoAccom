import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelToken;

    const fetchData = async () => {
      try {
        cancelToken = axios.CancelToken.source();
        const response = await axios.get(url, {
          cancelToken: cancelToken.token,
        });
        setData(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // Cleanup on unmount
    return () => {
      if (cancelToken) {
        cancelToken.cancel("Operation canceled by the user.");
      }
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
