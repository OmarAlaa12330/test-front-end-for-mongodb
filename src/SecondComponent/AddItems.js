import "./AddItems.css";
import { useState } from "react";

export default function Additems(props) {
  const [todoitem, settodoitem] = useState("");
  const [isDoneInput, setDoneInput] = useState();

  const updateToDoItem = (event) => {
    settodoitem(event.target.value);
  };

  const updateDoneInput = (event) => {
    setDoneInput(event.target.value);
  };

  const sendData = (event) => {
    const object = {
      title: todoitem,
      done: false,
    };
    event.preventDefault(); //stop refreshing
    console.log(object);
  };

  return (
    <div className="additems-container">
      <div>
        <h5> Please enter what you want to add to mongoDB</h5>
      </div>
      <form onSubmit={(event) => sendData(event)} className="data-submission">
        <label>to do </label>
        <input
          type="text"
          value={todoitem}
          onChange={(event) => updateToDoItem(event)}
        />
        <input type="submit" text="Submit" />
      </form>
    </div>
  );
}
