import React from 'react';
import styled from 'styled-components';

interface PlaylistsItemT {
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
  a {
    text-decoration: none;
  }
`;

const PlaylistItemStyled = styled.div`
  display: inline-block;
  margin: 25px;
  cursor: pointer;

  .shadow-box {
    opacity: 0;
    transition: 0.15s;
  }

  &:hover {
    .shadow-box {
      opacity: 1;
    }
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
  width: 260px;
  height: 260px;
  text-align: center;

  .play-button {
    margin-top: 95px;
  }
`;

const PlaylistTitleStyled = styled.div`
  color: white;
  text-align: center;
  padding: 10px;
`;

export default function Playlists({
  list,
}: PlaylistsPropsT) {
  const reversedLists = [...list].reverse();
  return (
    <PlaylistsStyled>
      {
        reversedLists.map((playlist) => (
          <PlaylistItemStyled>
            <a href={playlist.link} target="_blank">
              <PlaylistCoverStyled image={playlist.cover}>
                <PlaylistCoverShadowStyled className="shadow-box">
                  <img src="/static/images/play-button.svg" className="play-button" />
                </PlaylistCoverShadowStyled>
              </PlaylistCoverStyled>
              <PlaylistTitleStyled>{playlist.name}</PlaylistTitleStyled>
            </a>
          </PlaylistItemStyled>
        ))
      }
    </PlaylistsStyled>
  );
}
