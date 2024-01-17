import "./App.css";
import Encrypt from "./Modules/Encrypt";
import { useState } from "react";

function App() {
  const body: {
    sha: number;
    text: string;
  } = {
    sha: 0,
    text: "",
  };

  const [bodyState, setBodyState] = useState(body);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = document.getElementById("text") as HTMLInputElement;
    const sha = document.getElementById("sha") as HTMLSelectElement;
    setBodyState({
      sha: Number(sha.value),
      text: text.value,
    });
  }

  return (
    <div>
      <section className="layout">
        <div className="header">SHA Encryptor Project by @Franciscovmag</div>
        <div className="main">
          <form onSubmit={handleSubmit} id="form">
            <input type="text" id="text" placeholder="Text to encrypt" />
            <label htmlFor="sha">Algorithm SHA:</label>
            <select id="sha">
              <option value="1">SHA-1</option>
              <option value="3">SHA-3</option>
              <option value="224">SHA-224</option>
              <option value="256">SHA-256</option>
              <option value="384">SHA-384</option>
              <option value="512">SHA-512</option>
            </select>
            <button type="submit" id="btn">
              Encrypt
            </button>
          </form>
        </div>
        <div className="result">
          <Encrypt sha={bodyState.sha} text={bodyState.text} />
        </div>
      </section>
    </div>
  );
}

export default App;
