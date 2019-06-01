import React from 'react';
import styled from 'styled-components';

interface EndSmilePropsT {
  svgPath: string;
}

const EndSmileStyled = styled.div`
  text-align: center;
`;

export default function EndSmile({
  svgPath,
}: EndSmilePropsT) {
  return (
    <EndSmileStyled>
      <img src={svgPath} />
    </EndSmileStyled>
  );
}
