import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

// Add error handling for the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = '<div id="root"></div>';
}

try {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Error rendering app:", error);
  document.getElementById("root").innerHTML = `
    <div style="color: white; background: #000; padding: 20px; text-align: center;">
      <h1>Loading Error</h1>
      <p>Please refresh the page</p>
    </div>
  `;
}
