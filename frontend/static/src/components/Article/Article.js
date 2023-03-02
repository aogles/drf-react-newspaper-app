import { useState } from "react";
import ArticleList from "./ArticlesList";
//  import ArticleForm from "./ArticleForm";

const INITIAL_ARTICLES = [
  {
    image:
      "/Users/amberoglesby/Documents/ccs/homework/drf-newspaper-app/frontend/static/src/components/assets/goodvibe.jpg",
    body: "The foundation of Click@Night",
    title: "Click@Night",
    created_at: "created at ",
    updated_at: "updated at ",
    is_published: "publish yes or no",
  },

  {
    image:
      "/Users/amberoglesby/Documents/ccs/homework/drf-newspaper-app/frontend/static/src/components/assets/goodvibe.jpg",
    body: "The foundation of Click@Night",
    title: "Click@Night",
    created_at: "created at ",
    updated_at: "updated at ",
    is_published: "publish yes or no",
  },

  {
    image:
      "/Users/amberoglesby/Documents/ccs/homework/drf-newspaper-app/frontend/static/src/components/assets/goodvibe.jpg",
    body: "The foundation of Click@Night",
    title: "Click@Night",
    created_at: "created at ",
    updated_at: "updated at ",
    is_published: "publish yes or no",
  },

  {
    image:
      "/Users/amberoglesby/Documents/ccs/homework/drf-newspaper-app/frontend/static/src/components/assets/goodvibe.jpg",
    body: "The foundation of Click@Night",
    title: "Click@Night",
    created_at: "created at ",
    updated_at: "updated at ",
    is_published: "publish yes or no",
  },

  {
    image:
      "/Users/amberoglesby/Documents/ccs/homework/drf-newspaper-app/frontend/static/src/components/assets/goodvibe.jpg",
    body: "The foundation of Click@Night",
    title: "Click@Night",
    created_at: "created at ",
    updated_at: "updated at ",
    is_published: "publish yes or no",
  },
];

function ArticleBoard() {
  const [articles, setArticles] = useState(INITIAL_ARTICLES);
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default ArticleBoard;
