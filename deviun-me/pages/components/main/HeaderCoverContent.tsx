import React from 'react';
import styled from 'styled-components';

const InfoStyled = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 460px;
  margin-left: 50px;
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
