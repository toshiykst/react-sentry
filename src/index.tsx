import React from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

Sentry.init({
  // dsn: process.env.NODE_ENV === "production" ? process.env.REACT_APP_SENTRY_DSN : undefined,
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  environment: process.env.REACT_APP_ENV,
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
