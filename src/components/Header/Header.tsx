import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { getAuthStatus, getRole } from '../../redux/store/user-process/user.selectors'
import { AuthorizationStatus } from '../../const/consts'
import LogoutButton from '../LogoutButton/LogoutButton'

export default function Header() {
	const isAuth = useAppSelector(getAuthStatus) === AuthorizationStatus.Auth
	const role = useAppSelector(getRole)
	return (
		<header>
			<nav>
				<ul className="left-nav">
					<Link className="link-class-logo" to={'/'}><img src='/Vector.svg'/></Link>
					<li>
						{isAuth ? <Link to={'/'} className="link-class">Опросы</Link> : ''}
					</li>
					<li>
						{role === 'b' ? <Link to={'/survey'} className="link-class">Созданный опрос</Link> : ''}
					</li>
					<li>
						{role === 'b' ? <Link to={'/create'} className="link-class">Создать опрос</Link> : ''}
					</li>
				</ul>
				<ul className="right-nav">
					<li>
						{isAuth ? <LogoutButton/> : <Link to={'/login'} className="link-class">Вход</Link>}
					</li>
					<li>
						{isAuth ? role === 'u' ? <Link to={'/profile'} className="link-class">Профиль Юзер</Link> : 
							<Link to={'/b/profile'} className="link-class">Профиль Бизнес</Link> : ''}
					</li>
				</ul>
			</nav>
		</header>
	)
}