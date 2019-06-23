import API from '../helpers/api-helper';
import {
  SET_MAIN_PAGE_INFO,
} from './actionTypes';

// payload types

export interface PageInfoT {
  coverImage: string;
  defaultColor: string;
  height: string;
  coverText: string;
}

// action types

export interface loadPageInfoT {
  type: typeof SET_MAIN_PAGE_INFO;
  payload: PageInfoT;
}

export const loadPageInfo = async (dispatch: Function) => {
  const { ok, result }: any = await API.getMainPageInfo();

  if (ok) {
    return dispatch({
      type: SET_MAIN_PAGE_INFO,
      payload: result.data,
    });
  }

  console.error({ ok, result });
};
