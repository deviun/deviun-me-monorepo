import { PageInfoT, setMainPageInfoT } from '../actions/mainPageInfo';
import { SET_MAIN_PAGE_INFO } from '../actions/actionTypes';

export const initialState: PageInfoT = {
  coverImage: '',
  defaultColor: 'black',
  height: '850px',
  coverText: '',
};

export default function mainPageInfo(
  state: PageInfoT = initialState,
  action: setMainPageInfoT,
): PageInfoT {
  switch (action.type) {
    case SET_MAIN_PAGE_INFO: {
      return {
        ...action.payload,
      };
    }
    default: return state;
  }
}
