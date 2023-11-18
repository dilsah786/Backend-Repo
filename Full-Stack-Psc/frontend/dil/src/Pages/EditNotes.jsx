import React, { useState } from "react";

const EditNotes = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div>
      EditNotes
      <div>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Edit Note</button>
      </div>
    </div>
  );
};

export default EditNotes;
