import { AnyAction } from 'redux'

import {
  UserActionTypes,
  UserPerson,
} from './types'

export const editMyUserPerson = (payload: UserPerson): AnyAction => ({
  type: UserActionTypes.EDIT_MY_USER_PERSON,
  payload,
})
