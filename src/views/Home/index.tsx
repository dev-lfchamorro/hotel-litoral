import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { ReactComponent as IconHotel } from "../../assets/icons/hotel.svg";
import "./styles.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="features-container">
        <div className="feature-element">
          <IconHotel className="feature-img" />

          <span className="feature-title">
            Espaço, conforto e tranquilidade
          </span>

          <span className="feature-description">
            Espaço, conforto e tranquilidade que oferecemos aos nossos clientes,
            você pode ter certeza de que no Hotel Litoral você aproveitará ao
            máximo sua estadia em Aracaju.
          </span>
        </div>
        <div className="feature-element">
          <IconHotel className="feature-img" />

          <span className="feature-title">Acomodação</span>

          <span className="feature-description">
            Camas confortáveis, TV, ar condicionado split, secador de cabelo,
            frigobar e WIFI estão à sua disposição.
          </span>
        </div>

        <div className="feature-element">
          <IconHotel className="feature-img" />

          <span className="feature-title">Localização</span>

          <span className="feature-description">
            O Hotel Litoral fica muito perto da orla de Aracaju. Você pode
            chegar à praia em apenas 5 minutos a pé. Além disso, você pode
            aproveitar seu fim de semana curtindo os shows de música ao vivo
            encontrados ao longo da costa.
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
