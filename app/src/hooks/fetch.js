import { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useFetch = (fetch, id, params = {}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(id, {
        ...params,
      });
      setData(response.data);
    } catch (error) {
      console.log({ ERRO_REQUEST: { fetch, params, error } });
      setData(null);
    }
    setLoading(false);
  }, [fetch, params]);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, loading];
};
