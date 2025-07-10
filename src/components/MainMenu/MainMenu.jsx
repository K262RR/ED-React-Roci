import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sls from "./MainMenu.module.scss";

export default function MainMenu() {
  const menuItems = [
    { path: "/", label: "Главная" },
    { path: "/events", label: "Все события" },
    { path: "/news", label: "Новости" },
    { path: "/about", label: "О нас" },
  ];

  return (
    <nav className={sls.mainMenu}>
      <ul className={sls.mainMenu__list}>
        {menuItems.map((item) => (
          <li key={item.path} className={sls.mainMenu__item}>
            <Link to={item.path} className={sls.mainMenu__link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
