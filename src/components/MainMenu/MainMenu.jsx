import { Link } from "react-router-dom";
import "./MainMenu.scss";

export default function MainMenu() {
  const menuItems = [
    { path: "/", label: "Главная" },
    { path: "/events", label: "Все события" },
    { path: "/news", label: "Новости" },
    { path: "/about", label: "О нас" },
  ];

  return (
    <nav className="mainMenu">
      <ul className="mainMenu__list">
        {menuItems.map((item) => (
          <li key={item.path} className="mainMenu__item">
            <Link to={item.path} className="mainMenu__link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
