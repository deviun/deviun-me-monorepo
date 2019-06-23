import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPageInfo, PageInfoT } from '../actions/mainPageInfo';
import { loadPhotoGrip, PhotoGridT } from '../actions/photoGrid';

import Padding from './components/common/Padding';

import Cover from './components/common/Cover';
import Head from './components/common/Head';
import HeaderCoverContent from './components/main/HeaderCoverContent';
import PhotoGrid from './components/main/PhotoGrid';
import MainTitle from './components/common/MainTitle';
import Description from './components/main/Description';
import PageWidthWrapper from './components/common/PageWidthWrapper';
import SocialNetworks from './components/main/SocialNetworks';
import Notes from './components/main/Notes';
import EndSmile from './components/main/EndSmile';

interface propsT {
  mainPageInfo: PageInfoT;
  loadMainPageInfo: Function;
  photoGrid: PhotoGridT;
}

class MainPage extends Component<propsT> {
  constructor(props: propsT) {
    super(props);
  }

  static async getInitialProps({ reduxStore }: any) {
    await Promise.all([
      loadPageInfo(reduxStore.dispatch),
      loadPhotoGrip(reduxStore.dispatch),
    ]);
    return {};
  }

  render() {
    const {
      mainPageInfo: {
        coverImage,
        defaultColor,
        height,
        coverText,
        description,
        socialNetworks,
      },
      photoGrid: {
        grid,
      },
    } = this.props;

    return (
      <PageWidthWrapper
        maxWidth={1440}
      >
        <Head />
        <Cover
          image={coverImage}
          color={defaultColor}
          height={height}
          key="main"
        >
          <HeaderCoverContent
            text={coverText}
          />
        </Cover>
        <MainTitle>I am a superhero</MainTitle>
        <PhotoGrid grid={grid} />
        {
          description.length ? (
            <>
              <MainTitle>About</MainTitle>
              <Description>
                {description}
              </Description>
            </>
          ) : null
        }
        <Padding top="50px">
          <SocialNetworks
            items={socialNetworks}
          />
        </Padding>
  
        <MainTitle>Notes</MainTitle>
        <Notes
          items={[
            {
              title: 'История: Начало',
              link: 'https://vk.com/wall-159364181_1',
              cover: 'https://pp.userapi.com/c845421/v845421151/118b5e/F5fhmiW6pbY.jpg'
            },
            {
              title: 'История: Часть ||',
              link: 'https://vk.com/wall-159364181_2',
              cover: 'https://pp.userapi.com/c840329/v840329126/742ff/hkwq83fYws4.jpg'
            },
            {
              title: 'День рождения в 2016. До переезда в Санкт-Петербруг.',
              link: 'https://vk.com/wall-159364181_3',
              cover: 'https://pp.userapi.com/c845323/v845323561/11bc52/izxtDQp80KQ.jpg'
            },
            {
              title: 'DEVIUN 2018',
              link: 'https://tgraph.io/DEVIUN-2018-12-07',
              cover: 'https://pp.userapi.com/c852036/v852036631/63ecd/BlP3eNr1xGA.jpg'
            },
          ]}
        />
        <Padding top="50px" bottom="20px">
          <EndSmile svgPath="/static/images/smiles/kiss.svg" />
        </Padding>
      </PageWidthWrapper>
    );
  }
}

const mapStateToProps = ({
  mainPageInfo = {},
  photoGrid = { grid: [] },
} = {}) => ({
  mainPageInfo,
  photoGrid,
});

// @ts-ignore
export default connect(mapStateToProps)(MainPage);
