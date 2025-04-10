import { fetchTutorials } from "@/app/sanity/api";
import { PortableText } from "@portabletext/react";

const BlogsContent = async ({ params }) => {
  const id = params.id;
  const res = await fetchTutorials(`*[_type == "blogs" && slug.current == "${id}"]{content}`);

  return (
    <section className="body-font">
      <div className="container px-5 mx-auto portable-text w-[60%] my-4 text-[#020626]">
        {res.length > 0 ? (
          <PortableText value={res[0].content} />
        ) : (
          <p>No content found for this blog.</p>
        )}
      </div>
    </section>
  );
};

export default BlogsContent;
