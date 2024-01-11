import { createSelector } from '@reduxjs/toolkit'
import { State, UserProcess } from '../../../types/state'
import { NameSpace, AuthorizationStatus } from '../../../const/consts'

export const getAuthStatus = createSelector(
	(state: State) => state[NameSpace.User],
	(state: UserProcess) => state.authorizationStatus,
)
export const getUserData = createSelector(
	(state: State) => state[NameSpace.User],
	(state: UserProcess) => state.user,
)
export const getProfile = createSelector(
	(state: State) => state[NameSpace.User],
	(state: UserProcess) => state.profile,
)
export const getRole = createSelector(
	(state: State) => state[NameSpace.User],
	(state: UserProcess) => state.user?.role,
)
export const getAuthCheckedStatus = createSelector(
	(state: State) => state[NameSpace.User],
	(state: UserProcess) => state.authorizationStatus !== AuthorizationStatus.Unknown,
)
export const getSignInError = createSelector(
	(state: State) => state[NameSpace.User],
	(state: UserProcess) => state.signInError,
)


