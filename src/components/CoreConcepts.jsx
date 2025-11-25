export default function CoreConcepts({ image, title, description }) {
  return (
    <>
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} />
      </li>
    </>
  );
}
