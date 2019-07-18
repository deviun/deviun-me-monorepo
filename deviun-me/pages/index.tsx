import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPageInfo, PageInfoT } from '../actions/mainPageInfo';
import { loadPhotoGrip, PhotoGridT } from '../actions/photoGrid';
import { loadNotes } from '../actions/notes';

import Padding from '../components/common/Padding';

import Cover from '../components/common/Cover';
import Head from '../components/common/Head';
import HeaderCoverContent from '../components/main/HeaderCoverContent';
import PhotoGrid from '../components/main/PhotoGrid';
import MainTitle from '../components/common/MainTitle';
import Description from '../components/main/Description';
import PageWidthWrapper from '../components/common/PageWidthWrapper';
import SocialNetworks from '../components/main/SocialNetworks';
import Notes, { NoteItemT } from '../components/main/Notes';
import EndSmile from '../components/main/EndSmile';

interface propsT {
  mainPageInfo: PageInfoT;
  loadMainPageInfo: Function;
  photoGrid: PhotoGridT;
  notes: NoteItemT[];
}

class MainPage extends Component<propsT> {
  constructor(props: propsT) {
    super(props);
  }

  static async getInitialProps({ reduxStore }: any) {
    await Promise.all([
      loadPageInfo(reduxStore.dispatch),
      loadPhotoGrip(reduxStore.dispatch),
      loadNotes(reduxStore.dispatch),
    ]);
    return {};
  }

  render() {
    const {
      mainPageInfo: {
        coverImage,
        defaultColor,
        height,
        mobileHeight,
        coverText,
        description,
        socialNetworks,
      },
      photoGrid: {
        grid,
      },
      notes,
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
          mobileHeight={mobileHeight}
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
        
        {
          notes.length ? (
            <>
              <MainTitle>Notes</MainTitle>
              <Notes
                items={notes}
              />
            </>
          ) : null
        }
        
        <Padding top="50px" bottom="20px">
          <EndSmile svgPath="/static/images/smiles/kiss.svg" />
        </Padding>
      </PageWidthWrapper>
    );
  }
}

const mapStateToProps = ({
  mainPageInfo = {},
  photoGrid = {},
  notes = { notes: [] },
} = {}) => ({
  mainPageInfo,
  photoGrid,
  notes: notes.notes,
});

// @ts-ignore
export default connect(mapStateToProps)(MainPage);
