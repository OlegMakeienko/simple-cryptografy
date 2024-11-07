
import './App.css'
import {useState} from "react";
import encryptText from "./utils/encrypt.jsx";
import decryptText from "./utils/decrypt.jsx";

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleEncrypt = () => {
    const encrypted = encryptText(text);
    setResult(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = decryptText(text);
    setResult(decrypted);
  };

  return (
      <>
        <div className="App">
          <h1>Simple Encryption/Decryption Desktop App</h1>
          <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text here"
          />
          <button onClick={handleEncrypt}>Encrypt</button>
          <button onClick={handleDecrypt}>Decrypt</button>
          <div>
            <h2>Result:</h2>
            <p>{result}</p>
          </div>
        </div>
      </>
  )
}

export default App
