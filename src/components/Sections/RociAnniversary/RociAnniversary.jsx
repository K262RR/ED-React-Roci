import cls from "./RociAnniversary.module.scss";

export default function RociAnniversary() {
  return (
    <section className={`section ${cls.rociAnniversary}`}>
      <div className="container">
        <div className={cls.rociAnniversary__inner}>
          <div className={cls.rociAnniversary__logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="78"
              viewBox="0 0 90 78"
              fill="none"
            >
              <path
                d="M6.30859 52.75L28.1836 19.75H60.3125L43.9063 37.625L35.7031 39.6875H41.8555H63.0469L2.89062 77.5L23.3984 50L6.30859 52.75Z"
                fill="#FF5050"
              />
              <path
                d="M0.484375 0.5L60.6406 19.75L30.2168 29.375L0.484375 0.5Z"
                fill="#FF5050"
              />
              <path
                d="M48.6094 36.5938L64.1256 22.1562L89.5157 31.3438L48.6094 36.5938Z"
                fill="#FF5050"
              />
              <path
                d="M37.2253 7.82465C37.7365 6.47917 38.5372 5.23748 39.5816 4.17048C40.626 3.10349 41.8936 2.23208 43.3122 1.606C44.7308 0.979933 46.2725 0.611462 47.8493 0.521629C49.4261 0.431797 51.0072 0.622363 52.5022 1.08245C53.9971 1.54253 55.3768 2.26312 56.5623 3.20307C57.7479 4.14303 58.7161 5.28394 59.4118 6.56067C60.1074 7.8374 60.5168 9.22494 60.6166 10.6441C60.7164 12.0632 60.5047 13.4861 59.9935 14.8316L48.6094 11.3281L37.2253 7.82465Z"
                fill="#FF5050"
              />
            </svg>
            <strong>ROCI&nbsp;GROUP</strong>
          </div>
          <div className={cls.rociAnniversary__content}>
            <h3>
              Нам исполнилось <span>5&nbsp;лет!</span>
            </h3>
            <p>
              Мы команда профессионалов, которые помогают нашим клиентам
              достигать новых высот в своем бизнесе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
