import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
