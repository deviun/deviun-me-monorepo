import React from 'react';
import styled from 'styled-components';

const InfoStyled = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 460px;
  left: 50px;
`;

export default function HeaderCoverContent() {
  return (
    <InfoStyled>
      Anton Danilov, 20, Saint Petersburg
    </InfoStyled>
  );
}
