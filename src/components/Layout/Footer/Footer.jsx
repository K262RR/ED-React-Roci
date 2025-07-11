import cls from "./Footer.module.scss";
import HeaderLogo from "../../UI/HeaderLogo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={cls.footer}>
      <div className="container">
        <div className={cls.footer__inner}>
          <div className={cls.footer__info}>
            <HeaderLogo />
            <div className={cls.info__slogan}>
              <p>
                Российская организация содействия развитию и поддержке
                предпринимательства
              </p>
            </div>
            <div className={cls.info__social}>
              <a href="#">
                <img src="/images/vk.svg" alt="ВК" width={'auto'} height={24} />
              </a>
              <a href="#">
                <img src="/images/telegram.svg" alt="Телеграм" width={'auto'} height={24} />
              </a>
              <a href="#">
                <img src="/images/googleplay.svg" alt="Рустор" width={'auto'} height={24} />
              </a>
              <a href="#">
                <img src="/images/appstore.svg" alt="Аппстор" width={'auto'} height={24} />
              </a>
            </div>
          </div>
          <div className={cls.footer__menu}>
            <h3>Компания</h3>
            <ul>
              <li>
                <Link href="#">О нас</Link>
              </li>
              <li>
                <Link href="#">Все события</Link>
              </li>
              <li>
                <Link href="#">Новости</Link>
              </li>
            </ul>
          </div>
          <div className={cls.footer__menu}>
            <h3>Ресурсы</h3>
            <ul>
              <li>
                <Link href="#">О нас</Link>
              </li>
              <li>
                <Link href="#">Все события</Link>
              </li>
              <li>
                <Link href="#">Новости</Link>
              </li>
            </ul>
          </div>
          <div className={cls.footer__subscribe}>
            <h3>Подпишитесь на нашу рассылку</h3>

            <form action="">
              <input type="email" placeholder="Email" />
              <button type="submit">Подписаться</button>
            </form>
            <p>
            *  Мы будем отправлять письма с актуальными конкурсами раз в неделю
            </p>
          </div>
        </div>
        <div className={cls.footer__bottom}>
          <p>© {new Date().getFullYear()} РОСИ. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
