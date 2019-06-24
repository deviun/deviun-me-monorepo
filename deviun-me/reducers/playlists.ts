import { PlaylistsT, loadPlaylistsT } from '../actions/playlists';
import {
  SET_PLAYLISTS,
} from '../actions/actionTypes';

export const initialState: PlaylistsT = {
  playlists: [],
};

export default function playlists(
  state: PlaylistsT = initialState,
  action: loadPlaylistsT,
): PlaylistsT {
  switch (action.type) {
    case SET_PLAYLISTS: {
      return {
        ...action.payload,
      };
    }
    default: return state;
  }
}
