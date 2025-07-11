import HexagonButton from "../../UI/HexagonButton";
import cls from "./RaiseStatus.module.scss";

export default function RaiseStatus() {
  return (
    <section className={`section ${cls.raiseStatus}`}>
      <div className="container">
        <div className={cls.raiseStatus__inner}>
          <h3>
            Поднимите свой статус до <span>VIP</span>
          </h3>
          <p>
            Наши услуги помогут вам достичь новых высот в своем бизнесе. Наши
            услуги помогут вам достичь новых высот в своем бизнесе.
          </p>
          <HexagonButton link={"/"} color={"accent"}>
            Оставить заявку
          </HexagonButton>
        </div>
      </div>
    </section>
  );
}
