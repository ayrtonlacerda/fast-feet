import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../../store/auth/ducks';
import { Container, Box, Logo } from './styles';
import { Input, Button } from '../../components';
import { useValidator } from '../../Hooks';
import history from '../../router/history';

const schema = {
  email: {
    required: true,
    type: 'email',
  },
  password: {
    required: true,
    type: 'pass'
  }
}


const SignIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [checkIsValid, error, resetError] = useValidator();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSalve = () => {
    console.log('handleOnSalve')
    checkIsValid({ email, password }, schema);
  };

  //admin@fastfeet.com
  useEffect(() => {
    if(!error && !auth.loading) {
      console.log('dispatch')
      dispatch(AuthActions.authRequest(email, password));
    } 
  }, [error, auth.loading]);

  useEffect(() => {
    console.log({ auth })
    if(auth.token) {
      history.push('/list/orders')
    }
    if(auth.error) {
      resetError();
    }
  }, [auth.token, auth.error])

  return (
    <Container>
      <Box >
        <Logo />
        <Input 
          title='SEU EMAIL'
          placeholder='exemplo@email.com'
          type='email'
          name='email'
          handleOnChange={setEmail}
          error={error}
        />
        <Input
          title='SUA SENHAZ'
          placeholder='*************'
          type='password'
          name='password'
          handleOnChange={setPassword}
          error={error}
        />
        <Button big text='Entrar no sistema' handleClick={handleOnSalve} />
      </Box>
    </Container>
  )
};

export default SignIn;
