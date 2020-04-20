import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, TextButton } from './styles';
import { MdAdd, MdArrowBack, MdCheck, MdPlayForWork} from 'react-icons/md';
import { colors } from '../../styles';

const Button = ({ 
  big,
  text,
  grey,
  goBack,
  outline,
  iconPlus,
  iconBack,
  iconCheck,
  leftMangin,
  handleClick,
}) => {
  let history = useHistory();
  return (
    <Container 
      big={big} 
      left={leftMangin} 
      grey={grey} 
      onClick={goBack ? () => history.goBack() : handleClick}
      outline={outline}
    >
      {iconPlus && (
        <MdAdd 
          size={25}
          color={colors.WHITE}
          style={{
            marginLeft: 10
          }}
        />
      )}  
      {iconBack && (
        <MdArrowBack 
          size={25}
          color={colors.WHITE}
          style={{
            marginLeft: 10
          }}
        />
      )}  
      {iconCheck && (
        <MdCheck 
          size={25}
          color={colors.WHITE}
          style={{
            marginLeft: 10
          }}
        />
      )}  
      <TextButton outline={outline} icon={iconPlus}>{text}</TextButton>
    </Container>
  )
};

export default Button;
