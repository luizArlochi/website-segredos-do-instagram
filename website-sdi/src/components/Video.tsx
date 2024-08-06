import React from 'react';

const Video: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-8 bg-transparent">
      <div className="w-full max-w-4xl">
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/5xBle1a9dLI"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="bg-transparent"
        ></iframe>
      </div>
    </section>
  );
}

export default Video;
