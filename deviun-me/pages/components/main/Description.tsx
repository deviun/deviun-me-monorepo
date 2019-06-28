import React from 'react';
import styled from 'styled-components';
import * as Markdown from 'react-markdown';

interface DescriptionPropsT {
  children: string;
}

const DescriptionStyled = styled.div`
  padding: 20px;
  padding-top: 0px;
  max-width: 1000px;
  margin: 0 auto;
  overflow: none;
  font-size: 17px;
  line-height: 25px;

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
