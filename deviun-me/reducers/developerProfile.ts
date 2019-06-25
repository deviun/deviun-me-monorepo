import { DeveloperProfileT, loadDeveloperProfileT } from '../actions/developerProfile';
import {
  SET_DEVELOPER_PROFILE,
} from '../actions/actionTypes';

export const initialState: DeveloperProfileT = {
  avatarUrl: '',
  name: '',
  age: 0,
  position: '',
  labelList: [],
};

export default function DeveloperProfile(
  state: DeveloperProfileT = initialState,
  action: loadDeveloperProfileT,
): DeveloperProfileT {
  switch (action.type) {
    case SET_DEVELOPER_PROFILE: {
      return {
        ...action.payload,
      };
    }
    default: return state;
  }
}
