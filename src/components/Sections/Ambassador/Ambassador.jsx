import cls from "./Ambassador.module.scss";
import HexagonButton from "../../UI/HexagonButton";

export default function Ambassador() {
  return (
    <section className={`section ${cls.ambassador}`}>
      <div className="container">
        <div className={cls.ambassador__inner}>
          <div className={cls.ambassador__image}>
            <img src="/images/ambassador.png" alt="Ambassador" />
          </div>
          <div className={cls.ambassador__content}>
            <h3>
              <span>Амбассадор&nbsp;компании - </span>Михаил&nbsp;Кристинин
            </h3>
            <p>
              Михаил Кристинин - амбассадор компании, который помогает нашим
              клиентам достигать новых высот в своем бизнесе.
            </p>
            <HexagonButton link={"/"} color={"accent"}>
              Подробнее
            </HexagonButton>
          </div>
        </div>
      </div>
    </section>
  );
}
