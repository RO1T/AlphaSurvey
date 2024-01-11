import { FormEvent, useRef, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { loginAction, registerAction } from '../../redux/store/api-actions'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../const/routes'

export default function Login() {
	const loginRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)
    
	const navigate = useNavigate()

	const [button, setButton] = useState('null')
	const dispatch = useAppDispatch()


	function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
        
		evt.preventDefault()
		if ((loginRef.current !== null && passwordRef.current !== null) && (
			loginRef.current.value !== '' && passwordRef.current.value !== ''
		)) {
			const login = loginRef.current.value
			const password = passwordRef.current.value
			try{
				switch (button) {
				case 'login':{
					dispatch(loginAction({
						login: login,
						password: password
					}))
					navigate(AppRoute.Profile)
					break
				}
				case 'register-u':{
					dispatch(registerAction({
						login: login,
						password: password,
						role: 'u'
					}))
					navigate(AppRoute.Profile)
					break
				}
				case 'register-b':{
					dispatch(registerAction({
						login: login,
						password: password,
						role: 'b'
					}))
					navigate(AppRoute.bProfile)
					break
				}
				default:
					break
				}
			}
			catch{
				alert('problemka...')
			}
		}
		else{
			alert('you fucking idiot, fill the blanks')
		}
	}

	return(
		<div className="login-page-container">
			<h2>Вход</h2>
			<form method="post" onSubmit={handleSubmit}>
				<div className="login-container">
					<label htmlFor="login">
						<span>Логин</span>
					</label>
					<input type="text" placeholder="Введите login" name="login" ref={loginRef} />
					<label htmlFor="psw">
						<span>Пароль</span>
					</label>
					<input
						type="password"
						placeholder="Введите пароль"
						name="psw"
						ref={passwordRef}
					/>
					<button type="submit" onClick={() => setButton('login')}>Войти</button>
					<button type="submit" onClick={() => setButton('register-u')}>Зарегистрироваться как респондент</button>
					<button type="submit" onClick={() => setButton('register-b')}>Зарегистрироваться как бизнесс</button>
				</div>
			</form>

		</div>
	)
}