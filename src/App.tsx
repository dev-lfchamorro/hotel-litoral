import React, { Suspense } from "react";
import "./App.scss";
import AppRouter from "./navigation/AppRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense>
        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
