import HexagonButton from "../../UI/HexagonButton";
import cls from "./AboutUs.module.scss";

export default function AboutUs() {
  const metrics = [
    {
      icon: "/images/aboutus-icon-1.png",
      title: "2,245,341",
      description: "Все ользователи",
    },
    {
      icon: "/images/aboutus-icon-2.png",
      title: "46,328",
      description: "VIP пользователи",
    },
    {
      icon: "/images/aboutus-icon-3.png",
      title: "828,867",
      description: "Все конкурсы",
    },
    {
      icon: "/images/aboutus-icon-4.png",
      title: "1,926,436",
      description: "Выплаты",
    },
  ];
  return (
    <section className={`section ${cls.aboutUs}`}>
      <div className="container">
        <div className={cls.aboutUs__inner}>
          <div className={cls.aboutUs__title}>
            <h2>О нас</h2>
            <h3>Почему нас выбирают?</h3>
            <p>Короткий текст о том почему мы.</p>
            <HexagonButton link={"/"} color={"brown"}>
              Читать подробнее
            </HexagonButton>
          </div>
          <div className={cls.aboutUs__metrics}>
            {metrics.map((metric) => (
              <div className={cls.aboutUs__metric} key={metric.title}>
                <img src={metric.icon} alt={metric.description} />
                <div className={cls.aboutUs__metric__content}>
                  <strong>{metric.title}</strong>
                  <p>{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cls.aboutUs__image}>
          <img src="/images/aboutus-image.png" alt="About Us" />
        </div>
      </div>
    </section>
  );
}
