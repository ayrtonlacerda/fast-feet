import styled from 'styled-components';
import { colors } from '../../styles';
import { Imgs } from '../../assets';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.PURPLE};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 425px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 2px 30px ${colors.PURPLE_DARK};
  align-items: center;
  justify-content: center;
  background-color: ${colors.WHITE};
  padding: 30px 30px 30px 30px;
`;

export const Logo = styled.img.attrs({
  src: Imgs.FASTFEET_LOGO, 
})`
  margin: 40px;
`;