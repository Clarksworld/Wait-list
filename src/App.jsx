import React, { useState, useEffect } from "react";

export default function WaitlistPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set launch date here
  const launchDate = new Date("2025-07-01T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#13476B] text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Launching Soon</h1>
      <p className="text-lg mb-8 text-center max-w-xl">Join our waitlist to be among the first to know when we launch. We’ll notify you via email and SMS!</p>

      <div className="flex gap-4 mb-10">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-3xl font-semibold bg-white text-[#13476B] px-4 py-2 rounded-xl shadow-md">{value}</div>
            <div className="text-sm mt-1 capitalize">{unit}</div>
          </div>
        ))}
      </div>

      <form className="bg-white text-black rounded-2xl p-6 w-full max-w-md shadow-lg">
        <div className="mb-4">
          <label className="block mb-2 font-medium">Name</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13476B]" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13476B]" placeholder="you@example.com" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium">Phone Number</label>
          <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13476B]" placeholder="e.g. +1234567890" />
        </div>
        <button type="submit" className="w-full bg-[#13476B] text-white font-semibold py-2 rounded-lg hover:bg-black transition-colors">Join Waitlist</button>
      </form>
    </div>
  );
}

