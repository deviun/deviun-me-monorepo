import React from 'react';
import styled from 'styled-components';

import {
  mobileMediaProp,
} from '../../constants/style';

const InfoStyled = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 460px;
  margin-left: 50px;

  @media(${mobileMediaProp}) {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin-top: 0px;
    margin-left: 0px;
    padding: 25px;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
`;

interface HeaderCoverContentPropsT {
  text: string;
}

export default function HeaderCoverContent(props: HeaderCoverContentPropsT) {
  return (
    <InfoStyled>
      {props.text}
    </InfoStyled>
  );
}
