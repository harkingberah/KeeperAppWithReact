import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function onAdd(note) {
    setNotes((prevNotes) => {
      return {
        ...prevNotes, note
      }
    });
  }
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} /> }
      }
      <Footer />
    </div>
  );
}

export default App;
