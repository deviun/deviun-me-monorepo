import React from 'react';
import styled from 'styled-components';

import { mobileMediaProp } from '../../constants/style';

const TitleStyled = styled.div`
  text-align: center;
  margin-top: 180px;

  h2 {
    color: white;
  }

  h3 {
    color: white;
    opacity: 0.3;
    font-weight: 100;
  }

  @media(${mobileMediaProp}) {
    margin-top: 100px;
  }
`;

export default function HeaderCoverContent() {
  return (
    <TitleStyled>
      <img src="/static/images/apple-black.svg" />
      <h2>The best collections</h2>
      <h3>since summer 2018</h3>
    </TitleStyled>
  );
}
