export default function HexagonButton({ children, color, link }) {
  return (
    <a href={link} className={`btn btn--${color}`}>
      {children}
    </a>
  );
}
