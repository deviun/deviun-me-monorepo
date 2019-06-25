import { SkillListT, loadSkillListT } from '../actions/skillLists';
import {
  SET_SKILL_LIST,
} from '../actions/actionTypes';

export const initialState: SkillListT = {
  skills: [],
};

export default function skillList(
  state: SkillListT = initialState,
  action: loadSkillListT,
): SkillListT {
  switch (action.type) {
    case SET_SKILL_LIST: {
      return {
        ...action.payload,
      };
    }
    default: return state;
  }
}
