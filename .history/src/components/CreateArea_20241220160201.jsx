import React,{useState} from "react";

function CreateArea(props) {
  const [note, setNoteState] = useState({
    title: "",
    content: "",
  });
  function getNote() {
    setNoteState((prevValue) => {
      return {...prevValue, note}
    })
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={getNote}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={getNote} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
