import MainMenu from "../../MainMenu/MainMenu";
import HeaderLogo from "../../UI/HeaderLogo";
import HexagonButton from "../../UI/HexagonButton";
import "./PageHeader.scss";
import HomeHeaderSlider from "../../HomeHeaderSlider";

export default function PageHeader() {
  return (
    <header className={`header ${window.location.pathname === "/" ? "header--home" : ""}`}>
      {window.location.pathname === "/" && <HomeHeaderSlider />}
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
