import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface PaddingStyledPropsT {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

interface TitleCenterPropsT extends PaddingStyledPropsT {
  children: ReactNode;
}

const defaultPadding = '0px';
const PaddingStyled = styled.div`
  padding-top: ${(props: PaddingStyledPropsT) => props.top || defaultPadding};
  padding-left: ${(props) => props.left || defaultPadding};
  padding-right: ${(props) => props.right || defaultPadding};
  padding-bottom: ${(props) => props.bottom || defaultPadding};
`;

export default function Padding({
  children,
  top,
  left,
  right,
  bottom,
}: TitleCenterPropsT) {
  return (
    <PaddingStyled
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      {children}
    </PaddingStyled>
  );
}
