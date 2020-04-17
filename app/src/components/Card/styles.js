import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  elevation: 5;
  shadow-offset: { width: 5, height: 5 };
  shadow-color: ${colors.DARK};
  shadow-opacity: 0.1;
  background-color: ${colors.WHITE};
  border-radius: ${metrics.RADIUS};
  padding-top: ${metrics.MEDIUM};
  margin-top: ${metrics.XXBIG}px;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${metrics.SCREEN_WIDTH * 0.9}px;  
  height: 64px;
  background-color: #F8F9FD;
  padding: ${metrics.MEDIUM}px;  
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;  
  background-color: #F8F9FD;
`;


export const Text = styled.Text`
  font-size: 8;
  color: ${colors.GREY};
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 12;
  color: ${colors.DARK};
  font-weight: bold;
`;

export const TextButton = styled.Text`
  font-size: 12;
  color: ${colors.PURPLE};
  font-weight: bold;
 `;
