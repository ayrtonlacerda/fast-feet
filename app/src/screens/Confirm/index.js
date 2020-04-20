import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { Header, Button } from 'components';
import ImagePicker from 'react-native-image-picker';
import { useHandleFetch } from 'hooks';
import Endpoint from 'services';
import { Container, ImageContainer, ButtonContainer } from './styles';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Confirm = () => {
  const { user } = useSelector((state) => state.auth);
  const route = useRoute();
  const { id: orderId } = route.params;
  const [image, setImage] = useState();
  const {
    handleFecth, loading, response, resetFetch, Error,
  } = useHandleFetch();

  useEffect(() => {
    ImagePicker.launchImageLibrary(options, (res) => setImage(res));
    // ImagePicker.launchImageLibrary(options, (response) => setImage(response));
  }, []);

  const hadleClick = useCallback(async () => {
    const data = new FormData();
    data.append('file', {
      uri: image.uri,
      name: 'confirm',
      data: image.data,
      type: image.type,
    });
    try {
      const res = await Endpoint.postFile(data);
      const { id } = res.data.file;
      console.log({ idimage: id });
      handleFecth(Endpoint.putProcess, {
        signature_id: id,
        end_date: new Date(),
        deliverymanId: user.id,
        orderId,
      });
    } catch (error) {
      console.log({ error });
    }
  }, [loading, image]);

  useEffect(() => {
    if (response.success) {
      resetFetch();
    }
  }, [response, loading]);


  return (
    <Container>
      <Header title="Confirmar entrega" />
      <ImageContainer source={{ uri: image && image.uri }} />
      <ButtonContainer>
        <Button
          loading={loading}
          text="Enviar"
          colorButton="select"
          margin={0}
          handleClick={hadleClick}
        />
      </ButtonContainer>
      <Error />
    </Container>
  );
};

export default Confirm;
