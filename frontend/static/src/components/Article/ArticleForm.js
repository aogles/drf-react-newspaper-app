import { useState } from "react";
import { NavLink } from "react-router-dom";
import ArticleBoard from "./Article";
import ArticleList from "./ArticlesList";
import Cookies from "js-cookie";

function ArticleForm(article) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [articles, setArticles] = useState("");

  const addArticle = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("body", body);

    console.log(image);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
    };
    const response = await fetch("/api_v1/articles/", options);
    if (!response.ok) {
      throw new Error("network repsonse not ok.");
    }
    const data = await response.json();

    setArticles([...articles, data]);
  };

  const deleteArticle = async (id) => {
    const response = await fetch(`/api_v1/articles/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete Article");
    }

    setArticles(articles.filter((article) => article.id !== id));
  };

  const editArticle = async (id, newBody) => {
    const updatedArticle = {
      text: newBody,
    };

    const response = await fetch(`/api_v1/articles/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(updatedArticle),
    }).catch((err) => console.warn(err));

    if (!response.ok) {
      throw new Error("Failed to update Article");
    }

    const data = await response.json();

    setArticles(
      articles.map((article) =>
        article.id === id ? { ...article, text: data.text } : article
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      image: image, //retrieves value of image
      title: title, //will give you the value of title
      body: body,
    };
    addArticle(newArticle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">image</label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="body">Body</label>
      <input
        type="text"
        name="title"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit">Submit Article</button>
      <button type="button" onClick={() => deleteArticle(article.id)}>
        Delete Article
      </button>
      <button type="button" onClick={() => editArticle(article.id)}>
        Edit Article
      </button>
      <NavLink to="/">Return to Homepage</NavLink>
    </form>
  );
}

export default ArticleForm;
