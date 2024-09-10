import React from 'react';
import { useDeviceType } from '../utils/DevicesTypes';

const Header: React.FC = () => {
  const { isMobile } = useDeviceType();

  return (
    <header className={`text-center text-white py-1 ${isMobile ? 'mt-7 px-4' : 'mt-16 px-0'}`}>
      <h1 className={`text-custom-blue font-bold ${isMobile ? 'text-2xl' : 'text-6xl'}`}>
        SEGREDOS
      </h1>
      <h1 className={`font-bold ${isMobile ? 'text-4xl' : 'text-9xl'}`}>
        DO IN$TAGRAM
      </h1>
      <h1 className={`mt-1 mb-2 ${isMobile ? 'text-2xl' : 'text-6xl'}`}>
        PARA
        <span className="text-custom-green"> VIRALIZAR </span>
        &
        <span className="text-custom-green"> VENDER </span>
      </h1>
      <h3 className={`font-bold ${isMobile ? 'text-1xl' : 'text-2xl'} leading-relaxed ${!isMobile ? 'max-w-4xl mx-auto' : ''}`}>
        <span className="text-red-700">VIRALIZE</span>
        {' NO '}
        <span className="text-red-700">INSTAGRAM</span>
        {' SEM '}
        <span className="text-red-700">GASTAR</span>
        {' COM '}
        <span className="text-red-700">ANÚNCIOS</span>
        :
      <h3>O GUIA DEFINITIVO COM ESTRATÉGIAS SECRETAS QUE INFLUENCIADORES DE SUCESSO ESTÃO USANDO AGORA!</h3>
      </h3>
    </header>
  );
}

export default Header;
