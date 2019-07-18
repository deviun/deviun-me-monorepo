import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPlaylists, PlaylistsT } from '../actions/playlists';

import Head from '../components/common/Head';
import Cover from '../components/common/Cover';
import HeaderCoverContent from '../components/music/HeaderCoverContent';
import Background from '../components/common/Background';
import Playlists from '../components/music/Playlists';
import Padding from '../components/common/Padding';

interface PropsT {
  playlists: PlaylistsT;
}

class MusicPage extends Component<PropsT> {
  static async getInitialProps({ reduxStore }: any) {
    await loadPlaylists(reduxStore.dispatch);
    return {};
  }

  render() {
    const { playlists } = this.props.playlists;
    return (
      <>
        <Head
          title="Music"
        />
        <Cover
          image="/static/images/music-cover.jpg"
          color="black"
          height="650px"
          mobileHeight="450px"
          key="main"
        >
          <HeaderCoverContent />
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
  playlists = { playlists: [] },
} = {}) => ({
  playlists,
});

export default connect(mapStateToProps)(MusicPage);
