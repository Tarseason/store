import React from 'react';
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import {FiPhoneCall, FiMapPin} from 'react-icons/fi'


const Contact = () => {

  const phoneNumber = '5565981645969';
  const message = 'O James Eu quero um salada de Fruta!';

  // Formate o número de telefone e a mensagem, se necessário
  const formattedPhoneNumber = phoneNumber.replace('+', '').replace(/ /g, '');
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-2xl text-center'>
        Informações de Contato
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-6'>
          <a href={whatsappLink} target='blanc'>
            <div className='bg-rose-100 rounded-lg p-4 flex justify-evenly items-center'>
              <AiOutlineWhatsApp size={25} color='green'/>
              <h2 className='font-bold sm:text-xl' >WhatsApp</h2>
            </div>
          </a>

          <div className='bg-rose-100 rounded-lg p-4 flex justify-evenly items-center'>
            <AiOutlineInstagram size={25} color='#DD2A7B'/>
            <a className='font-bold sm:text-xl' href='
            https://www.instagram.com/rosyfashionoficial/'
            target='blanc'
            >Instagram</a>
          </div>

          <div className='bg-rose-100 rounded-lg p-4 flex justify-evenly items-center'>
            <FiPhoneCall size={25} color='#515BD4'/>
            <h2 className='font-bold sm:text-xl'>Contato</h2>
          </div>
          
          <div className='bg-rose-100 rounded-lg p-4 flex justify-evenly items-center'>
            <FiMapPin size={25} color='red'/>
            <a className='font-bold sm:text-xl' href='https://goo.gl/maps/Yv9atkMJ56tXxwSz5' target='blanc'>Localização</a>
          </div>
      </div>
      
      
    </div>
  );
};

export default Contact;
