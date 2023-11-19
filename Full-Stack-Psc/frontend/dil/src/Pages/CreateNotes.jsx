import React, { useState } from "react";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));

  const handleCreateNote = async () => {
    const newNote = {
      title,
      author,
    };
    try {
      const result = await fetch("http://localhost:3000/notes/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      const res = await result.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      CreateNotes
      <div>
        <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <button onClick={() => handleCreateNote()}>Create Note</button>
      </div>
    </div>
  );
};

export default CreateNotes;
