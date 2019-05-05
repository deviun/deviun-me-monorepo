import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CoverStyledPropsT {
  height?: string;
  padding?: string;
  color?: string;
  image?: string;
}

const defaultPadding = '0px';
const defaultColor = 'gray';
const defaultHeight = '100px;'
const CoverStyled = styled.div`
  width: 100%;
  height: ${(props: CoverStyledPropsT) => props.height || defaultHeight};
  margin: 0px;
  padding: ${(props: CoverStyledPropsT) => props.padding || defaultPadding};
  background-color: ${(props: CoverStyledPropsT) => props.color || defaultColor};
  background-image: url(${(props: CoverStyledPropsT) => props.image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

interface CoverPropsT extends CoverStyledPropsT {
  children?: ReactNode;
  key: any;
}

export default function Cover({
  children,
  color,
  padding,
  image,
  height,
  key,
}: CoverPropsT) {
  return (
    <CoverStyled
      color={color}
      padding={padding}
      image={image}
      height={height}
      key={key}
    >
      {children}
    </CoverStyled>
  );
}
