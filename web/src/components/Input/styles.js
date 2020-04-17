import styled from 'styled-components';
import { colors } from '../../styles';
import { Imgs } from '../../assets';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({small}) => (small ? '15%': '95.5%')};  
  margin: ${props => (props.padding ? '25px 25px 15px 25px' : '0 0 20px 0')}; 
`;

export const InputContainer = styled.input.attrs({
  placeholderTextColor: colors.RED,
})`
  display: flex;
  height: 45px;
  width: 100% - 8px;
  border: 2px solid ${colors.LIGHT_GREY};
  border-radius: 5px;
  font-size: 14px;
  font-family: Roboto-Regular;
  padding: 0 0 0 8px;

  ::placeholder {
    color: ${colors.LIGHT_GREY};
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-family: Roboto-Bold;
  margin: 0px 0px 10px 0px;
  color: ${colors.DARK};
`;

export const ErrorText = styled.p`
  font-size: 14px;
  font-family: Roboto-Regular;
  margin: 0px 0px 10px 0px;
  color: ${colors.RED};
`;