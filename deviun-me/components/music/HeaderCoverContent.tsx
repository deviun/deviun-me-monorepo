import React from 'react';
import styled from 'styled-components';

import { mobileMediaProp } from '../../constants/style';
import YMEvent from '../common/YMEvent';

interface HeaderCoverContentPropsT {
  tracks: number;
  hours: number;
}

const MusicCoverContainer = styled.div`
  text-align: center;
  margin-top: 140px;

  .apple-logo {
    height: 50px;
  }

  .description {
    color: white;
    padding: 20px 25px;
    font-size: 21px;
    max-width: 580px;
    margin: 60px auto;
    font-weight: 100;
  }

  @media(${mobileMediaProp}) {
    margin-top: 70px;

    .description {
      font-size: 18px;
      margin: 40px auto;
    }
  }
`;

const StatShape = styled.div`
  display: inline-block;
  margin: 5px 15px;

  a {
    text-decoration: none;
  }

  .text {
    border-radius: 33px;
    background: white;
    padding: 10px 20px;
    color: #4F4F4F;
    font-weight: bold;
    transition: 0.1s;

    &.blue {
      background: #24A09D;
      color: white;
    }

    &.animated:hover {
      transform: scale(0.90);
    }
  }

  .title {
    color: white;
    margin-top: 10px;
    font-weight: 100;
    font-size: 13px;

    &.bold {
      font-weight: bold;
    }
  }

  @media(${mobileMediaProp}) {
    margin: 5px 10px;
  }
`;

export default function HeaderCoverContent(props: HeaderCoverContentPropsT) {
  return (
    <MusicCoverContainer>
      <div>
        <img src="/static/images/apple-black.svg" className="apple-logo" />
      </div>
      <div className="description">
        Each of playlist is collection of emotions. In strange playlist names I hiding my stories that I can not tell public, and music is soundtrack.
      </div>
      <StatShape>
        <div className="text">
          {props.tracks}
        </div>
        <div className="title">
          tracks
        </div>
      </StatShape>
      <StatShape>
        <div className="text">
          {props.hours}
        </div>
        <div className="title">
          hours
        </div>
      </StatShape>
    </MusicCoverContainer>
  );
}
