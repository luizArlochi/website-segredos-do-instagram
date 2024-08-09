import React from 'react';

const GiftBox: React.FC = () => {
  return (
    <section className="py-8">
        <h1 className="mt-10 text-white text-4xl md:text-4xl font-bold text-center mb-4">
          São 10 capítulos que farão você dominar o Instagram sem investir em trafego pago! 🚀
        </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <img
          src="src/assets/giftbox-image-removebg-preview.png"
          alt="Imagem 1"
          className="w-[800px] h-[800px] rounded-lg"
        />
        <img
          src="src/assets/tag-image-removebg-preview.png"
          alt="Imagem 2"
          className="w-[800px] h-[800px] rounded-lg"
        />
      </div>
    </section>
  );
}

export default GiftBox;
