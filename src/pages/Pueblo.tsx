import React from 'react';

const Pueblo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-soichu-600">
          Welcome to Pueblo
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          This is where the gathering happens.<br />
          Connect, share, and be present with fellow seekers.<br />
          Thank you for honoring the rhythm of this space.
        </p>
        {/* Aquí puedes renderizar los componentes de la comunidad, como hilos, posts, etc. */}
      </div>
    </div>
  );
};

export default Pueblo;
