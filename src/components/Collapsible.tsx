import chevron from "../assets/chevron.svg";
import { useState } from "react";
import "../styles/Collapsible.scss";

function Collapsible({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [openContent, setOpenContent] = useState(true);
  const toggleContent = () => {
    setOpenContent(!openContent);
  };
  return (
    <>
      <div
        className={"Collapsible " + (!openContent && "open")}
        onClick={toggleContent}
      >
        <h2>
          {title}
          <img src={chevron} alt="arrow down" />
        </h2>
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default Collapsible;
