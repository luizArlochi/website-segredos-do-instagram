import React from 'react';
import { useDeviceType } from '../utils/DevicesTypes';

const Header: React.FC = () => {
  const { isMobile } = useDeviceType();

  return (
    <header className={`text-center text-white py-8 ${isMobile ? 'mt-20 px-4' : 'mt-16 px-0'}`}>
      <h1 className={`text-custom-blue ${isMobile ? 'text-4xl' : 'text-6xl'}`}>
        SEGREDOS
      </h1>
      <h1 className={`font-bold ${isMobile ? 'text-6xl' : 'text-9xl'}`}>
        DO IN$TAGRAM
      </h1>
      <h2 className={`font-semibold mt-4 ${isMobile ? 'text-4xl' : 'text-6xl'}`}>
        PARA
        <span className="text-custom-green">
          VIRALIZAR
        </span>
          &
        <span className="text-custom-green">
          VENDER
        </span>
      </h2>
      <h3 className="text-2xl font-bold">
        <span className="text-red-700">
          VIRALIZE
        </span>
        NO
        <span className="text-red-700">INSTAGRAM</span>
        SEM
        <span className="text-red-700">GASTAR</span>
        COM
        <span className="text-red-700">ANÚNCIOS</span>
        :
      </h3>
      <br />
      <h3 className="text-2xl font-bold">O GUIA DEFINITIVO COM ESTRATÉGIAS SECRETAS QUE INFLUENCIADORES DE SUCESSO ESTÃO USANDO AGORA!</h3>
    </header>
  );
}

export default Header;
