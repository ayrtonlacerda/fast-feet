import React, { useCallback, useState } from 'react';

export const useValidator = () => {
  let [error, setError] = useState({});

  const resetError = useCallback(() => { console.log({ error }); setError({}); }, []);

  const checkIsValid = useCallback((data, schema) => {
    Object.keys(schema).map((keySchema) => {
      Object.keys(data).map((keyData) => {
        if (keyData === keySchema) {
          if (schema[keySchema].type === 'email') {
            if (
              schema[keySchema].required
              && (data[keyData] === '')
            ) {
              error[keyData] = 'Email é obrigatorio';
              setError({ ...error });
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data[keyData])) {
              error[keyData] = 'Email invalido';
              setError({ ...error });
            } else {
              delete error[keyData];
              setError({ ...error });
            }
          }
          if (schema[keySchema].type === 'pass') {
            if (
              schema[keySchema].required
              && (data[keyData] === '')
            ) {
              error[keyData] = 'Senha é obrigatorio';
              setError({ ...error });
            } else if (data[keyData].length < 6) {
              error[keyData] = 'Senha deve conter mais de 6 caracteres';
              setError({ ...error });
            } else if (!schema[keySchema].required) {
              delete error[keyData];
              setError({ ...error });
            } else {
              delete error[keyData];
              setError({ ...error });
            }
          }
          if (schema[keySchema].type === 'name') {
            const [, str2] = data[keyData].split(' ');
            if (
              schema[keySchema].required
              && (data[keyData] === '')
            ) {
              error[keyData] = 'Nome é obrigatorio';
              setError({ ...error });
            } else if (!str2) {
              error[keyData] = 'Nome deve conter 2 palavras';
              setError({ ...error });
            } else {
              delete error[keyData];
              setError({ ...error });
            }
          }
          if (schema[keySchema].type === 'text') {
            if (
              schema[keySchema].required
              && data[keyData] === ''
            ) {
              error[keyData] = 'Texto é obrigatorio';
              setError({ ...error });
            } else if (!schema[keySchema].required) {
              delete error[keyData];
              setError({ ...error });
            } else {
              delete error[keyData];
              setError({ ...error });
            }
          }
          if (schema[keySchema].type === 'number') {
            console.log({ num: data[keyData] });
            if (
              schema[keySchema].required
              && (data[keyData] === '')
            ) {
              error[keyData] = 'Numero é obrigatorio';
            } else if (!Number.isInteger(data[keyData])) {
              error[keyData] = 'Numero deve ser um numero inteiro';
              setError({ ...error });
            } else if (!schema[keySchema].required) {
              delete error[keyData];
              setError({ ...error });
            } else {
              delete error[keyData];
              setError({ ...error });
            }
          }
          if (schema[keySchema].type === 'cep') {
            if (
              schema[keySchema].required
              && (data[keyData] === '')
            ) {
              error[keyData] = 'CEP é obrigatorio';
              setError({ ...error });
            } else if (!/\d{5}-?\d{3}/i.test(data[keyData])) {
              error[keyData] = 'CEP invalido (obs: tem que inserir o " - ")';
              setError({ ...error });
            } else if (!schema[keySchema].required) {
              delete error[keyData];
              setError({ ...error });
            } else {
              delete error[keyData];
              setError({ ...error });
            }
          }
        }
      });
    });
    if (Object.keys(error).length === 0) {
      error = false;
      setError(error);
    }
  }, [error]);

  return [checkIsValid, error, resetError];
};
