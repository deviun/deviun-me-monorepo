import React from 'react';
import styled from 'styled-components';

import Cover from '../common/Cover';

interface PhotoGridPropsT {
  grid: string[][];
}

const GridRowStyled = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
`;

export default function PhotoGrid({
  grid,
}: PhotoGridPropsT) {
  return (
    <>
      {
        grid.map((row: string[]) => (
          <GridRowStyled>
            {
              row.map((url, index) => (
                <Cover
                  image={url}
                  height="510px"
                  key={index}
                />
              ))
            }
          </GridRowStyled>
        ))
      }
    </>
  );
}
