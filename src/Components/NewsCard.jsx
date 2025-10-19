import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    id
  } = news;


  return (
    <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden">
      {/* Author Info */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-GB")}
            </p>
          </div>
        </div>
        <div>
        <button className="btn btn-ghost btn-sm text-gray-500">
          <FaRegBookmark size={18} />
        </button>
        <button className="btn btn-ghost btn-sm text-gray-500">
          <FaShareAlt size={18} />
        </button>
        </div>
      </div>

      {/* Title & Thumbnail */}
      <div className="px-4 pt-4">
        <h3 className="text-lg font-bold leading-tight">{title}</h3>
      </div>
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        <p>
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <span className="font-semibold text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="px-4 pb-3 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="badge badge-outline text-sm capitalize"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
