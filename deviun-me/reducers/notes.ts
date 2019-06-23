import { NotesT, loadNotesT } from '../actions/notes';
import {
  SET_NOTES,
} from '../actions/actionTypes';

export const initialState: NotesT = {
  notes: [],
};

export default function photoGrid(
  state: NotesT = initialState,
  action: loadNotesT,
): NotesT {
  switch (action.type) {
    case SET_NOTES: {
      return {
        ...action.payload,
      };
    }
    default: return state;
  }
}
