import { useState } from "react";
//it is used in managing state
//it is also used in updating state, object and arrays
function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
      initialTodos.push({
        id: i,
        text: 'Item ' + (i + 1)
      });
    }
    return initialTodos;
  }
  



const Counter = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        setTodos([{
          id: todos.length,
          text: text
        }, ...todos]);
      }}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Counter
