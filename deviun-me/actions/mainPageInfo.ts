import { SET_MAIN_PAGE_INFO } from './actionTypes';

export interface PageInfoT {
  coverImage: string;
  defaultColor: string;
  height: string;
  coverText: string;
}

export interface setMainPageInfoT {
  type: typeof SET_MAIN_PAGE_INFO;
  payload: PageInfoT;
}

export const loadMainPageInfo = async (dispatch: Function) => {
  const res = await fetch('http://api.deviun-brand.mac/object/mainPageInfo/');
  const { ok, result }: any = await res.json();
  
  if (ok) {
    return dispatch({
      type: SET_MAIN_PAGE_INFO,
      payload: result.data,
    });
  }
  
  console.error('loadMainPageInfo bad request', ok, result);
};
