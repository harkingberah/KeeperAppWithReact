import React,{useState} from "react";

function CreateArea(props) {
  const [note, setNoteState] = useState({
    title: "",
    content: "",
  });
  function getNote(event) {
    const {value, name} =event.target
    setNoteState((prevValue) => {
      return {...prevValue, [name]:value,}
    })
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={getNote} value={note.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={getNote} value={note.content}/>
        <button onClick={addNote.props}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
