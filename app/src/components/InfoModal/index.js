import React from 'react';
import { Modal } from 'react-native';
import {
  Container, Box, Title, Text,
} from './styles';
import Button from '../Button';


const Info = ({
  error, msg, show, handleClose, textButton, handleClickButton, title,
}) => (
  <Modal
    animationType="slide"
    transparent
    visible={show}
    onRequestClose={handleClose}
  >
    <Container onPress={handleClose}>
      <Box>
        <Title error>{title}</Title>
        <Text>{msg}</Text>
        <Button

          select
          colorButton={error ? 'delete' : 'select'}
          text={textButton}
          handleClick={handleClickButton}
        />
      </Box>

    </Container>
  </Modal>
);

export default Info;
