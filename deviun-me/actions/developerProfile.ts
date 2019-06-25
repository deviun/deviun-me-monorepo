import API from '../helpers/api-helper';
import {
  SET_DEVELOPER_PROFILE,
} from './actionTypes';

// payload types

export interface DeveloperProfileT {
  avatarUrl: string;
  name: string;
  age: number;
  position: string;
  labelList: {
    text: string;
    ageLabel: string;
  }[];
}

// action types

export interface loadDeveloperProfileT {
  type: typeof SET_DEVELOPER_PROFILE;
  payload: DeveloperProfileT;
}

// actions

export const loadDeveloperProfile = async (dispatch: Function) => {
  const { ok, result }: any = await API.getDeveloperProfile();

  if (ok) {
    return dispatch({
      type: SET_DEVELOPER_PROFILE,
      payload: result.data,
    });
  }

  console.error({ ok, result });
};
