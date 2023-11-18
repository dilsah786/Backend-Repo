import React, { useState } from "react";

const EditNotes = ({id}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  console.log(id)

  const token = JSON.parse(localStorage.getItem("token"));

  const handleUpdate = async(id) =>{
    console.log(id)
    const newNote = {
      title,
      author
    }

   
    
    try{
      const result = await fetch(`http://localhost:3000/notes/edit/${id}`,{
        method:"PATCH",
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-Type":"application/json"
        },
        body:JSON.stringify(newNote)
      })
      const res= await result.json()
      console.log(res);
    }catch(err){
      console.log(err)
    }

  }

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
        <button onClick={()=>handleUpdate()} >Edit Note</button>
      </div>
    </div>
  );
};

export default EditNotes;
