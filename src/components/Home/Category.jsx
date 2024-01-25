import { Link } from "react-router-dom";
import "../../styles/category.scss";

const Category = () => {
  const tags = ["JavaScript", "HTML", "CSS", "React", "Node.js", "Express.js"];
  return (
    <div className="category">
      <span>Filter by category</span>
      <div className="tags">
        {tags.map((tag) => (
          <Link key={tag} to={`/${tag}`}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
