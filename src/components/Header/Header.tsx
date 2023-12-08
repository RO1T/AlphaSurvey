import { Link } from "react-router-dom";

export default function Header() {
    return (
    <header>
            <nav>
                <ul className="left">
                    <img src='/Vector.svg'/>
                    <li>
                        <Link to={""}>Опросы</Link>
                    </li>
                    <li>
                        <Link to={""}>Интервью</Link>
                    </li>
                </ul>
                <ul className="right">
                    <li>
                        <Link to={""}>Регистрация</Link>
                    </li>
                    {/* для залогиненных <li>
                        <a>Вход</a>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}