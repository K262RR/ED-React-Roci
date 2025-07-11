import cls from "./HomeNews.module.scss";
import HexagonButton from "../../UI/HexagonButton";

export default function HomeNews() {
  const news = [
    {
      image: "/images/news1.png",
      date: "11.07.2025",
      title: "Заголовок новости из двух строчек ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      image: "/images/news2.png",
      date: "11.07.2025",
      title: "Заголовок новости",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. consectetur adipisicing elit. Quisquam, quo",
    },
    {
      image: "/images/news3.png",
      date: "11.07.2025",
      title: "Заголовок новости",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ];
  return (
    <section className={`section ${cls.homeNews}`}>
      <div className="container">
        <div className={cls.homeNews__title}>
          <h2>Новости спорта</h2>
        </div>
        <div className={cls.homeNews__inner}>
          <div className={cls.homeNews__wrapper}>
            <div className={cls.homeNews__list}>
              {news.map((item, index) => (
                <div className={cls.homeNews__item} key={index}>
                  <div className={cls.homeNews__item__image}>
                    <img src={item.image} alt="News" />
                  </div>
                  <div className={cls.homeNews__item__content}>
                    <span>{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <HexagonButton link={"/"} color={"accent"}>
              Читать все новости
            </HexagonButton>
          </div>
          <div className={cls.homeNews__banner}>
            <img src="/images/newsbanner.png" alt="News" />
          </div>
        </div>
      </div>
    </section>
  );
}
