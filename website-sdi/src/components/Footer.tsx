import React from 'react';
import PriceBox from "../assets/price-box-img.png"

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center mb-28">
      <div className="flex flex-col">
        <img
          src={PriceBox}
          alt="Price Box"
          className=" w-[850px] h-auto mb-1" // Centraliza, define largura e arredonda as bordas
        />
      </div>
            <div className="bg-gradient-green text-white text-center h-28 flex items-center justify-center">
      <p className="text-white text-4xl md:text-5xl font-bold">
        AFILIE-SE CLICANDO{' '}
        <a
          href="https://dashboard.kiwify.com.br/join/affiliate/d6H1REC6"
          className="text-red-700 hover:text-custom-green"
        >
          AQUI
        </a>
      </p>

            </div>
    </footer>
  );
}

export default Footer;
