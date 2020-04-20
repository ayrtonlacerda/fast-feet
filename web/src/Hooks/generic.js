import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const useHandleFetch = (listen) => {
  const [response, setResponse] = useState({
    success: null,
    error: null,
  })
  const [loading, setLoading] = useState(false);
  const resetFetch = useCallback(() =>  setResponse({
    success: null,
    error: null,
  }), [])
  const handleFecth = useCallback(async (fetch, params, idOrQuery) => {
   
    setLoading(true)
    try {
      const reponse = await fetch({ ...params }, idOrQuery);
      console.log({ reponse })
      toast.info('Tudo certo! ;)')
      setResponse({
        success: reponse.data,
        error: false,
      })
    } catch (error) {
      console.log({ error })
      toast.error('Não foi possivel, tente novamente')
      setResponse({
        success: false,
        error: error,
      })
    }
    setLoading(false)
  }, [listen]);
  return [handleFecth, loading, response, resetFetch];
}