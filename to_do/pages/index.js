import { useState } from "react";
import style from "../styles/Home.module.css";
export default function Home() {
    const [userinput, setuserinput] = useState("");
    const [todolist, settodo] = useState([]);
    const handle = (e) => {
        e.preventDefault();
        setuserinput(e.target.value);
        console.log(userinput);
    };
    const handlesub = (e) => {
        e.preventDefault();
        settodo([userinput, ...todolist]);
        console.log(todolist);
        setuserinput("");
    };
    const deletelist = (todo) => {
        console.log(todo);
        const update = todolist.filter((item) => {
            todolist.indexOf(item) != todolist.indexOf(todo);
        });
        settodo(update);
    };

    return (
        <div className={style.todo_list}>
            <h2>Next Js TODO list</h2>
            <from>
                <input
                    type="text"
                    value={userinput}
                    name=""
                    id=""
                    onChange={handle}
                />
                <button type="submit" onClick={handlesub}>
                    Submit
                </button>
            </from>
            <div>
                <h2>Your text</h2>
                <ul>
                    {todolist.length >= 1
                        ? todolist.map((todo, inx) => {
                              return (
                                  <li key={inx}>
                                      {inx + 1} . {todo}
                                      <button
                                          onClick={() => {
                                              deletelist(todo);
                                          }}
                                      >
                                          Delete
                                      </button>
                                  </li>
                              );
                          })
                        : "Add your list"}
                </ul>
            </div>
        </div>
    );
}
