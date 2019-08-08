import { PlaylistsT, loadPlaylistsT, PageInfoT, loadPageInfoT } from '../actions/playlists';
import {
  SET_PLAYLISTS,
  SET_PLAYLISTS_PAGE_INFO,
} from '../actions/actionTypes';

interface playlistsStateT extends PageInfoT, PlaylistsT {}
type actionT = loadPlaylistsT | loadPageInfoT;

export const initialState: playlistsStateT = {
  playlists: [],
  channel: '',
  stats: {
    hours: 0,
    tracks: 0,
  },
};

const justCopyActions = new Set([
  SET_PLAYLISTS,
  SET_PLAYLISTS_PAGE_INFO,
]);

export default function playlists(
  state: playlistsStateT = initialState,
  action: actionT,
): PlaylistsT {
  if (justCopyActions.has(action.type)) {
    return {
      ...state,
      ...action.payload,
    };
  }
  
  return state;
}
