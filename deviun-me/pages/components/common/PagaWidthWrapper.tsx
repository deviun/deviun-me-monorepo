import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface widthPropsT {
  width?: number | null;
  maxWidth?: number | null;
  minWidth?: number | null;
}

interface PageWidthWrapperT extends widthPropsT {
  children: ReactNode;
}

const PageWidthStyled = styled.div`
  min-width: ${({ minWidth }: widthPropsT) => minWidth ? `${minWidth}px` : 'inherit'};
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : 'inherit'};
  width: ${({ width }) => width ? `${width}px` : 'inherit'};
  margin: 0px auto;
`;

export default function PageWidthWrapper({
  width = null,
  maxWidth = null,
  minWidth = null,
  children,
}: PageWidthWrapperT) {
  return (
    <PageWidthStyled
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
    >
      {children}
    </PageWidthStyled>
  );
}
