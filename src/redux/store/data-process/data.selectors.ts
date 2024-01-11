import { createSelector } from '@reduxjs/toolkit'
import {State, SurveysData } from '../../../types/state'
import { NameSpace } from '../../../const/consts'

export const getSmallSurveys = createSelector(
	(state: State) => state[NameSpace.Data],
	(state: SurveysData) => state.smallSurveys,
)

export const getSurvey = createSelector(
	(state: State) => state[NameSpace.Data],
	(state: SurveysData) => state.survey,
)

export const getMySurveys = createSelector(
	(state: State) => state[NameSpace.Data],
	(state: SurveysData) => state.mySurveys,
)