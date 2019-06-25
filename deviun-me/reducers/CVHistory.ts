import { CVHistoryT, loadCVHistoryT } from '../actions/CVHistory';
import {
  SET_CV_HISTORY,
} from '../actions/actionTypes';

export const initialState: CVHistoryT = {
  cv: [],
};

export default function CVHistory(
  state: CVHistoryT = initialState,
  action: loadCVHistoryT,
): CVHistoryT {
  switch (action.type) {
    case SET_CV_HISTORY: {
      return {
        ...action.payload,
      };
    }
    default: return state;
  }
}
