import API from '../helpers/api-helper';
import {
  SET_PLAYLISTS,
} from './actionTypes';

import { PlaylistsItemT } from '../pages/components/music/Playlists';

// payload types

export interface PlaylistsT {
  playlists: PlaylistsItemT[];
}

// action types

export interface loadPlaylistsT {
  type: typeof SET_PLAYLISTS;
  payload: PlaylistsT;
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
