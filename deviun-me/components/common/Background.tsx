import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BackgroundStyledPropsT {
  image?: string; // image url
  gradient?: string; // example: linear-gradient(136deg, #171514 0%, #153745 100%)
  color?: string;
}

interface BackgroundPropsT extends BackgroundStyledPropsT {
  children: ReactNode;
}

const BackgroundStyled = styled.div`
  ${({
    image,
    color,
    gradient,
  }: BackgroundStyledPropsT) => `
    ${image ? `
      background-image: url(${image});
      background-position: center;
      background-size: cover;
      ` : ''}
    ${gradient ? `
      background-image: ${gradient};
    ` : `
      background-color: ${color};
    `}
  `}
`;

export default function Background({
  children,
  color,
  image,
  gradient,
}: BackgroundPropsT) {
  return (
    <BackgroundStyled color={color} image={image} gradient={gradient}>
      {children}
    </BackgroundStyled>
  );
}
