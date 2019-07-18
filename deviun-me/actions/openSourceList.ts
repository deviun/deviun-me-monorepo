import API from '../helpers/api-helper';
import {
  SET_OPENSOURCE_LIST
} from './actionTypes';

import { OpenSourceItemI } from '../components/developer/OpenSourceList';

// payload types

export interface OpenSourceListT {
  projects: OpenSourceItemI[];
}

// action types

export interface loadOpenSourceListT {
  type: typeof SET_OPENSOURCE_LIST;
  payload: OpenSourceListT;
}

// actions

export const loadOpenSourceList = async (dispatch: Function) => {
  const { ok, result }: any = await API.getOpenSourceList();

  if (ok) {
    return dispatch({
      type: SET_OPENSOURCE_LIST,
      payload: result.data,
    });
  }

  console.error({ ok, result });
};
