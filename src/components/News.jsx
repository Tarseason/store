import ShowProducts from "./ShowProduct"

const News = () => {
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
            <span className="text-rose-300">Melhores</span> Looks
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://img.freepik.com/fotos-gratis/retrato-de-modelo-feminino-chocado-cobrindo-a-boca-com-a-mao-olhando-com-os-olhos-esbugalhados-esquecendo-se-de-passar-a-roupa-vestida-para-reuniao-de-negocios-pessoas-choque-grande-surpresa_273609-227.jpg?w=360"
          alt="/"
        />
      </div>
    </div>
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-rose-600 mb-6 font-bold text-4xl text-center'>
      Os Mais Novos Looks
      </h1>
      <ShowProducts />
      </div>
    </div>
  )
}

export default News