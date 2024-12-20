import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes, note
      ];
    });
  }
  function removeNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} deleteNote={removeNote} />
      {notes.map((value, index) => {
        return (<Note key={index} id={index} title={value.title} content={value.content} />); })
      }
      <Footer />
    </div>
  );
}

export default App;
