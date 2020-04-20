import React, { useCallback, useState, useEffect } from 'react';
import { useValidator, useHandleFetch } from './index';

export const useFormData = (data, fetchStore, fetchPut, item, schemaStore, schemaPut) => {
  const [checkIsValid, error, resetError] = useValidator();
  const {
    handleFecth, loading, response, resetFetch,
  } = useHandleFetch();

  const handleOnSalve = () => {
    checkIsValid(data, item ? schemaPut : schemaStore);
  };

  useEffect(() => {
    console.log({ data });
    if (!error) {
      resetError();
      if (item) {
        handleFecth(fetchPut, data, item.id);
      } else {
        handleFecth(fetchStore, data);
      }
    }
  }, [error, data]);

  useEffect(() => {
    if (response.success) {
      resetFetch();
    }
  }, [response, loading]);

  return [handleOnSalve, loading, error];
};
