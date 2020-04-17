import React from 'react';
import { Container, Title, Ball, TextBall, AvatarImage } from './styles';
import Options from '../../../Options';
import { colors, selectColors } from '../../../../styles';

const TextColumn = ({
  id,
  item,
  name,
  size,
  text,
  table,
  index,
  header,
  avatar,
  deliveryman,
}) => {
  let abbName = '';
  if(deliveryman) {
    const [first, second] = (name || text).split(' ');
    abbName = `${first.charAt(0).toUpperCase()}${second ? second.charAt(0).toUpperCase() : ''}`;
  }
  return(
  <Container header={header} size={size}>
    {deliveryman && !header && ( avatar ? (
      <AvatarImage src={avatar.url} />
    ) : (
      <Ball index={index % 6}>
        <TextBall index={index % 6}>{abbName}</TextBall>
      </Ball>
    ))
    }
    {name === '...' ? <Options header={header} tables={table} item={item} /> : (
      <Title header={header}>
        {name}
      </Title>
    )}
    
  </Container>
)};

export default TextColumn;
