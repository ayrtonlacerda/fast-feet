import styled from 'styled-components';
import { colors, selectColors } from '../../../../styles';

const widthSize = {
  small: '60px', 
  medium: '12vw',
  big: '25vw',
  verybig: '60vw',
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.size === 'small' ? 'center': 'flex-start')};
  align-items: center;
  height: 55px;
  width: ${props => widthSize[props.size]};
  margin: 0 5px 0 5px;
`;

export const AvatarImage = styled.img.attrs({
  source: props => props.src, 
})`
  height: 35px;
  width: 35px;
  border-radius: 17.5px;
  margin: 0 8px 0 0;
`;


export const Ball = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 17.5px;
  background-color: ${props => selectColors[props.index].light};
  margin: 0 8px 0 0;
`;

export const TextBall = styled.div`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: ${props => selectColors[props.index].strong};
`;


export const Title = styled.p`
  font-size: ${props => (props.header ? 18 :16)}px;
  font-family: ${props => (props.header ? 'Roboto-Bold' : 'Roboto-Regular')};
  color: ${colors.DARK};
`;