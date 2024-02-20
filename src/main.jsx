import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextStore from "./context/ContextStore.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8fnbbx5d0rd7pqrp.us.auth0.com"
      clientId="oLl6ipGoUx4tut5xYFCl63FQvMuakPV4"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ContextStore>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextStore>
    </Auth0Provider>
  </React.StrictMode>
);
