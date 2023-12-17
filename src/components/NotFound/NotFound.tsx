import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>
            404. NOT FOUND
            </h1>
            <Link to={'/'}>
            Retrun to main page
            </Link>
        </div>
    )
}