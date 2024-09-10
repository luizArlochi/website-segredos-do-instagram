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
        <button className="gotham-font mt-4 mb-10 px-10 py-7 bg-red-600 text-white text-xl font-semibold rounded-[50px] shadow-md hover:bg-red-700 transition duration-300">
        <a href="https://pay.kiwify.com.br/C0U7dd6">
        EU QUERO MEU GUIA!
        </a>
      </button>
      </div>
      <div className="bg-gradient-green text-white text-center h-28 flex items-center justify-center">
        <p className="text-white text-4xl md:text-5xl font-bold gotham-font">
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
