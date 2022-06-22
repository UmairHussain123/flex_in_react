import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="innerDiv1">
          <p style={{ display: "flex" }}>Box1</p>
        </div>
        <div className="innerDiv2">
          <p>
            This HTML file is a template. If you open it directly in the
            browser, you will see an empty page. You can add webfonts, meta
            tags, or analytics to this file. The build step will place the
            bundled scripts into the tag. To begin the development, run `npm
            start` or `yarn start`. To create a production bundle, use `npm run
            build` or `yarn build`.
          </p>
        </div>
        <div className="innerDiv3">
          <p>Box3</p>
        </div>
        <div className="innerDiv4">
          <p>Box4</p>
        </div>
        <div className="innerDiv5">
          <p>Box5</p>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
