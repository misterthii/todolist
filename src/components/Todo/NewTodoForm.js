import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Modifier votre tâche"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <button onClick={handleSubmit}>valider</button>
        </>
      ) : (
        <>
          <input
            placeholder="Ajouter une tâche"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <button onClick={handleSubmit}>Ajouter une tâche</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
