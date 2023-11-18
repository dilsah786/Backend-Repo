import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditNotes from "./EditNotes";

const Home = () => {
  const [notes, setNotes] = useState([]);


  const token = JSON.parse(localStorage.getItem("token"));
  // Getting Notes Here
  const getNotes = async () => {
    try {
      const result = await fetch("http://localhost:3000/notes", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await result.json();
      console.log(res);
      setNotes(res.notes);
      console.log(res.notes);
    } catch (err) {
      console.log(err);
    }
  };

  // Deleting Notes Here
  const handleDelete = async(id) =>{
    console.log(id)
    try{
      const result = await fetch(`http://localhost:3000/notes/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const res= await result.json()
      console.log(res);
    }catch(err){
      console.log(err)
    }
   getNotes()
  }











  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      Home
      <h1>Hello HomePage</h1>
      <div>
        {notes.map((note) => {
          return (
            <div key={note._id}>
              <h3> {note._id} ------- {note.title}</h3>
              <h3>{note.author} </h3>
              <button onClick={()=>handleDelete(note._id)} > Delete </button>
              <button ><Link to="/notes/edit" element={<EditNotes id={note._id} />} > Edit </Link></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
