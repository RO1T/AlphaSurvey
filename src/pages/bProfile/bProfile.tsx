import { Avatar } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getProfile } from '../../redux/store/user-process/user.selectors'
import ProfileDialog from '../../components/ProfileDialog/ProfileDialog'
import { fetchMySurveys } from '../../redux/store/api-actions'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMySurveys } from '../../redux/store/data-process/data.selectors'
import CompletedSurveyCardList from '../../components/CompletedSurveyCardList/CompletedSurveyCardList'

export default function BProfile() {
	let profile = useAppSelector(getProfile)
	if (!profile){
		profile = {username: 'Default', description: 'Default Desc'}
	}
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchMySurveys())
	}, [dispatch, profile])
	const mySurveys = useAppSelector(getMySurveys)
	
	return(
		<div className="profile-container">
			<h2>Ваш профиль</h2>

			<div className="info-container">
				<div className="info-container-avatar">
					<Avatar/>
					<h3 className="info-name">{profile.username}</h3>
				</div>
				<p className="info-description">
					{profile.description}
				</p>
			</div>
        
			<div className="button-profile"><ProfileDialog/></div>
			<div className="button-profile"><Link to={'/create'}>Создать опрос</Link></div>

			<div className="surveys-recently-container">
				<h2>Недавние опросы</h2>

				<div className="surveys-recently-card-container">
					<div className="survyes-row">
						<div className="survey-card-creator"><h4>Опрос о том</h4></div>
					</div>
					<div className="survyes-row">
						<div className="survey-card-creator"><h4>Опрос о сем</h4></div>
					</div>
					<div className="survyes-row">
						<div className="survey-card-creator"><h4>Опрос о том и сем</h4></div>
					</div>
					
					<CompletedSurveyCardList mySurveys={mySurveys.mySurveys}/>


				</div>
			</div>
		</div>
	)
}