import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'
import { logoutAction } from '../../redux/store/api-actions'

export default function LogoutButton() {
	const dispatch = useAppDispatch()
	return (
		<Link className="link-class"
			onClick={() => {
				dispatch(logoutAction())
			} } to={''}    >
        Выход
		</Link>
	)
}
