import API from '../helpers/api-helper';
import {
  SET_NOTES,
} from './actionTypes';

import { NoteItemT } from '../pages/components/main/Notes';

// payload types

export interface NotesT {
  notes: NoteItemT[];
}

// action types

export interface loadNotesT {
  type: typeof SET_NOTES;
  payload: NotesT;
}

// actions

export const loadNotes = async (dispatch: Function) => {
  const { ok, result }: any = await API.getNotes();

  if (ok) {
    return dispatch({
      type: SET_NOTES,
      payload: {
        notes: result.map(({ item }: any) => item),
      },
    });
  }

  console.error({ ok, result });
};
