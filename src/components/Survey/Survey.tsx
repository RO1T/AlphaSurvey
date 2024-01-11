import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchSurvey, sendSurveyResults } from '../../redux/store/api-actions'
import { getSurvey } from '../../redux/store/data-process/data.selectors'

type SurveyComponentProps = {
    css: object;
}

export default function SurveyComponent({css}: SurveyComponentProps) {
	const dispatch = useAppDispatch()


	const params = useParams()
	const id = params.id ? params.id : ''
	const surveyComplete = (sender: { data: JSON }) => {
		dispatch(sendSurveyResults(
			{
				id: id,
				data: sender.data
			}
		))
		console.log(sender.data)
	}
  
  
	useEffect(() => {
		if (id){
			dispatch(fetchSurvey(id))
		}
	}, [dispatch, id])
  
	const surveyModel = useAppSelector(getSurvey)
  
	if (!surveyModel) {
		return null
	}

	if (id){
		const survey = new Model(surveyModel.id)
		survey.applyTheme(css)
		survey.onComplete.add(surveyComplete)
	
		return (<Survey model={survey}/>)
	}

}