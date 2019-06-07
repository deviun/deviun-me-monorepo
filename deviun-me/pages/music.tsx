import React, { Fragment } from 'react';

import Head from './components/common/Head';
import Cover from './components/common/Cover';
import HeaderCoverContent from './components/music/HeaderCoverContent';
import Background from './components/common/Background';
import Playlists from './components/music/Playlists';

export default function MusicPage () {
  return (
    <Fragment>
      <Head
        title="Music"
      />
      <Cover
        image="/static/images/music-cover.jpg"
        color="black"
        height="650px"
        key="main"
      >
        <HeaderCoverContent />
      </Cover>
      <Background
        gradient="linear-gradient(136deg, #171514 0%, #153745 100%)"
      >
        <Playlists 
          list={[
            {
              cover: '/static/images/playlist-covers/single-inside.jpg',
              name: 'Single Inside',
              songs: 19,
              time: '1h8m',
              year: 2018,
              month: 7,
              link: 'https://itunes.apple.com/ru/playlist/single-inside/pl.u-EdAVzEquaZYdB6z?l=en'
            },
            {
              cover: '/static/images/playlist-covers/amount.am-out.jpg',
              name: 'AMount. Am out.',
              songs: 20,
              time: '1h11m',
              year: 2018,
              month: 7,
              link: 'https://itunes.apple.com/ru/playlist/amount-am-out/pl.u-r2yB1W2sP6X4rZm?l=en'
            },
            {
              cover: '/static/images/playlist-covers/gottyx.jpg',
              name: 'Gotty X',
              songs: 16,
              time: '1h5m',
              year: 2018,
              month: 9,
              link: 'https://itunes.apple.com/ru/playlist/gotty-x/pl.u-MDAWv0JCW5MVLko?l=en'
            },
            {
              cover: '/static/images/playlist-covers/iwantwu.jpg',
              name: 'iWANTWU',
              songs: 18,
              time: '1h8m',
              year: 2018,
              month: 10,
              link: 'https://itunes.apple.com/ru/playlist/iwantwu/pl.u-06oxDBxFWvg8AZ0?l=en'
            },
            {
              cover: '/static/images/playlist-covers/silent.jpg',
              name: 'S I l E NT',
              songs: 11,
              time: '45m',
              year: 2018,
              month: 10,
              link: 'https://itunes.apple.com/ru/playlist/s-i-l-e-nt/pl.u-XkD04XZcDpPlay9?l=en'
            },
            {
              cover: '/static/images/playlist-covers/protect-at.jpg',
              name: 'Protect At.',
              songs: 21,
              time: '1h37m',
              year: 2018,
              month: 10,
              link: 'https://itunes.apple.com/ru/playlist/protect-at/pl.u-r2yB1GGCP6X4rZm?l=en'
            },
            {
              cover: '/static/images/playlist-covers/eye-playlist.jpg',
              name: 'eye',
              songs: 24,
              time: '1h37m',
              year: 2018,
              month: 11,
              link: 'https://itunes.apple.com/ru/playlist/eye/pl.u-06oxDGzFWvg8AZ0?l=en'
            },
            {
              cover: '/static/images/playlist-covers/x-playlist.jpg',
              name: '#x',
              songs: 16,
              time: '58m',
              year: 2018,
              month: 11,
              link: 'https://itunes.apple.com/ru/playlist/x/pl.u-XkD046LIDpPlay9?l=en'
            },
            {
              cover: '/static/images/playlist-covers/detoxification.jpg',
              name: 'detoxification',
              songs: 10,
              time: '46m',
              year: 2018,
              month: 11,
              link: 'https://itunes.apple.com/ru/playlist/detoxification/pl.u-qxylljxu2Zmg9DW?l=en'
            },
            {
              cover: '/static/images/playlist-covers/take-playlist.png',
              name: 'take',
              songs: 18,
              time: '1h12m',
              year: 2018,
              month: 11,
              link: 'https://itunes.apple.com/ru/playlist/take/pl.u-06oxxAaFWvg8AZ0?l=en'
            },
            {
              cover: '/static/images/playlist-covers/end.jpg',
              name: 'End',
              songs: 26,
              time: '1h37m',
              year: 2018,
              month: 12,
              link: 'https://itunes.apple.com/ru/playlist/end/pl.u-yZyVVx3TYMK3a1G?l=en'
            },
            {
              cover: '/static/images/playlist-covers/who-playlist.jpg',
              name: 'Who',
              songs: 19,
              time: '1h20m',
              year: 2019,
              month: 1,
              link: 'https://itunes.apple.com/ru/playlist/who/pl.u-55D66Zlt8q53Bry?l=en'
            },
            {
              cover: '/static/images/playlist-covers/0n3.png',
              name: '0n3',
              songs: 10,
              time: '34m',
              year: 2019,
              month: 2,
              link: 'https://itunes.apple.com/ru/playlist/0n3/pl.u-qxyllEMI2Zmg9DW?l=en'
            },
            {
              cover: '/static/images/playlist-covers/rethink-20.jpg',
              name: 'Rethink 2.0',
              songs: 16,
              time: '58m',
              year: 2019,
              month: 3,
              link: 'https://itunes.apple.com/ru/playlist/rethink-2-0/pl.u-EdAVVGduaZYdB6z?l=en'
            },
            {
              cover: '/static/images/playlist-covers/p1us1ne.jpg',
              name: 'P1us 1ne',
              songs: 9,
              time: '28m',
              year: 2019,
              month: 4,
              link: 'https://itunes.apple.com/ru/playlist/p1us-1ne/pl.u-MDAWWgjuW5MVLko?l=en'
            },
          ]}
        />
      </Background>
    </Fragment>
  );
}
