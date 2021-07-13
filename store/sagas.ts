import { Action } from 'redux'
import { call, put, takeLatest } from 'redux-saga/effects'

import { RequestDescriptor } from '...'
import { clearKey, failKey, loadingKey, successKey } from '...'

import {
  UserActionTypes,
  UserPerson,
  UserRequestActionTypes,
} from './types'
import { editMyUserProfileApi } from './updateMyUserPerson/request'

function* editMyUserPerson(action: Action & { payload: UserPerson }): IterableIterator<Action> {
  const requestType = UserRequestActionTypes.EDIT_MY_USER_PERSON as RequestDescriptor
  yield put({ type: loadingKey(requestType.key) })
  try {
    yield call(editMyUserProfileApi, requestType.url, action.payload)
    yield put({
      type: successKey(requestType.key),
      payload: {
        message: 'response.success.updateMyUserPerson',
        data: true,
      },
    })
  } catch (e) {
    yield put({ type: failKey(requestType.key), payload: { data: e.message } })
  } finally {
    yield put({
      type: clearKey(requestType.key),
    })
  }
}

export default function* userSagas(): IterableIterator<Action> {
  yield takeLatest(UserActionTypes.EDIT_MY_USER_PERSON, editMyUserPerson)
}
