import { ReactNode } from 'react'

import { AuthState } from '../../../../store/ducks/user/auth/types'

export interface StateProps {
  auth: AuthState
}

export interface Props {
  children: ReactNode
  permissions: Array<string>
  isPage?: boolean
}
