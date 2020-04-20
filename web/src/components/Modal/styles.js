import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 105vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  padding: 20px 20px 20px 30px;
  background-color: ${colors.WHITE};
  border-radius: 5px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.div`
  height: 1px;
  width: 95%;
  background-color: ${colors.LIGHT_GREY};
  margin: 15px 0 0 0 ;
`;

export const Title = styled.p`
  font-size: 14;
  font-family: Roboto-Bold;
  color: ${colors.DARK};
  margin: 15px 0 0 0 ;
`;

export const Text = styled.p`
  font-size: 16;
  font-family: Roboto-Regular;
  color: ${colors.GREY};
  margin: 7px 0 0 0 ;
`;

export const DateTitle = styled.p`
  font-size: 16;
  font-family: Roboto-Bold;
  color: ${colors.GREY};
  margin: 5px 0 0 0 ;
`;

export const Image = styled.img`
  width: 95%;
  height: 300px;
  object-fit: cover;
  margin: 15px 0 0 0 ;
`;