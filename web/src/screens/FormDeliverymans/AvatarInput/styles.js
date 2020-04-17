import styled from 'styled-components';
import { colors, metrics } from '../../../styles';
import { Imgs } from '../../../assets';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin: 25px 0 15px 0;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 2px dashed ${colors.LIGHT_GREY};
    }

    input {
      display: none;
    }
  }
`;

export const PrevLabel = styled.div`
  width: 130px;
  height: 130px;
  align-self: center;
`;

export const LabelImage = styled.img.attrs({
  src: Imgs.INSERT_IMAGE, 
})`
  width: 30px;
  height: 30px;
`;

export const Text = styled.p`
  font-size: 16;
  font-family: Roboto-Bold;
`;