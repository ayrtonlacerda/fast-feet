import styled from 'styled-components';
import { colors, metrics } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${props => (props.header ? colors.BACKGROUND : colors.WHITE)};
  margin: 20px 0 0 0;
`;