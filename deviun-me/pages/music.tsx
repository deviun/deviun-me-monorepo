import React, { Component } from 'react';
import { connect } from 'react-redux';

import metaData from '../constants/meta-data';

import {
  loadPlaylists, PlaylistsT, loadPageInfo, PageInfoT,
} from '../actions/playlists';

import Head from '../components/common/Head';
import Cover from '../components/common/Cover';
import HeaderCoverContent from '../components/music/HeaderCoverContent';
import Background from '../components/common/Background';
import Playlists from '../components/music/Playlists';
import Padding from '../components/common/Padding';

interface PropsT extends PlaylistsT, PageInfoT {}

class MusicPage extends Component<PropsT> {
  static async getInitialProps({ reduxStore }: any) {
    await Promise.all([
      loadPlaylists(reduxStore.dispatch),
      loadPageInfo(reduxStore.dispatch),
    ]);
    return {};
  }

  render() {
    const { playlists, stats, channel } = this.props;
    return (
      <>
        <Head
          metaData={metaData['music']}
        />
        <Cover
          image="/static/images/music-cover.jpg"
          gradient="linear-gradient(180deg, rgba(22,33,37,0.46) 31%, #161E20 100%)"
          color="black"
          height="650px"
          mobileHeight="450px"
          key="main"
          shadow="0px 5px 18px -4px rgba(0,0,0,1)"
        >
          <HeaderCoverContent
            tracks={300}
            hours={20}
            channelLink="tg://resolve?domain=followmood"
          />
        </Cover>
        <Background
          gradient="linear-gradient(136deg, #171514 0%, #153745 100%)"
        >
          <Padding
            top="50px"
            bottom="50px"
          >
            <Playlists
              list={playlists}
            />
          </Padding>
        </Background>
      </>
    );
  }
}

const mapStateToProps = ({
  playlists: {
    playlists,
    stats,
    channel
  },
}: {
  playlists: PropsT;
}) => ({
  playlists,
  stats,
  channel,
});

export default connect(mapStateToProps)(MusicPage);
