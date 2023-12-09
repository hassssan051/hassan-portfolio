import React, { useEffect } from "react";
import { fetchFeed } from "../api/fetchMedium";
export const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl">Blog</h1>
      <p className="text-xl">
        I'm working on a blog. It's not ready yet, but it will be soon!
      </p>
    </div>
  );
};
