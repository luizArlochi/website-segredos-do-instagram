import React from 'react';

const Feedback: React.FC = () => {

  return (
    <div>
      <div className="bg-gradient-green text-white text-center h-28 flex items-center justify-center">
        <p className="text-4xl md:text-5xl font-bold">FEEDBACK DOS ALUNOS:</p>
      </div>
    <div className="py-8 flex justify-center">
      <img className="rounded-2xl" src="src/assets/feedback-image.png" alt="Feedback" />
    </div>
    </div>
  );
}

export default Feedback;
