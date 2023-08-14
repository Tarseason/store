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
    <div className='max-w-[1640px] max-h-[250px] bg-rose-50'>
    <div className='max-h-[400px] mb-0 '>
      <div className=' m-auto px-2'>
      <h1 className='text-black font-bold text-2xl text-center py-4'>
        Informações de Contato
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pb-2'>
          <a href={whatsappLink} target='blanc'>
            <div className='bg-rose-200 rounded-lg p-4 flex justify-evenly items-center h-18 shadow-lg shadow-black-500/40'>
              <AiOutlineWhatsApp size={20} color='green'/>
              <h2 className='font-bold sm:text-xl' >WhatsApp</h2>
            </div>
          </a>

          <a className='font-bold sm:text-xl' href='
            https://www.instagram.com/rosyfashionoficial/'
            target='blanc'
            >
          <div className='bg-rose-200 rounded-lg p-4 flex justify-evenly items-center shadow-lg shadow-black-500/40'>
            <AiOutlineInstagram size={20} color='#DD2A7B'/>
            Instagram
          </div>
          </a>

          <div className='bg-rose-200 rounded-lg p-4 flex justify-evenly items-center shadow-lg shadow-black-500/40'>
            <FiPhoneCall size={20} color='#515BD4'/>
            <h2 className='font-bold sm:text-xl'>Contato</h2>
          </div>
          
          <a className='font-bold sm:text-xl' href='https://goo.gl/maps/Yv9atkMJ56tXxwSz5' target='blanc'>
            <div className='bg-rose-200 rounded-lg p-4 flex justify-evenly items-center shadow-lg shadow-black-500/40'>
              <FiMapPin size={20} color='red'/>
              Localização
            </div>
          </a>
          
      </div>
    </div>
      </div>
    </div>
  );
};

export default Contact;
