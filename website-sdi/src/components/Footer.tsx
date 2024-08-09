import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center mb-28">
            <div className="bg-gradient-green text-white text-center h-28 flex items-center justify-center">
      <p className="text-white text-4xl md:text-5xl font-bold">
        AFILIE-SE CLICANDO{' '}
        <a
          href="https://link-afiliado.com"
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
