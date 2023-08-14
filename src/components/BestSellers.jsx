import ShowProducts from './ShowProduct.jsx';

const BestSeller = () => {
  return (
    <div>
      <div className="max-w-[1640px] mx-auto m-2 p-1">
        <div className='rounded-xl w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <div className="rounded-xl max-h-[500px] relative">
            {/* Overlay */}
            <div className="rounded-xl absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                Rosy <span className="text-rose-300">Fashion</span> com os
              </h1>
              <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                {" "}
                <span className="text-rose-300">Melhores</span> Looks
              </h1>
            </div>
            <img
              className="rounded-xl w-full max-h-[500px] object-cover"
              src="https://img.freepik.com/fotos-gratis/retrato-de-menina-de-boina-vermelha-assobiando-e-segurando-o-pacote-no-fundo-rosa-com-cabides-com-vestidos_197531-17611.jpg?w=740&t=st=1688944706~exp=1688945306~hmac=ec3367cbda904e70476705f0cebda8565b92af908b2098c5724a1c2636c35ee2"
              alt="/"
            />
          </div>
        </div>
    </div>
    <div className='max-w-[1640px] m-auto px-4 py-12'>
    <h1 className='text-rose-600 mb-6 font-bold text-4xl text-center'>
      As Tendências Mais Quentes!
      </h1>
      <ShowProducts />
      </div>
    </div>
  )
};

export default BestSeller;
