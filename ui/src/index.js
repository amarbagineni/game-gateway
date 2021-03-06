import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
    <App />,
    document.getElementById("app"),
    () => console.log("App is loaded to DOM")
);
