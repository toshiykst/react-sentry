import { useCallback } from "react";
import "./App.css";
import logger from "./logger";

const App: React.VFC = () => {
  const handleClickOccurError = useCallback(() => {
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
        <button onClick={handleClickOccurError}>Break the world</button>
        {/* @ts-ignore */}
        {/* <button onClick={noExistFunc}>No exist func</button> */}
      </div>
    </div>
  );
};

export default App;
