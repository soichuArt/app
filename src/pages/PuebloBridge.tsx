import React, { useState } from 'react';
import { supabase } from '../lib/supabase'; // Ajusta la ruta si tu archivo es distinto

const PuebloBridge = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.from('pueblo_keys').insert([{ name, email }]);
    
    setLoading(false);
    if (error) {
      setError('Something went wrong. Please try again.');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-soichu-50 to-white px-4">
      <div className="max-w-md w-full text-center mb-10">
        {/* Headline & Intro Text */}
        <h1 className="text-3xl font-bold mb-4 text-soichu-600">
          Before you enter... take a breath.
        </h1>
        <p className="mb-2 text-lg">
          This is a <span className="font-bold text-soichu-600">SAFE</span> space for presence, connection, and truth.
        </p>
        <p className="mb-8 text-gray-500">
          Pueblo is not a typical forum — it’s a living community.<br />
          A gentle place where seekers gather, not to scroll, but to arrive.<br /><br />
          If you feel the call to join, simply create your key below.<br />
          It’s free — and it helps us protect the sacred rhythm of this circle.
        </p>

        {/* CTA Button */}
        {!showForm && !submitted && (
          <button
            className="w-full py-3 bg-soichu-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-soichu-700 transition"
            onClick={() => setShowForm(true)}
          >
            Enter Pueblo
          </button>
        )}

        {/* Formulario */}
        {showForm && !submitted && (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-soichu-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-soichu-700 transition"
            >
              {loading ? 'Sending...' : 'Create my key'}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </form>
        )}

        {/* Subcopy */}
        <p className="mt-8 text-xs text-gray-400">
          Your details won’t be shared. This is just between us.
        </p>

        {/* Mensaje de éxito y botón final */}
        {submitted && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-soichu-600 mb-2">
              Welcome ✨
            </h2>
            <p className="mb-6 text-gray-600">
              Your key has been created.<br />
              You’re now ready to join Pueblo.
            </p>
            <button
              className="w-full py-3 bg-soichu-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-soichu-700 transition"
              onClick={() => window.location.href = '/pueblo/community'} // Cambia a la ruta real de tu comunidad
            >
              Join the Gathering
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PuebloBridge;
