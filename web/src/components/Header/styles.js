import styled from 'styled-components';
import { colors, metrics } from '../../styles';
import { Imgs } from '../../assets';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100VW;
  height: 65px;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.WHITE};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 65px;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 45px;
  align-items: center;
  justify-content: center;
  margin: 0 40px 0 0px;
`;

export const Divider = styled.div`
  width: 2px;
  height: 32px;
  
  background-color: ${colors.LIGHT_GREY};
  margin: 0 15px 0 25px;
`;

export const Logo = styled.img.attrs({
  src: Imgs.FASTFEET_LOGO, 
})`
  height: 20px;
  margin: 0 0 0 40px;
`;

export const TextItem = styled.p`
  margin: 0px 10px 0px 10px;
  font-size: 15;
  font-family: Roboto-Bold;
  color: ${props => (props.select ? colors.DARK : colors.GREY)}
`;

export const AdminText = styled.p`
  font-size: 14;
  font-family: Roboto-Bold;
  color: ${colors.DARK};
  margin: 0px;
`;

export const ExitText = styled.p`
  font-size: 14;
  font-family: Roboto-Regular;
  color: ${colors.RED};
  margin: 0px;
`;