import ShowProducts from "./ShowProduct"

const Accessories = () => {
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Rosy <span className="text-rose-300">Fashion</span> com os
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-rose-300">Melhores</span> Acessorios
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://img.freepik.com/fotos-gratis/kit-de-carreira-modelo-natureza-morta-vista-superior_23-2150217973.jpg?w=740&t=st=1688944844~exp=1688945444~hmac=dbafdcec04489e5830e50b3b4fdf99e06e7cd7ffa21afcbdc8693b5ade54c2ca.jpeg"
          alt="/"
        />
      </div>
    </div>
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-rose-600 mb-6 font-bold text-4xl text-center'>
      O Detalhe que Faz a Diferença
      </h1>
      <ShowProducts />
      </div>
    </div>
  )
}

export default Accessories