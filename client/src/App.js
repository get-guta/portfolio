import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setName(data));

  }, []);
  return (
    <div className="App">
      <header className="App-header">

        <p>{name.name}</p>
      </header>
    </div>
  );
}

export default App;
