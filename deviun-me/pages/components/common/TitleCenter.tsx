import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleCenterPropsT {
  children: ReactNode;
}

const TitleStyled = styled.h2`
  text-align: center;
`;

export default function TitleCenter({
  children,
}: TitleCenterPropsT) {
  return (
    <TitleStyled>
      {children}
    </TitleStyled>
  );
}
