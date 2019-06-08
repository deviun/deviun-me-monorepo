import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CoverStyledPropsT {
  height?: string;
  padding?: string;
  color?: string;
  image?: string;
  clipPath?: string;
  overflow?: string;
}

const defaultPadding = '0px';
const defaultColor = 'gray';
const defaultHeight = '100px;'
const CoverStyled = styled.div`
  ${(props: CoverStyledPropsT) => `
    height: ${props.height || defaultHeight}
    padding: ${props.padding || defaultPadding};
    background-color: ${props.color || defaultColor};
    background-image: url(${props.image});
    clip-path: ${props.clipPath || 'none'};
    overflow: ${props.overflow || 'hidden'};
  `}
  width: 100%;
  margin: 0px;
  background-size: cover;
  background-position: center;
`;

interface CoverPropsT extends CoverStyledPropsT {
  children?: ReactNode;
  key?: any;
}

export default function Cover({
  children,
  ...props
}: CoverPropsT) {
  return (
    <CoverStyled
      {...props}
    >
      {children}
    </CoverStyled>
  );
}
