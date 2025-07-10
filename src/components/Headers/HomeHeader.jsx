import MainMenu from "../MainMenu/MainMenu";
import HeaderLogo from "../UI/HeaderLogo";
import HexagonButton from "../UI/HexagonButton";
import "./HomeHeader.scss";

export default function HomeHeader() {
  return (
    <header className="header header--home">
      <HeaderLogo />
      <MainMenu />
      <HexagonButton color="red" link="/">
        Войти
      </HexagonButton>
    </header>
  );
}
