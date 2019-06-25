import API from '../helpers/api-helper';
import {
  SET_CV_HISTORY,
} from './actionTypes';

import { CVItemT } from '../pages/components/developer/CVBlock';

// payload types

export interface CVHistoryT {
  cv: CVItemT[];
}

// action types

export interface loadCVHistoryT {
  type: typeof SET_CV_HISTORY;
  payload: CVHistoryT;
}

// actions

export const loadCVHistory = async (dispatch: Function) => {
  const { ok, result }: any = await API.getCVHistory();

  if (ok) {
    return dispatch({
      type: SET_CV_HISTORY,
      payload: result.data,
    });
  }

  console.error({ ok, result });
};
