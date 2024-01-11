/* eslint-disable no-mixed-spaces-and-tabs */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { AppDispatch, State } from '../../types/state'
import { saveToken, dropToken } from '../services/token'
import { APIRoute } from '../../const/routes'
import { AuthData, ProfileData, RegisterData, UserData } from '../../types/user-data'
import { MySureysProps, SmallSurveyProps, SurveyProps } from '../../types/types'



export const checkAuthAction = createAsyncThunk<UserData, undefined, {
	dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'USER/checkAuth',
	async (_arg, {dispatch, extra: api}) => {
		const { data } = await api.get<UserData>(APIRoute.Login)
		dispatch(fetchProfile())
		return data
	},
)

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'USER/login',
	async ({login, password}, {dispatch, extra: api}) => {
		const {data} = await api.post<UserData>(APIRoute.Login, {login, password})
		saveToken(data.token)
		dispatch(fetchProfile())
		return data
	},
)

export const registerAction = createAsyncThunk<UserData, RegisterData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'USER/register',
	async ({login, password, role}, {dispatch, extra: api}) => {
		const {data} = await api.post<UserData>(APIRoute.RegisterUser, {login, password, role})
		saveToken(data.token)
		dispatch(fetchProfile())
		return data
	},
)

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
	'USER/logout',
	async (_arg, {extra: api}) => {
		await api.delete(APIRoute.Logout)
		dropToken()
	},
)

export const fetchSurveys = createAsyncThunk<SmallSurveyProps[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
	'DATA/fetchSurveys',
	async (_arg, {extra: api}) => {
		const {data} = await api.get<SmallSurveyProps[]>(APIRoute.GetSurveys)
		return data
	},
)

export const fetchSurvey = createAsyncThunk<SurveyProps, string, {
  state: State;
  extra: AxiosInstance;
}>(
	'DATA/fetchSurvey',
	async (id, {extra: api}) => {
		const {data} = await api.get<SurveyProps>(`${APIRoute.CompleteSurvey}${id}/`)
		return data
	},
)

export const fetchProfile = createAsyncThunk<ProfileData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'USER/fetchProfile',
	async (_arg, {extra: api}) => {
		const {data} = await api.get<ProfileData>(APIRoute.Profile)
		return data
	},
)

export const sendProfile = createAsyncThunk<ProfileData, ProfileData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
	'USER/sendProfile',
	async ({username,description}, {dispatch, extra: api}) => {
		await api.post<ProfileData>(APIRoute.Profile, {username,description})
		dispatch(fetchProfile())
		return {username,description}
	},
)

export const sendSurvey = createAsyncThunk<void, SurveyProps, {
	state: State;
	extra: AxiosInstance;
}>(
  	'DATA/sendSurvey',
  	async ({pages,title,description,id}, { extra: api}) => {
  		await api.post<SurveyProps>(APIRoute.CreateSurvey, {pages,title,description,id})
  	},
)

export const sendSurveyResults = createAsyncThunk<void, {id: string, data:JSON}, {
	state: State;
	extra: AxiosInstance;
}>(
  	'DATA/sendSurveyResults',
  	async ({id, data}, { extra: api}) => {
  		await api.post(`${APIRoute.SendAnswers}/${id}/sendanswers/`, data)
  	},
)

export const fetchMySurveys = createAsyncThunk<{mySurveys: MySureysProps[]}, undefined, {
	state: State;
	extra: AxiosInstance;
}>(
  	'DATA/fetchMySurveys',
  	async (_arg, { extra: api}) => {
  		const {data} = await api.get<{mySurveys: MySureysProps[]}>(APIRoute.MySurveys)
		return data
  	},
)
