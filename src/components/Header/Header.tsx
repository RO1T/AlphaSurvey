import { Link } from "react-router-dom";

export default function Header() {
    return (
    <header>
            <nav>
                <ul className="left-nav">
                        <Link className="link-class-logo" to={"/"}><img src='/Vector.svg'/></Link>
                    <li>
                        <Link to={"/"} className="link-class">Опросы</Link>
                    </li>
                    <li>
                        <Link to={"/survey"} className="link-class">Созданный опрос</Link>
                    </li>
                    <li>
                        <Link to={"/create"} className="link-class">Создать опрос</Link>
                    </li>
                </ul>
                <ul className="right-nav">
                    <li>
                        <Link to={"/login"} className="link-class">Вход</Link>
                    </li>
                    <li>
                        <Link to={"/b/profile"} className="link-class">ПрофильБизнес</Link>
                    </li>
                    <li>
                        <Link to={"/profile"} className="link-class">ПрофильЮзер</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}