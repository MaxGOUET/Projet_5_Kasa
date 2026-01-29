import "../styles/Tag.scss";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tags_container">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
