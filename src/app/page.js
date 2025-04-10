// app/page.js

import Card from "./components/card";
import { fetchTutorials } from "@/app/sanity/api";
import Tutorials from "./tutorials/page";

const HomePage = async () => {
  const res = await fetchTutorials(`*[_type == "blogs"]{
    _id,
    title,
    slug,
    description,
    _createdAt,
    image,
    category,
    views,
    comments_no
  }`);

  return (
    <main>
      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
              tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
              authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <a
                href="/tutorials"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Tutorials
              </a>
              <a
                href="/blog"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Blog
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://github.com/imarjunshrma/nextjs-blog/blob/typescript/frontend/public/hero1.jpg?raw=true"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="text-gray-600 body-font bg-[#f3f4f6] py-10 px-4">
        <div className="container mx-auto flex flex-wrap -m-4">
          {res.map((val) => (
            <Card
              key={val._id}
              id={val._id}
              url={`/blog/${val.slug?.current}`}
              image={val.image}
              title={val.title || "Untitled Post"}
              description={val.description || "No description available."}
              category={val.category || "Uncategorized"}
              views={val.views || 0}
              comments_no={val.comments_no || 0}
            />
          ))}
        </div>
      </section>
      <Tutorials />
    </main>

  );
};

export default HomePage;