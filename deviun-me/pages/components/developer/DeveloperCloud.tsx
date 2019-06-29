import React from 'react';
import styled from 'styled-components';

import { mobileMediaProp, bigScreenMediaProp } from '../../constants/style';

const CloudStyled = styled.div`
  position: absolute;
  right: 0px;
  margin-top: -170px;
  z-index: 0;

  img {
    height: 350px;
  }

  @media(${mobileMediaProp}) {
    display: none;
  }

  @media(${bigScreenMediaProp}) {
    margin-top: -150px;
    right: 3%;
  }
`;

export default function DeveloperCloud() {
  return (
    <CloudStyled>
      <picture>
        <source srcset="/static/images/developer-cloud-full-shape.svg"
          media={`(${bigScreenMediaProp})`}
        />
        <img src="/static/images/developer-cloud-croped-shape.svg" />
      </picture>
    </CloudStyled>
  );
}
