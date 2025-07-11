import cls from "./Reviews.module.scss";

export default function Reviews() {
  const reviews = [
    {
      review:
        "Я очень доволен работой этой компании. Они помогли мне с моей проблемой и я очень доволен результатом.",
      name: "Виктор",
    },
    {
      review:
        "Отличный сервис! Быстро решили мою проблему, персонал очень вежливый и профессиональный. Обязательно обращусь снова.",
      name: "Юлия",
    },
    {
      review: "Все сделали быстро и качественно. Рекомендую всем!",
      name: "Алексей",
    },
  ];
  return (
    <section className={`section ${cls.reviews}`}>
      <div className="container">
        <div className={cls.reviews__title}>
          <h2>
            Реальные отзывы наших
            <br /> пользователей
          </h2>
          <p>Мы гордимся тем, что наши клиенты довольны нашей работой.</p>
        </div>
        <div className={cls.reviews__inner}>
          {reviews.map((review) => (
            <div className={cls.reviews__item} key={review.id}>
              <p>{review.review}</p>
              <strong>{review.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
