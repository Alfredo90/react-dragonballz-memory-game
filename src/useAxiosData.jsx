import { useEffect, useState } from "react";

import axios from "axios";

const useAxiosData = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios(api);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [api]);

  return { data, loading, error };
};

export default useAxiosData;
