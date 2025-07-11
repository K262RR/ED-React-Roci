import MainMenu from "../MainMenu/MainMenu";
import HeaderLogo from "../UI/HeaderLogo";
import HexagonButton from "../UI/HexagonButton";
import HomeHeaderSlider from "../HomeHeaderSlider";
import "./HomeHeader.scss";

export default function HomeHeader() {
  return (
    <header className="header header--home">
      <HomeHeaderSlider />
      <div className="container">
        <div className="header__inner">
          <div className="header__topline">
            <HeaderLogo />
            <MainMenu />
            <HexagonButton color="red" link="/auth">
              Войти
            </HexagonButton>
          </div>
        </div>
      </div>
    </header>
  );
}
