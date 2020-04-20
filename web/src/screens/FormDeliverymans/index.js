import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Container,
  MainContainer,
} from './styles';
import AvatarInput from './AvatarInput';
import { Input, Loader, HeaderPage } from '../../components';
import { useFormData } from '../../Hooks';
import Endpoint from '../../services';

const schemaStore = {
  name: {
    required: true,
    type: 'name',
  },
  email: {
    required: true,
    type: 'email',
  }
}

const schemaPut = {
  name: {
    required: false,
    type: 'name',
  },
  email: {
    required: false,
    type: 'email',
  }
}

const FormDeliverymans = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [file, setFile] = useState({});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if(item) {
      setEmail(item.email);
      setName(item.name);
      setFile(item.avatar);
    }
  }, []);

  const [handleOnSave, loading, error] = useFormData({
      email,
      name,
      avatar_id: file && file.id,
    }, 
    Endpoint.postDeliverymans, 
    Endpoint.putDeliverymans, 
    item, 
    schemaStore, 
    schemaPut
   );

  return (
    <Container>
     <HeaderPage 
        title="Cadastro de Entregadores" 
        form 
        handleOnSave={handleOnSave} 
      />
      {loading ? <Loader /> : (
        <MainContainer>
          <AvatarInput 
            name='avatar_id' 
            handleOnChange={setFile}
            file={file}
          />
            <Input 
              padding 
              title='Nome' 
              value={name} 
              handleOnChange={setName} 
              name='name'
              error={error}
              placeholder='Jose Pereira'
            />
            <Input 
              title='Email' 
              value={email} 
              handleOnChange={setEmail} 
              type='email'
              name='email'
              error={error}
              placeholder='entregador@email.com'
            />
        </MainContainer>    
      )}   
      
    </Container>
  );
};

export default FormDeliverymans;