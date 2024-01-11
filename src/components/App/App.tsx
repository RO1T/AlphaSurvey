import { Routes, Route } from 'react-router-dom'
import { cssDefault } from '../../const/css'
import Surveys from '../../pages/Surveys/Surveys'
import SurveyCreatorWidget from '../CreateSurvey/CreateSurvey'
import Footer from '../Footer/Footer'
import NotFound from '../NotFound/NotFound'
import Header from '../Header/Header'
import Survey from '../Survey/Survey'
import Login from '../../pages/Login/Login'
import Profile from '../../pages/Profile/Profile'
import BProfile from '../../pages/BProfile/BProfile'
import { HelmetProvider } from 'react-helmet-async'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import { AppRoute } from '../../const/routes'

export default function App() {
	return (
		<HelmetProvider>
			<main className='app'>
				<Header/>
				<Routes>
					<Route path={AppRoute.Root} element={
						<PrivateRoute>
							<Surveys/>
						</PrivateRoute>
					}/>

					<Route path={AppRoute.Survey} element={
						<PrivateRoute>
							<Survey 
								css={cssDefault} />
						</PrivateRoute>

					}/>
					<Route path={AppRoute.CreateSurvey} element={
						<PrivateRoute>
							<SurveyCreatorWidget/>
						</PrivateRoute>

					}/>

					<Route path={AppRoute.Login} element={
						<Login/>
					}/>

					<Route path={AppRoute.Profile} element={
						<PrivateRoute>
							<Profile/>
						</PrivateRoute>

					}/>
					<Route path={AppRoute.bProfile} element={
						<PrivateRoute>
							<BProfile/>
						</PrivateRoute>

					}/>

					<Route path={AppRoute.NotFound} element={
						<NotFound/>
					}/>
				</Routes>
				<Footer/>
			</main>
		</HelmetProvider>
	)
}
