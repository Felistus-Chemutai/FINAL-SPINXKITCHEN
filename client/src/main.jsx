import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App.jsx";
import AuthContextProvider from "./context/auth/AuthContextProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
