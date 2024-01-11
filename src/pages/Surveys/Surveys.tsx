import { useEffect } from 'react'
import SurveyCard from '../../components/SurveyCard/SurveyCard'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchSurveys } from '../../redux/store/api-actions'
import { getSmallSurveys } from '../../redux/store/data-process/data.selectors'


export default function Surveys(){
	const dispatch = useAppDispatch()
	useEffect(()=>{
		dispatch(fetchSurveys())
	},[dispatch])
	const surveys = useAppSelector(getSmallSurveys)
	const arraySurveys = Object.entries(surveys)

	return (
		<div className="surveys-container">
			{arraySurveys.map((survey)=>(<article className="small-surveys-card" key={survey[0]}><SurveyCard id={survey[0]} props={survey[1]}/></article>))}
		</div>
	)
}