import React, { useCallback, useState } from 'react';
import { InfoModal } from 'components';

export const useHandleFetch = (listen) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    success: null,
    error: null,
  });

  const resetFetch = useCallback(() => setResponse({
    success: null,
    error: null,
  }), []);

  const Error = () => (
    <InfoModal
      error
      title="Error!"
      show={error}
      textButton="OK"
      handleClose={() => setError(false)}
      handleClickButton={() => setError(false)}
      msg="Ocorreu um erro, confira os dados e seu acesso a internet e tente novamente"
    />
  );

  const handleFecth = useCallback(async (fetch, params, id) => {
    setLoading(true);
    try {
      const reponse = await fetch({ ...params }, id);
      setResponse({
        success: reponse.data,
        error: false,
      });
    } catch (err) {
      console.log({ err });
      setError(true);
      setResponse({
        success: false,
        error: err,
      });
    }
    setLoading(false);
  }, [listen]);

  return {
    handleFecth, loading, response, resetFetch, Error,
  };
};
