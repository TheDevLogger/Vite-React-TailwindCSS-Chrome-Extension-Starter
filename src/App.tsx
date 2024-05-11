import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Example of using the Chrome Extension API
  const onClick = async () => {
    chrome.tabs.create({ url: "https://www.google.com" });
  };

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            }
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-lg font-bold">Vite + React + Tailwind CSS</h1>
      <div className="pt-5">
        <button onClick={onClick}>Go to Google</button>
        <p className="pt-5">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
