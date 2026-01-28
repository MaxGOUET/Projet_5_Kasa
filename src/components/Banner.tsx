import "../styles/Banner.scss";
import type { ReactElement } from "react";

function Banner({
  title,
  backgroundImage,
}: {
  title?: string | ReactElement;
  backgroundImage: string;
}) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {title && <h1>{title}</h1>}
    </div>
  );
}
export default Banner;
