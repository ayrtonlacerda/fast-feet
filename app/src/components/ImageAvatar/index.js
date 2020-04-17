import React from 'react';
import { Container, Title, Image } from './styles';

const ImageAvatar = ({ name = 'Um Nome', avatar, big }) => {
  let abbName = '';

  const [first, second] = name.split(' ');
  abbName = `${first
    .charAt(0).toUpperCase()}${second ? second.charAt(0).toUpperCase() : ''}`;
  if (avatar) {
    return (
      <Image src={avatar} big={big} />
    );
  }
  return (
    <Container big={big}>
      <Title big={big}>{abbName}</Title>
    </Container>
  );
};
export default ImageAvatar;
