import { useState } from "react";
import Message from "./Message.jsx";
import Students from "./Students.jsx";
import NumberChecker from "./NumberChecker.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>GROUP ALPHA CLASS ACTIVITY</h1>
        <Message />
        <Students name="Brian" course="bachelor of science in Information technology" year="2025" />
        <Students name="loku" course="bachelor of science in Information technology" year="2025" />
        <Students name="leo" course="bachelor of science in Information technology" year="2025" />
       
      </div>

      <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
        <h2>Interactive GWA</h2>
        <h3>Current Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <button onClick={() => setCount(0)}>reset</button>
        <NumberChecker value={count} />
      </div>
    </>
  );
}

export default App;