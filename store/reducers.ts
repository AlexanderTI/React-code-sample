import { combineReducers } from 'redux'

import { withLoadable } from '...'
import { initialLoadableState, LoadableState } from '../common/LoadableState'
import { UserRequestActionTypes } from './types'

const updateMyUserPerson = withLoadable<LoadableState>(UserRequestActionTypes.EDIT_MY_USER_PERSON)(
  state => {
    if (!state) {
      return initialLoadableState
    }
    return state
  },
)

export default combineReducers({
  updateMyUserPerson,
})
