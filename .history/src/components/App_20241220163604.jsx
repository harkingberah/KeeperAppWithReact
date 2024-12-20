import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    if (note.length !== 0) {
      setNotes((prevNotes) => {
      return [
        ...prevNotes, note
      ];
    });
    }
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((value, index) => {
        return (<Note key={index} id={index} title={value.title} content={value.content} />); })
      }
      <Footer />
    </div>
  );
}

export default App;
