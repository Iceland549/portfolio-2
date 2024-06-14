import React from "react";
import Link from "next/link";

const WorkCard = ({ img, name, description, githubLink }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <Link href={githubLink} target="_blank" rel="noopener noreferrer">
        <div
          className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
          style={{ height: "600px" }}
          >
          <img
            alt={name}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            src={img}
            ></img>
        </div>
      </Link>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
