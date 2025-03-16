import React, { Suspense } from "react";
import "./App.scss";
import FixedContent from "./components/FixedContent";
import AppRouter from "./navigation/AppRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense>
        {/* <FixedContent>
          <a
            className="whatsapp-fixed"
            href={whatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconWhatsApp} alt="Whatsapp" loading="lazy" />
          </a>
        </FixedContent> */}

        <FixedContent>
          <span
            style={{
              color: "#fff",
              padding: "10px",
              backgroundColor: "#ffa37b",
              borderRadius: "5px",
              display: "inline-block",
              marginLeft: "10px",
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
