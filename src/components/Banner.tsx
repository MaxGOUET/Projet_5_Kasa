import "../styles/Banner.scss";

function Banner({
  title,
  backgroundImage,
}: {
  title?: string;
  backgroundImage: string;
}) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}
export default Banner;
