import {
  init,
  captureException,
  captureMessage,
  Severity,
} from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

init({
  // dsn: process.env.NODE_ENV === "production" ? process.env.REACT_APP_SENTRY_DSN : undefined,
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  environment: process.env.REACT_APP_ENV,
});

const logger = {
  exception(error: Error) {
    captureException(error);
  },
  fatal(message: string) {
    captureMessage(message, Severity.Fatal);
  },
  error(message: string) {
    captureMessage(message, Severity.Error);
  },
};

export default logger;
