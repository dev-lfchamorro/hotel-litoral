import React, { Suspense } from "react";
import "./App.scss";
import IconWhatsApp from "./assets/icons/whatsapp-color.svg";
import FixedContent from "./components/FixedContent";
import { whatsAppLink } from "./constants";
import AppRouter from "./navigation/AppRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense>
        <FixedContent>
          <a
            className="whatsapp-fixed"
            href={whatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconWhatsApp} alt="Whatsapp" loading="lazy" />
          </a>
        </FixedContent>

        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
