import React from "react";
import { useState } from "react";

const DataSignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = async (event) => {
    const ApiURL = process.env.REACT_APP_API_URL;
    const url = `${ApiURL}/register`;
    //console.log(url);
    event.preventDefault();
    let result = await fetch(url, {
      method: "post",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    //console.warn(result);
    if (result) {
      alert(name + " " + email + " | Data saved succesfully");
      setEmail("");
      setName("");
    }
  };
  return (
    <div>
      <h1>This is React WebApp </h1>
      <form action="">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleOnSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default DataSignIn;
