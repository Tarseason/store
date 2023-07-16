import React from 'react';
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {
  const phoneNumber = '15551234567';
  const message = 'Olá, eu gostaria de fazer uma pergunta';

  // Formate o número de telefone e a mensagem, se necessário
  const formattedPhoneNumber = phoneNumber.replace('+', '').replace(/ /g, '');
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

  return (
    <Link to={whatsappLink} target="_blank">
      Enviar mensagem no WhatsApp
    </Link>
  );
};

export default WhatsAppButton;
