import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { seasonTitles } from '../../constants/season-titles';
import { mobileMediaProp } from '../../constants/style';

export interface PlaylistsItemT {
  cover: string; // image url
  name: string;
  songs?: number;
  time?: string; // 1h37m
  link: string;
  year?: number;
  month?: number; // 4 - april
}

interface PlaylistsPropsT {
  list: PlaylistsItemT[];
}

const PlaylistsStyled = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  @media(${mobileMediaProp}) {
    text-align: center;
  }
`;  

const PlaylistItemStyled = styled.div`
  display: inline-block;
  margin: 25px;
  cursor: pointer;
  transition: 0.15s;
  vertical-align: top;

  .shadow-box {
    opacity: 0;
    transition: 0.15s;
  }

  &:hover {
    .shadow-box {
      opacity: 1;
    }

    transform: scale(1.08, 1.08);
  }
`;

const PlaylistCoverStyled = styled.div`
  ${({
    image,
  }: {
    image: string;
  }) => `
    background-image: url(${image});
  `}
    
  background-position: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 7px;
`;

const PlaylistCoverShadowStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  width: 200px;
  height: 200px;
  text-align: center;

  .play-button {
    margin-top: 65px;
  }

  @media(${mobileMediaProp}) {
    width: 100px;
    height: 100px;

    .play-button {
      margin-top: 25px;
      height: 50px; 
    }
  }
`;

const PlaylistTitleStyled = styled.div`
  color: white;
  text-align: center;
  padding: 10px;
  max-width: 180px;
  word-break: break-all;

  @media(${mobileMediaProp}) {
    max-width: 80px;
  }
`;

const YearTitleStyled = styled.h2`
  color: white;
  font-weight: bold;
  margin: 0px;
  padding: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;

const SeasonTitleStyled = styled.h3`
  color: white;
  font-weight: 100;
  margin: 0px;
  padding: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;

interface seasonsGridT {
  year: number;
  seasonTitle: string;
  playlists: ReactNode[];
}

interface seasonIndexesT {
  [property: string]: number;
}

const getSeasonIndexName = (year: number, season: string) => `${year}_${season}`;

export default function Playlists({
  list,
}: PlaylistsPropsT) {
  const reversedLists = [...list].reverse();
  const seasonsGrid: seasonsGridT[] = [];
  const seasonIndexes: seasonIndexesT = {};
  const defaultDate = new Date();
  const defaultYear = defaultDate.getFullYear();
  const defaultMonth = defaultDate.getMonth() + 1;

  reversedLists.forEach(({
    year = defaultYear,
    month = defaultMonth,
    link, cover, name,
  }) => {
    const seasonTitle = seasonTitles[month];
    let seasonIndex = seasonIndexes[getSeasonIndexName(year, seasonTitle)];

    if (!seasonIndex && seasonIndex !== 0) {
      seasonsGrid.push({
        year,
        seasonTitle,
        playlists: [],
      });
      seasonIndex = seasonIndexes[getSeasonIndexName(year, seasonTitle)] = seasonsGrid.length - 1;
    }

    seasonsGrid[seasonIndex].playlists.push((
      <PlaylistItemStyled>
        <a href={link} target="_blank">
          <PlaylistCoverStyled image={cover}>
            <PlaylistCoverShadowStyled className="shadow-box">
              <img src="/static/images/play-button.svg" className="play-button" />
            </PlaylistCoverShadowStyled>
          </PlaylistCoverStyled>
          <PlaylistTitleStyled>{name}</PlaylistTitleStyled>
        </a>
      </PlaylistItemStyled>
    ));
  });

  const renderedYears: {
    [property: number]: boolean;
  } = {};

  return (
    <PlaylistsStyled>
      {
        seasonsGrid.map(({ year, seasonTitle, playlists }) => {
          let yearTitle = null;

          if (!renderedYears[year]) {
            yearTitle = (
              <YearTitleStyled>{year}</YearTitleStyled>
            );
            renderedYears[year] = true;
          }
          
          return (
            <section>
              {yearTitle}
              <SeasonTitleStyled>{seasonTitle}</SeasonTitleStyled>
              <div>
                {playlists}
              </div>
            </section>
          );
        })
      }
    </PlaylistsStyled>
  );
}
