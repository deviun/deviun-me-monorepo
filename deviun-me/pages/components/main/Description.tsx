import React, { ReactNode } from 'react';
import styled from 'styled-components';
import * as Markdown from 'react-markdown';

interface DescriptionPropsT {
  children: string;
}

const DescriptionStyled = styled.div`
  padding: 20px;
  padding-top: 0px;
  width: 1120px;
  margin: 0 auto;
  overflow: none;

  & * {
    white-space: pre-line;
  }
`;

export default function Description({
  children,
}: DescriptionPropsT) {
  return (
    <DescriptionStyled>
      <Markdown
        source={children}
      />
    </DescriptionStyled>
  );
}
