import React, { ReactNode } from 'react';
import styled from 'styled-components';

import {
  mobileMediaProp,
} from '../../constants/style';

interface CoverStyledPropsT {
  height?: string;
  padding?: string;
  color?: string;
  image?: string;
  clipPath?: string;
  overflow?: string;
  mobileHeight?: string;
  shadow?: string;
}

interface GradientCoverPropsT {
  gradient?: string;
  height?: string;
  mobileHeight?: string;
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
    -webkit-box-shadow: ${props.shadow || 'none'};
    -moz-box-shadow: ${props.shadow || 'none'};
    box-shadow: ${props.shadow || 'none'};

    @media(${mobileMediaProp}) {
      height: ${props.mobileHeight};
    }
  `}
  width: 100%;
  margin: 0px;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: 0.15s;
`;

const GradientCover = styled.div`
  ${(props: GradientCoverPropsT) => `
    background-image: ${props.gradient};
    height: ${props.height || defaultHeight}

    @media(${mobileMediaProp}) {
      height: ${props.mobileHeight};
    }
  `}
  overflow: hidden;
`;

interface CoverPropsT extends CoverStyledPropsT, GradientCoverPropsT {
  children?: ReactNode;
  key?: any;
}

export default function Cover({
  children,
  ...props
}: CoverPropsT) {
  const CoverComponent = ({ children }: { children?: ReactNode }) => (
    <CoverStyled
      {...props}
    >
      {children}
    </CoverStyled>
  );

  if (!props.gradient) {
    return (
      <CoverComponent>
        {children}
      </CoverComponent>
    );
  }

  return (
    <CoverComponent>
      <GradientCover
        gradient={props.gradient}
        height={props.height}
        mobileHeight={props.mobileHeight}
      >
        {children}
      </GradientCover>
    </CoverComponent>
  );
}
