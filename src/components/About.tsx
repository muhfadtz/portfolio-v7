import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
            I'm a backend developer. I really appreciate the opportunity to continue to grow and contribute to the world of technology, My enthusiasm for technology makes me excited to keep learning and keep pushing myself to learn
            </p>
            <p className="text-lg text-gray-600">
            and develop. I'm always looking for innovative and user-experience-focused solutions, and enjoy working in collaborative teams. With dedication and perseverance, I try to make the best contribution in every project I undertake.
            </p>
          </div>
          <div className="relative">
            <img
              src="./profile.png"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;