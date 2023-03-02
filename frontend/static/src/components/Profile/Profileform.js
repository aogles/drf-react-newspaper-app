/* import { useState } from "react";
import Cookies from "js-cookie";

function Profile() {
  const [profile, setProfile] = useState({
    display_name: "",
    avatar: null,
  });
  const [preview, setPreview] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    setProfile({
      ...profile,
      avatar: file,
    });
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("display_name", profile.display_name);
    formData.append("avatar", profile.avatar);

    const options = {
      method: "POST",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: formData,
    };

    const response = await fetch("/api+v1/profiles/", options);
    const data = await response.json();
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="display_name"> Enter you name</label>
      <input
        type="text"
        id="display_name"
        name="display_name"
        value={profile.display_name}
        onChange={handleChange}
      ></input>
      <input type="file" name="avatar" onChange={handleImage}></input>
      {profile.avatar && <img src={preview} alt="" />}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Profile;
*/
