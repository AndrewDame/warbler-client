import {ADD_ERROR, REMOVE_ERROR} from '../actionTypes';

export const addError = err => ({
  type: ADD_ERROR,
  err
});

export const removeError = err => ({
  type: REMOVE_ERROR,
  err
});
