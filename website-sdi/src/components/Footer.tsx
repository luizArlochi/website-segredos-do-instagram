import React from 'react';
import PriceBox from "../assets/price-box-img.png"

const Footer: React.FC = () => {
  return (
    <footer className="text-center mb-28">
      <div className="flex flex-col items-center">
        <img
          src={PriceBox}
          alt="Price Box"
          className=" w-[270px] h-auto mb-5"
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
