import React  from 'react';
import { Container, Wrap, Title, Ball } from './styles';
import { colors } from '../../../../styles';

const StatusColumn = ({status, text}) => (
  <Container>
    {status === 'pending' && (
      <Wrap color={colors.YELLOW_LOGHT}>
        <Ball color={colors.YELLOW} />
        <Title color={colors.YELLOW}>{text}</Title>
      </Wrap> 
    )}
      {status === 'withdrawn' && (
      <Wrap color={colors.BLUE_LIGHT}>
        <Ball color={colors.BLUE} />
        <Title color={colors.BLUE}>{text}</Title>
      </Wrap> 
    )}
      {status === 'canceled' && (
      <Wrap color={colors.RED_LIGHT}>
        <Ball color={colors.RED} />
        <Title color={colors.RED}>{text}</Title>
      </Wrap> 
    )}
      {status === 'delivered' && (
      <Wrap color={colors.GREEN_LIGHT}>
        <Ball color={colors.GREEN} />
        <Title color={colors.GREEN}>{text}</Title>
      </Wrap> 
    )}
  </Container>
);

export default StatusColumn;