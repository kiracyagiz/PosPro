import React from "react";
import BlogBox from "../Blog/BlogBox";
import blog2 from "../../public/blog2.png";
import blog3 from "../../public/blog3.png";
import { useTranslation } from "next-i18next";


const Blog = () => {
    const {t} = useTranslation("common")
    const blogData = t("common:Blog",{returnObjects: true})
  return (
    <div className="bg-gray-100 py-14">
      <p className="text-center text-3xl font-bold ">BLOG</p>
    

      <div className="flex flex-wrap md:mx-20 justify-center gap-x-32 items-center gap-y-12 mt-14">
        {blogData.map((dt,i) => (
            <BlogBox
            image={dt.image}
            title={dt.title}
            desc={dt.desc}
            location={dt.location}
            key={i}
            button={dt.button}
            />
        ))}

      </div>
    </div>
  );
};

export default Blog;
