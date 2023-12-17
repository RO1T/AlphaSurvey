export default function Login() {
    return(
    <div className="login-page-container">
        <h2>Вход</h2>
        <form method="post">
        <div className="login-container">
            <label htmlFor="email">
            <span>Эл. почта</span>
            </label>
            <input type="text" placeholder="Введите email" name="email" />
            <label htmlFor="psw">
            <span>Пароль</span>
            </label>
            <input
            type="password"
            placeholder="Введите пароль"
            name="psw"
            />
            <button type="submit">Войти</button>
            <button type="submit">Зарегистрироваться</button>
        </div>
        </form>

    </div>
    );
  }