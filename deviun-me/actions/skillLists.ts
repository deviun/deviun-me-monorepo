import API from '../helpers/api-helper';
import {
  SET_SKILL_LIST
} from './actionTypes';

import { SkillItemT } from '../pages/components/developer/SkillsList';

// payload types

export interface SkillListT {
  skills: SkillItemT[];
}

// action types

export interface loadSkillListT {
  type: typeof SET_SKILL_LIST;
  payload: SkillListT;
}

// actions

export const loadSkillList = async (dispatch: Function) => {
  const { ok, result }: any = await API.getSkillList();

  if (ok) {
    return dispatch({
      type: SET_SKILL_LIST,
      payload: result.data,
    });
  }

  console.error({ ok, result });
};
