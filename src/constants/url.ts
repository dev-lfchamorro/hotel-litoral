import { whatsAppNumber } from "./static-values";

export const whatsAppLink = () => {
  const baseUrl = "https://api.whatsapp.com/send?";
  const phone = whatsAppNumber;
  const text = "Olá! Eu gostaria de solicitar uma reserva.";

  return `${baseUrl}phone=${phone}&text=${text}`;
};
