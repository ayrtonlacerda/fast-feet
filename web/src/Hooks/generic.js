import React, { useCallback, useState } from 'react';

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
  const handleFecth = useCallback(async (fetch, params, id) => {
    console.log({ fetch, params, id })
    setLoading(true)
    try {
      const reponse = await fetch({ ...params }, id);
      console.log({ reponse })
      setResponse({
        success: reponse.data,
        error: false,
      })
    } catch (error) {
      console.log({ error })
      setResponse({
        success: false,
        error: error,
      })
    }
    setLoading(false)
  }, [listen]);
  return [handleFecth, loading, response, resetFetch];
}