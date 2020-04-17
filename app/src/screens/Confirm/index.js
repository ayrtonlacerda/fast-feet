import React, { useCallback, useState, useEffect } from 'react';
import { Header, Input, Button } from 'components';
import ImagePicker from 'react-native-image-picker';
import { Container, ImageContainer, ButtonContainer } from './styles';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Confirm = ({ handleSend }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    ImagePicker.launchImageLibrary(options, (response) => setImage(response));
    // ImagePicker.launchImageLibrary(options, (response) => setImage(response));
  }, []);


  return (
    <Container>
      <Header title="Confirmar entrega" />
      <ImageContainer source={{ uri: image && image.uri }} />
      <ButtonContainer>
        <Button text="Enviar" colorButton="select" margin={0} />
      </ButtonContainer>
    </Container>
  );
};

export default Confirm;
