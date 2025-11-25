export default function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log("Handle clicekd");
  }
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
