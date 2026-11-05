import newsImg from "../Assets/news.jpg";
const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light w-100 h-100 px-2 py-2">
      <img
        src={src || newsImg}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt={title || "news"}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No title available"}
        </h5>
        <p className="card-text">
          {description ? description.slice(0, 50) : "No description available"}
          ...
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
