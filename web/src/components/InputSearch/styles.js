import styled from 'styled-components';
import { colors } from '../../styles';
import { Imgs } from '../../assets';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 236px;
  height: 36px;
  width: 100% - 8px;
  border: 2px solid ${colors.LIGHT_GREY};
  border-radius: 5px;
  background-color: ${colors.WHITE};
`;

export const InputContainer = styled.input.attrs({
  placeholderTextColor: colors.GREY,
})`
  display: flex;
  width: 100%;
  height: 30px;  
  font-size: 14px;
  border: 0px solid ${colors.WHITE};
  padding: 0 5px 0 8px;
  outline: none;  
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0px 0px 10px 0px;
  color: ${colors.DARK};
`;