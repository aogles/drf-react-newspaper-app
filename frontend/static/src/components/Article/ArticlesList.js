import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ArticleForm from "./ArticleForm";

function ArticleList({ Articles }) {
  const [articles, setArticles] = useState(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch("/api_v1/articles/");

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      const data = await response.json();
      setArticles(data);
    };
    getArticles();
  }, []);

  /* const addArticle = async () => {
    const article = {
      image: image,
      title: title,
      body: body,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(article),
    };
    const response = await fetch("/api_v1/articles/", options);
    if (!response.ok) {
      throw new Error("network repsonse not ok.");
    }
    const data = await response.json();

    setArticles([...articles, data]);
  };
*/
  if (!articles) {
    return <div>Fetching data ...</div>;
  }

  const ArticleHTML = articles.map((article, index) => (
    <div key={index} className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={article.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.body}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{article.created_at}</li>
        <li className="list-group-item">{article.updated_at}</li>
        <li className="list-group-item">{article.is_published}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
      </div>
    </div>
  ));

  return <ul>{ArticleHTML}</ul>;
}

export default ArticleList;
