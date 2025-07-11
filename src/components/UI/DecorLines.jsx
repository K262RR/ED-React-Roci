import cls from "./DecorLines.module.scss";

export default function DecorLines() {
  const lines = [
    {
      id: 1,
      src: "/images/decor-left.png",
      alt: "decorLines",
    },
    {
      id: 2,
      src: "/images/decor-right.png",
      alt: "decorLines",
    },
  ];
  return (
    <div className={cls.decorLines}>
      <div className={cls.decorLines__line}>
        <img className={cls.decorLines__line__left} src={lines[0].src} alt="decorLines" />
        <img className={cls.decorLines__line__right} src={lines[1].src} alt="decorLines" />
      </div>
    </div>
  );
}
