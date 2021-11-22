import { ADD_NUMBER, DEL_NUMBER } from './constants'

export const addACtion = (num) => {
  return {
    type: ADD_NUMBER,
    num,
  }
}

export const delAction = (num) => {
  return {
    type: DEL_NUMBER,
    num,
  }
}
