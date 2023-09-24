import { Link } from "react-router-dom";
import Style from './Dashboard.module.css'
import ProfileImage from "../img/channels4_profile.png";
import 'bootstrap-icons/font/bootstrap-icons.css';


export function Dashboard() {
    return (
        <>
        <aside className={Style.header}>
            <section className={Style.mainbar}>
                <img src={ProfileImage} alt="User's Profile IMG" />
            </li>
        </ul>
        <h1>Dashboard</h1>
        </>
    )
}
