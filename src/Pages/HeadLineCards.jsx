import React from 'react';
import {Link} from 'react-router-dom'

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mt-4 mb-10">
    <div className="max-h-[500px] m-1">
    <div className='rounded-xl w-full mb-10 text-gray-200 bg-rose-50 flex-col justify-center shadow-lg shadow-black-500/40 md:shadow-xl md:shadow-black/20'>

    <div className='max-w-[1640px] mx- p-4 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative shadow-lg shadow-black-500/40 md:shadow-xl md:shadow-black/20'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Best-Sellers</p>
          <p className='px-2'>As Tendências Mais Quentes!</p>
          <Link to="/maisvendidos">
          <button className='border-rose-200 bg-rose-100 text-black mx-2 absolute bottom-4'>Ver Agora</button>
          </Link>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/fotos-gratis/retrato-de-menina-de-boina-vermelha-assobiando-e-segurando-o-pacote-no-fundo-rosa-com-cabides-com-vestidos_197531-17611.jpg?w=740&t=st=1688944706~exp=1688945306~hmac=ec3367cbda904e70476705f0cebda8565b92af908b2098c5724a1c2636c35ee2'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative shadow-lg shadow-black-500/40 md:shadow-xl md:shadow-black/20'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Novidades</p>
          <p className='px-2'>Os Mais Novos Looks</p>
          <Link to="/novidades">
          <button className='border-rose-200 bg-rose-100 text-black mx-2 absolute bottom-4'>Ver Agora</button>
          </Link>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/fotos-gratis/retrato-de-modelo-feminino-chocado-cobrindo-a-boca-com-a-mao-olhando-com-os-olhos-esbugalhados-esquecendo-se-de-passar-a-roupa-vestida-para-reuniao-de-negocios-pessoas-choque-grande-surpresa_273609-227.jpg?w=360'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative shadow-lg shadow-black-500/40 md:shadow-xl md:shadow-black/20'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Acessórios</p>
          <p className='px-2'>Adquira os Detalhes Perfeitos</p>
          <Link to="/acessorios">
          <button className='border-rose-200 bg-rose-100 text-black mx-2 absolute bottom-4'>Ver Agora</button>
          </Link>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/fotos-gratis/kit-de-carreira-modelo-natureza-morta-vista-superior_23-2150217973.jpg?w=740&t=st=1688944844~exp=1688945444~hmac=dbafdcec04489e5830e50b3b4fdf99e06e7cd7ffa21afcbdc8693b5ade54c2ca.jpeg'
          alt='/'
        />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default HeadlineCards;
