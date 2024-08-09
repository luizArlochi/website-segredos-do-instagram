import React from 'react';

const Trail: React.FC = () => {
  return (
    <section className="">
      <div className="bg-gradient-green text-white text-center h-28 flex items-center justify-center">
        <p className="text-4xl md:text-5xl font-bold">Grupo de networking disponível no final do E-book</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-10 text-white text-4xl md:text-5xl font-bold text-center mb-4">
          Cresça seu Instagram com o melhor guia estratégico do mercado! 📈
        </h1>
        <img
          src="src/assets/trail-image-removebg-preview.png"
          alt="Trilha do Produto"
          className="w-[800px] h-[800px] rounded-lg"
        />
      </div>
    </section>
  );
}

export default Trail;
