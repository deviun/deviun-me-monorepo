import React from 'react';
import styled from 'styled-components';

const InfoStyled = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 460px;
  margin-left: 50px;
`;

export default function HeaderCoverContent() {
  return (
    <InfoStyled>
      Anton Danilov, 20, Saint Petersburg
    </InfoStyled>
  );
}
