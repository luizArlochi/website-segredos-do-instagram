import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center text-white py-8 mt-60">
      <h1 className="text-6xl text-custom-blue">
        SEGREDOS
      </h1>
      <h1 className="text-9xl font-bold">
        DO IN$TAGRAM
      </h1>
      <h2 className="text-6xl font-semibold mt-4">
        PARA <span className="text-custom-green">VIRALIZAR</span> & <span className="text-custom-green">VENDER</span>
      </h2>
    </header>
  );
}

export default Header;
