import {createSlice} from '@reduxjs/toolkit'
import {checkAuthAction, fetchProfile, loginAction, logoutAction, registerAction} from '../api-actions'
import { UserProcess } from '../../../types/state'
import { AuthorizationStatus, NameSpace } from '../../../const/consts'

const initialState: UserProcess = {
	authorizationStatus: AuthorizationStatus.Unknown,
	user: null,
	signInError: false,
	profile: null,
	profileError: false,
}

export const userProcess = createSlice({
	name: NameSpace.User,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(checkAuthAction.fulfilled, (state, action) => {
				state.authorizationStatus = AuthorizationStatus.Auth
				state.user = action.payload
			})
			.addCase(checkAuthAction.rejected, (state) => {
				state.authorizationStatus = AuthorizationStatus.NoAuth
			})
			.addCase(loginAction.fulfilled, (state, action) => {
				state.authorizationStatus = AuthorizationStatus.Auth
				state.user = action.payload
			})
			.addCase(loginAction.rejected, (state) => {
				state.authorizationStatus = AuthorizationStatus.NoAuth
				state.signInError = true
			})

			.addCase(logoutAction.fulfilled, (state) => {
				state.authorizationStatus = AuthorizationStatus.NoAuth
				state.user = null
			})

			.addCase(registerAction.fulfilled, (state, action) => {
				state.authorizationStatus = AuthorizationStatus.Auth
				state.user = action.payload
			})
			.addCase(registerAction.rejected, (state) => {
				state.authorizationStatus = AuthorizationStatus.NoAuth
				state.signInError = true
			})

			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.profile = action.payload
				state.profileError = false
			})
			.addCase(fetchProfile.rejected, (state) => {
				state.profileError = true
			})
	}
})
