import { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

export const useFetch = (fetch, query) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(query);
      setData(response.data)
    } catch (error) {
      toast.error('Houve um problema, não foi possivel carregar os dados')
      console.log({ ERRO_REQUEST: { fetch, query, error } });
      setData(null);
    }
    setLoading(false);
  }, [fetch, query]);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return [data, loading];
};