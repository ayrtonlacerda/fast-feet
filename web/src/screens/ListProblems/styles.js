import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${({h, showModal}) => (!showModal 
    ? `${(((h + 1) * 75) + metrics.PAGE_HEIGHT)}px`
    : '100vh'
  )};
  flex: 1;
  align-items: center;
  background-color: ${colors.BACKGROUND};
  padding: 0 0 25px 0;
`;

export const SearchandButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vw;
  height: 50px;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 24px;
  font-family: Roboto-Bold;
  color: ${colors.DARK};
  width: 80vw;
  margin: 45px 0 30px 0px;
`;