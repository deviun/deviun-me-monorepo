import API from '../helpers/api-helper';
import {
  SET_PHOTO_GRID,
} from './actionTypes';

// payload types

export interface PhotoGridT {
  grid: string[][];
}

// action types

export interface loadPhotoGripT {
  type: typeof SET_PHOTO_GRID;
  payload: PhotoGridT;
}

// actions

export const loadPhotoGrip = async (dispatch: Function) => {
  const { ok, result }: any = await API.getPhotoGrid();

  if (ok) {
    return dispatch({
      type: SET_PHOTO_GRID,
      payload: result.data,
    });
  }

  console.error({ ok, result });
};
