import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../styles';

const Loader = ({ big, white }) => (
  <ActivityIndicator
    color={white ? colors.WHITE : colors.PURPLE}
    size={big ? 'large' : 'small'}
  />
);

export default Loader;
