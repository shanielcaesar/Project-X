import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>First React App Installation</h1>
      <h3>What is React?</h3>
      <p>
        React is a JavaScript-based UI development library. Although React is a
        library rather than a language, it is widely used in web development.{" "}
        <br />
        The library first appeared in May 2013 and is now one of the most
        commonly used frontend libraries for web development. <br />
        React is the library for web and native user interfaces. Build user
        interfaces out of individual pieces called components written in
        JavaScript.
      </p>
      <p>
        &emsp;1. Aljunito Tobis <br />
        &emsp;2. Shaniel Concepcion
      </p>
    </div>
  );
}

export default App;
