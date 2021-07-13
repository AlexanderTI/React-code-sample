import { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux'

import { permissionsList } from '../../../../common/Permissions'
import { UserRole } from '../../../../common/UserRole'
import { ApplicationState } from '../../../../store/types'
import { contains } from './helper'
import { Props, StateProps } from './PermissionsGuard.types'

export const havePermission = (permissions: Array<string>, role: UserRole | undefined): boolean => {
  const list = role ? permissionsList[role] : []
  return contains(list, permissions)
}

const PermissionsGuard = ({
  permissions,
  isPage = false,
  children,
  auth,
}: Props & StateProps): ReactElement => {
  const router = useRouter()
  const canRender = havePermission(permissions, auth.role)

  useEffect(() => {
    if (auth.hasLoaded && isPage && !canRender) {
      router.push('/')
    }
  }, [canRender, auth.hasLoaded])

  return <>{canRender ? children : null}</>
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  auth: state.user.auth,
})

export default connect(mapStateToProps)(PermissionsGuard)
