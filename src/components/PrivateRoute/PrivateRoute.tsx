import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { getAuthStatus } from '../../redux/store/user-process/user.selectors'
import { AuthorizationStatus } from '../../const/consts'
import { AppRoute } from '../../const/routes'

interface PrivateRouteProps {
  children: JSX.Element
}

export default function PrivateRoute (props: PrivateRouteProps) {
	const { children } = props
	const authorizationStatus = useAppSelector(getAuthStatus)
	return (
		authorizationStatus === AuthorizationStatus.Auth
			? children
			: <Navigate to={AppRoute.Login} />
	)
}
