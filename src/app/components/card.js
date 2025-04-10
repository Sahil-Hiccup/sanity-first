import { urlFor } from "@/app/sanity/client";
import Link from "next/link";

const Card = ({ id, url, image, comments, views, description, category, title }) => {
  return (
    <div className="p-4 md:w-1/3" key={id}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image ? urlFor(image).url() : "https://via.placeholder.com/400x300"}
          alt={title || "blog"}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap">
            <Link href={url} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center text-sm pr-3 py-1 border-r-2 border-gray-200">
              👁 {views}
            </span>
            <span className="text-gray-400 inline-flex items-center text-sm">
              💬 {comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;