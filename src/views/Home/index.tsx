import React from "react";
import Feature from "../../components/Feature";
import ImgCarousel from "../../components/ImgCarousel";
import TextContent from "../../components/TextContent";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { features } from "./constants";
import "./styles.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <Feature features={features} />
      <ImgCarousel />
      <TextContent
        orientation="center"
        size="large"
        title="Hotel Litoral / Desde o 2002"
      >
        Desde o 2002, oferecemos o melhor serviço possível a turistas
        brasileiros e estrangeiros, localizado a apenas 100 metros da praia, com
        excelente qualidade humana e instalações simples, mas muito confortáveis
        ​​e atenciosas; cuidamos para que você se sinta confortável em nosso
        hotel, oferecemos um excelente café da manhã, onde você pode comer
        confortavelmente e começar o dia com a melhor atitude.
      </TextContent>
      <Footer />
    </div>
  );
};

export default Home;
