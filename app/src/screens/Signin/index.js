import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from 'components';
import { AuthActions } from 'store/auth/ducks';
import { Container, ImageLogo, StatusBar } from './styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');

  const handleClick = useCallback(() => {
    console.log({ emaliHandleclick: email });
    if (email !== '') {
      dispatch(AuthActions.authRequest(email));
    }
  }, [email, user, error]);

  useEffect(() => {
    if (user) {
      // navigation.navigate('Dashboard');
    }
    if (error) {
      console.log({ error });
    }
  }, [user, error]);

  return (
    <Container>
      <StatusBar />
      <ImageLogo />
      <Input
        placeholder="Informe seu ID de cadastro"
        handleChangeText={setEmail}
        value={email}
      />
      <Button
        text="Entrar no sistema"
        handleClick={handleClick}
        doubleMargin={false}
      />
    </Container>
  );
};


export default SignIn;
