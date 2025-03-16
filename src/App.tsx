import React, { Suspense } from "react";
import "./App.scss";
import FixedContent from "./components/FixedContent";
import AppRouter from "./navigation/AppRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense>
        <FixedContent>
          <span
            style={{
              color: "rgb(255, 255, 255)",
              padding: 10,
              backgroundColor: "rgb(255, 163, 123)",
              borderRadius: 5,
              display: "inline-block",
              marginLeft: 10,
            }}
          >
            NÃO UTILIZEM O ZAP <b>+55 79 99988.2442</b> (ESTÁ CLONADO)
          </span>
        </FixedContent>

        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
