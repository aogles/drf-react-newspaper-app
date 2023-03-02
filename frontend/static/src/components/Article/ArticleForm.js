import { useState } from "react";
import { NavLink } from "react-router-dom";
import ArticleBoard from "./Article";

function ArticleForm(addArticle) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addArticle = async () => {
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

  /*
  const deleteMessage = async (id) => {
    const response = await fetch(`/api_v1/channels/messages/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete message");
    }

    setMessages(messages.filter((message) => message.id !== id));
  };

  const editMessage = async (id, newCaption) => {
    const updatedMessage = {
      text: newCaption,
    };

    const response = await fetch(`/api_v1/channels/messages/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(updatedMessage),
    }).catch((err) => console.warn(err));

    if (!response.ok) {
      throw new Error("Failed to update message");
    }

    const data = await response.json();

    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, text: data.text } : message
      )
    );
  };
*/
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
    <form>
      <label htmlFor="image">image</label>
      <input
        type="file"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="body">Title</label>
      <input
        type="text"
        name="title"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit">Save Article</button>
      <NavLink to="/">Return to Homepage</NavLink>
    </form>
  );
}

export default ArticleForm;
