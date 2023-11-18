import React from "react";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div>
      CreateNotes
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
        <button>Create Note</button>
      </div>
    </div>
  );
};

export default CreateNotes;
