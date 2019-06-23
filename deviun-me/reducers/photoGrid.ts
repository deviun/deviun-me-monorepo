import { PhotoGridT, loadPhotoGripT } from '../actions/photoGrid';
import {
  SET_PHOTO_GRID,
} from '../actions/actionTypes';

export const initialState: PhotoGridT = {
  grid: [],
};

export default function photoGrid(
  state: PhotoGridT = initialState,
  action: loadPhotoGripT,
): PhotoGridT {
  switch (action.type) {
    case SET_PHOTO_GRID: {
      return {
        ...action.payload,
      };
    }
    default: return state;
  }
}
