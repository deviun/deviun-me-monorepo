import React from 'react';
import styled from 'styled-components';

interface CVItemT {
  dateRange: string; // 2012 — 2015
  text: string[];
}

interface CVBlockPropsT {
  data: CVItemT[];
}

const DateRageStyled = styled.h2`
  text-align: center;
  color: #5D5D5D;
`;

const EpisodeStyled = styled.div`
  margin-top: 80px;

  &:first-child {
    margin-top: -80px;
  }

  p {
    line-height: 30px;
  }
`;

export default function CVBlock(props: CVBlockPropsT) {
  return (
    <>
      <EpisodeStyled>
        {
          props.data.map((episode) => (
            <EpisodeStyled>
              <DateRageStyled>{episode.dateRange}</DateRageStyled>
              {
                episode.text.map((p) => (
                  <p>
                    {p}
                  </p>
                ))
              }
            </EpisodeStyled>
          ))
        }
      </EpisodeStyled>
    </>
  ); 
}
