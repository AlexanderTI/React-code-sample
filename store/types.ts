import { initialLoadableState, LoadableState } from '../common/LoadableState'
import { ActionTypes, RequestActions } from '...'
import { apiServer } from '...'


export interface UserPerson {
  readonly firstName?: string | null
  readonly lastName?: string | null
  readonly birthdayAt?: string | null
  readonly gender?: string | null
  readonly bio?: string | null
  readonly addressRegion?: string | null
  readonly addressDistrict?: string | null
  readonly addressTown?: string | null
}

export const initialUsersState: UsersState = Object.freeze({
  updateMyUserPerson: initialLoadableState,
})

export interface UsersState {
  updateMyUserPerson: LoadableState
}

// TODO rename because duplicating action name 2 times
export const UserActionTypes: ActionTypes = {
  EDIT_MY_USER_PERSON: '@@user/updateUserPerson/EDIT_MY_USER_PERSON',
}

export const UserRequestActionTypes: RequestActions = {
  EDIT_MY_USER_PERSON: {
    key: '@@user/request/EDIT_MY_USER_PERSON',
    url: `${apiServer}/user-profile/my-profile/person`,
  },
}
