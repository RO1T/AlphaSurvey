import { createSlice } from '@reduxjs/toolkit'
import { NameSpace } from '../../../const/consts'
import { fetchMySurveys, fetchSurvey, fetchSurveys } from '../api-actions'
import { SurveysData } from '../../../types/state'

const initialState: SurveysData = {
	smallSurveys: [],
	smallSurveysError: false,

	mySurveys: {
		mySurveys: []
	},

	survey: null,
	surveyError: false,
}

export const dataProcess = createSlice({
	name: NameSpace.Data,
	initialState,
	reducers: {
	},
	extraReducers(builder) {
		builder
			.addCase(fetchSurveys.rejected, (state) => {
				state.smallSurveysError = true
			})
			.addCase(fetchSurveys.fulfilled, (state, action) => {
				state.smallSurveys = action.payload
			})
			.addCase(fetchSurvey.rejected, (state) => {
				state.surveyError = true
			})
			.addCase(fetchSurvey.fulfilled, (state, action) => {
				state.survey = action.payload
			})
			.addCase(fetchMySurveys.fulfilled, (state, action) => {
				state.mySurveys = action.payload
			})
	}
})

