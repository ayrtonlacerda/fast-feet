import styled from 'styled-components/native';
import { colors, metrics } from 'styles';
import { Imgs } from 'assets';


// containers
export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.PURPLE};
  padding: ${metrics.BIG}px;
`;

// imgs
export const ImageLogo = styled.Image.attrs({
  source: Imgs.LOGO,
  resizeMode: 'contain',
})`
  marginBottom: ${metrics.XBIG * 2};
  width: ${metrics.SCREEN_WIDTH};
`;

// status
export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.PURPLE,
  barStyle: 'dark-content',
})``;
