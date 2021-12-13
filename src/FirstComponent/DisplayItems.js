import "./DisplayItems.css";
import { getRequest } from "../crud";
import { useState, useEffect } from "react";
import config from "../Configs/Config.json";

export default function DisplayItems(props) {
  const [ToDos, setToDos] = useState([]);


  const getToDos =()=>{
    fetch(config.SERVER_URL +"todo")
    .then(response => response.json())
    .then (data=>setToDos(data))
    .catch((error)=>console.error("error: ",error))
  }

  const checked = (oldData) => {
    const data = {
      title: oldData.title,
      done: !oldData.done,
    };
    fetch(
      config.SERVER_URL + "todo?title=" + oldData.title.replace(" ", "%20"),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log("success", data));
    getToDos().catch((error) => console.error(error));
  };

  useEffect (() => {
    getToDos()
  },[])
  return (
    <div className="displayitems-container">
      <div className="header-display">
        <h4>The contents inside MongoDB are:</h4>
        <button onClick={() => checked()} className="button-display">
          {" "}
          Click to show
        </button>
      </div>
      <div className="content-display">
        {ToDos.map((data) => (
          <div className="task">
            <p>{data.title}</p>
            <input type="checkbox" checked={data.isDone} />
          </div>
        ))}
      </div>
    </div>
  );
}

/*

{props.data.map((data) => (
          <div>
            <p>{data.title}</p>
            <input type ="checkbox" checked={data.isDone} />
          </div>
        ))}

*/
