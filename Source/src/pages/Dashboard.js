import { Link } from "react-router-dom";
import Style from './Dashboard.module.css'




export function Dashboard() {
    return (
        <>
        <ul>
            <li>
                <Link to="/">Main Page</Link>
            </li>
        </ul>
        <h1>Dashboard</h1>
        </>
    )
}
