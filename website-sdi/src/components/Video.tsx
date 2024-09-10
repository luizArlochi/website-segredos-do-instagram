import React from 'react';
import { useDeviceType } from '../utils/DevicesTypes';

const Video: React.FC = () => {
  const { isMobile } = useDeviceType();

  return (
    <section className="flex flex-col justify-center items-center py-8 bg-transparent">
      <div className="w-full max-w-4xl">
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/OuRhzz3TmSk"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`bg-transparent ${isMobile ? 'rounded-2xl p-2 h-[300px]' : 'rounded-xl'}`}
        ></iframe>
      </div>

      <p className="text-white text-2xl md:text-3xl font-bold text-center mt-16">
        E-BOOK QUE OS SOCIAIS MIDIA ESCONDEM DE VOCÊ. 🤫
      </p>

      <button className="mt-16 px-10 py-7 bg-red-600 text-white text-xl font-semibold rounded-[50px] shadow-md hover:bg-red-700 transition duration-300">
        <a href="https://pay.kiwify.com.br/C0U7dd6">
        EU QUERO MEU GUIA!
        </a>
      </button>
    </section>
  );
}

export default Video;
