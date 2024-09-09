import React from 'react';
import { useDeviceType } from '@/utils/DevicesTypes';
import ChessImg from "../assets/chess-img.png";
import EyeImg from "../assets/eye-img.png";
import BrainImg from "../assets/brain-img.png";
import ClickImg from "../assets/click-img.png";

const Trail: React.FC = () => {
  const { isMobile } = useDeviceType();

  const trailItems = [
    { image: ChessImg, text: 'ESTRATÉGIAS DE CONTEÚDO VENCEDORA' },
    { image: EyeImg, text: 'IDENTIDADE VISUAL DA MARCA IMPACTANTE' },
    { image: BrainImg, text: 'COMPREENSÃO DO ALGORITMO DO INSTAGRAM' },
    { image: ClickImg, text: 'ESTRATÉGIAS AVANÇADAS DE CRESCIMENTO' },
  ];

  return (
    <section className="py-8 px-4">
      <div className="bg-gradient-green text-white text-center h-28 flex items-center justify-center">
        <p className="text-4xl md:text-5xl font-bold">Grupo de networking disponível no final do E-book</p>
      </div>

      <div className="mt-16">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          ACOMPANHAMENTO SEMANAL PARA
          <span className="text-red-700">
            QUALQUER DÚVIDA!
          </span> 📈
        </h1>
        <h2 className="text-3xl text-white mb-8">
          Estamos aqui para
          <span className="text-red-700">
            garantir
          </span>
            que
          <span className="text-red-700">
            </span>
              tenha o
            <span className="font-bold">
              entendimento total do Instagram.
            </span>
          </h2>

        <div className="w-full h-2 bg-[#133D5E] mb-4 rounded-full" />

        <div className="flex flex-col space-y-4">
          {trailItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${isMobile ? 'flex-wrap' : 'flex-row'} items-center p-4`}
            >
              <img
                src={item.image}
                alt={`Trail ${index + 1}`}
                className={`w-full ${isMobile ? 'w-36' : 'w-80'} h-auto ${isMobile ? 'max-w-[300px]' : 'md:w-80'} h-auto object-cover rounded-lg`}
              />
              <p className={`mt-4 ${isMobile ? 'text-center text-xs font-bold ml-10' : 'md:text-left md:ml-8'} text-xl md:text-3xl text-gray-200`}>
                {item.text}
              </p>
              {index < trailItems.length - 1 && (
                <div className="absolute bottom-[-10px] left-0 w-full h-2 bg-[#133D5E] rounded-full" />
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-2 bg-[#133D5E] mt-4 rounded-full" />
      </div>
    </section>
  );
}

export default Trail;
