import { OpenSourceListT, loadOpenSourceListT } from '../actions/openSourceList';
import {
  SET_OPENSOURCE_LIST,
} from '../actions/actionTypes';

export const initialState: OpenSourceListT = {
  projects: [],
};

export default function openSourceList(
  state: OpenSourceListT = initialState,
  action: loadOpenSourceListT,
): OpenSourceListT {
  switch (action.type) {
    case SET_OPENSOURCE_LIST: {
      return {
        ...action.payload,
      };
    }
    default: return state;
  }
}
