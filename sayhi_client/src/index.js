import React from "react";
import ReactDom from "react-dom";
import  { AppProvider } from "./Components/MainModelContext";

import App from "./App";

ReactDom.render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.querySelector('#root')
);
