import React from "react";
// import clothigHero from '../imagens/clothigHero.png'

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto m-2">
      <div className="max-h-[500px] relative m-1 ">
        {/* Overlay */}
        <div className="rounded-xl absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Descubra o <span className="text-rose-300">Poder</span> dos
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-rose-300">Melhores</span> Looks
          </h1>
        </div>
        <img
          className="rounded-xl w-full max-h-[500px] object-cover"
          src="https://img.freepik.com/fotos-gratis/rack-de-roupas-na-loja_23-2148929537.jpg?w=740&t=st=1688945265~exp=1688945865~hmac=ad6d58ecd719349a6b54bfd8b324b0ba0435b1a716885b269032b3de9616c36f"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
