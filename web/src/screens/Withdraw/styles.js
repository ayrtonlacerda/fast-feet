import styled from 'styled-components';
import { colors, metrics } from '../../styles';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${metrics.PAGE_HEIGHT}px;
  flex: 1;
  align-items: center;
  background-color: ${colors.BACKGROUND};
  padding: 0 0 25px 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  background-color: ${colors.WHITE};
  border-radius: 5px;
  padding: 30px 30px 30px 30px;
`;

export const Limit = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: center;
  margin: 30px 0 0 0px ;
`;

export const Title = styled.p`
  font-size: 24px;
  font-family: Roboto-Bold;
  color: ${colors.DARK};
  width: 80vw;
`;

export const Text = styled.p`
  font-size: 16;
  font-family: Roboto-Regular;
  color: ${colors.GREY};
`;
