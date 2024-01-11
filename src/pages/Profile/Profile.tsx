import { Avatar } from '@mui/material'
import ProfileDialog from '../../components/ProfileDialog/ProfileDialog'
import { useAppSelector } from '../../hooks'
import { getProfile } from '../../redux/store/user-process/user.selectors'

export default function Profile() {
	let profile = useAppSelector(getProfile)
	if (!profile){
		profile = {username: 'Default', description: 'Default Desc'}
	}

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

			<div className="surveys-recently-container">
				<h2>Недавние опросы</h2>

				<div className="surveys-recently-card-container">
					<div className="div-20">
						<p>Опрос</p>
						<p>Опрос</p>
						<p>Опрос</p>
					</div>
					<div className="div-20">
						<p>Опрос</p>
						<p>Опрос</p>
						<p>Опрос</p>
					</div>
					<div className="div-20">
						<p>Опрос</p>
						<p>Опрос</p>
						<p>Опрос</p>
					</div>
				</div>
			</div>
		</div>
	)
}