import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        if (!res.statusText) throw new Error("Something went wrong!");
        setData(res.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
