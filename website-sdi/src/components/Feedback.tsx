import React from 'react';
import FeedbackImg from "../assets/feedback-image.png"

const Feedback: React.FC = () => {

  return (
    <div>
      <div className="bg-gradient-green text-white text-center h-28 flex items-center justify-center">
        <p className="text-4xl md:text-5xl font-bold">FEEDBACK DOS ALUNOS:</p>
      </div>
    <div className="py-8 flex justify-center">
      <img className="rounded-[55px] px-3" src={FeedbackImg} alt="Feedback" />
    </div>
    </div>
  );
}

export default Feedback;
