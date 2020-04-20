import styled from 'styled-components';
import { colors, metrics } from '../../styles';


export const SearchandButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vw;
  height: 50px;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
`;

export const Title = styled.p`
  font-size: 24px;
  font-family: Roboto-Bold;
  color: ${colors.DARK};
  width: 80vw;
  margin: 45px 0 30px 0px;
`;