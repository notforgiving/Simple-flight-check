import {IActionError} from './interfaceType'

export enum actionsForError {
  NEW_ERROR = "NEW_ERROR",
}

export const setError = (error:string):IActionError => ({
  type: actionsForError.NEW_ERROR,
  payload: error
});
