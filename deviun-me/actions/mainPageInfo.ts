import API from '../helpers/api-helper';
import {
  SET_MAIN_PAGE_INFO,
} from './actionTypes';

import { SocialNetworkItemT } from '../pages/components/main/SocialNetworks';

// payload types

export interface PageInfoT {
  coverImage: string;
  defaultColor: string;
  height: string;
  coverText: string;
  description: string;
  socialNetworks: SocialNetworkItemT[];
}

// action types

export interface loadPageInfoT {
  type: typeof SET_MAIN_PAGE_INFO;
  payload: PageInfoT;
}

// actions

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
