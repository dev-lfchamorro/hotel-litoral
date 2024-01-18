import React, { Suspense } from "react";
import AppRouter from "./navigation/AppRouter";
import "./App.scss";

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
