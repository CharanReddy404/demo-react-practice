import React from "react";
import ReactDOM from "react-dom/client";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function App() {
    return <input placeholder="hi there" />;
}

root.render(<App />);