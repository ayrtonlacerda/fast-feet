import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 25px 25px 15px 25px;
  background-color: ${colors.WHITE};
`;

export const Select = styled.select`
  display: flex;
  height: 45px;
  align-items: center; 
  border: 2px solid ${colors.LIGHT_GREY};
  border-radius: 5px;
  font-size: 16px;
  background-color: ${colors.WHITE};
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0px 0px 10px 0px;
  color: ${colors.DARK};
`;