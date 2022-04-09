import { useCallback } from "react";
import "./App.css";
import logger from "./logger";

const App: React.VFC = () => {
  const onError = useCallback(() => {
    try {
      throw new Error("an error ocurred by clicking break the world");
    } catch (e) {
      if (e instanceof Error) {
        logger.exception(e);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">React sentry sample</header>
      <div>
        <button onClick={onError}>Break the world</button>
      </div>
    </div>
  );
};

export default App;
