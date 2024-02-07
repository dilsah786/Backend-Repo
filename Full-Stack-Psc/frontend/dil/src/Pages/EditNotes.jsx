import React, { useState } from "react";
import { useParams } from "react-router-dom";



const EditNotes = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));

  let { id } = useParams();
 

  const handleUpdate = async (id) => {

    const newNote = {
      title,
      author,
    };
    try {
      const result = await fetch(`${BaseUrl}/twits/edit/${id}`, {
        method: "PATCH",
        headers: {
          Authorization:`Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });


      const res = await result.json();
      console.log("Assignment Updated")
       console.log(res);


    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div>
      EditNotes
      <div>
        <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button onClick={()=>handleUpdate(id)}>Edit Note</button>
      </div>
    </div>
  );
};

export default EditNotes;
