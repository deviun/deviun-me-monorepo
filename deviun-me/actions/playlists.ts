import API from '../helpers/api-helper';
import {
  SET_PLAYLISTS,
  SET_PLAYLISTS_PAGE_INFO,
} from './actionTypes';

import { PlaylistsItemT } from '../components/music/Playlists';

// payload types

export interface PlaylistsT {
  playlists: PlaylistsItemT[];
}

export interface PageInfoT {
  channel: string;
  stats: {
    tracks: number;
    hours: number;
  };
}

// action types

export interface loadPlaylistsT {
  type: typeof SET_PLAYLISTS;
  payload: PlaylistsT;
}

export interface loadPageInfoT {
  type: typeof SET_PLAYLISTS_PAGE_INFO;
  payload: PageInfoT;
}

// actions

export const loadPlaylists = async (dispatch: Function) => {
  const { ok, result }: any = await API.getPlaylists();

  if (ok) {
    return dispatch({
      type: SET_PLAYLISTS,
      payload: {
        playlists: result.map(({ item }: any) => item),
      },
    });
  }

  console.error({ ok, result });
};

export const loadPageInfo = async (dispatch: Function) => {
  const [
    { ok: statsOk, result: statsResult },
    { ok: channelOk, result: channelResult },
  ]: any = await Promise.all([
    API.getPlaylistsStats(),
    API.getPlaylistsChannel(),
  ]);

  if (statsOk && channelOk) {
    return dispatch({
      type: SET_PLAYLISTS_PAGE_INFO,
      payload: {
        channel: channelResult.data.link,
        stats: statsResult,
      },
    });
  }

  console.error({
    statsOk,
    statsResult,
    channelOk,
    channelResult,
  });
}
