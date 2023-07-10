import React from 'react';
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import {FiPhoneCall, FiMapPin} from 'react-icons/fi'

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-2xl text-center'>
        Informações de Contato
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-6'>
          <div className='bg-rose-100 rounded-lg p-4 flex justify-evenly items-center'>
            <AiOutlineWhatsApp size={25} color='green'/>
            <h2 className='font-bold sm:text-xl'>WhatsApp</h2>
          </div>

          <div className='bg-rose-100 rounded-lg p-4 flex justify-evenly items-center'>
            <AiOutlineInstagram size={25} color='#DD2A7B'/>
            <h2 className='font-bold sm:text-xl'>Instagram</h2>
          </div>

          <div className='bg-rose-100 rounded-lg p-4 flex justify-evenly items-center'>
            <FiPhoneCall size={25} color='#515BD4'/>
            <h2 className='font-bold sm:text-xl'>Contato</h2>
          </div>
          
          <div className='bg-rose-100 rounded-lg p-4 flex justify-evenly items-center'>
            <FiMapPin size={25} color='red'/>
            <h2 className='font-bold sm:text-xl'>Localização</h2>
          </div>
      </div>
      
    </div>
  );
};

export default Category;
