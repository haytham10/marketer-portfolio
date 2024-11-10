import React from 'react';

const stats = [
  { 
    number: "500%", 
    text: "Average Growth Rate",
    description: "Year-over-year follower growth"
  },
  { 
    number: "1M+", 
    text: "Followers Generated",
    description: "Across multiple platforms"
  },
  { 
    number: "50+", 
    text: "Success Stories",
    description: "Happy clients worldwide"
  }
];

export default function Stats() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-50"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium">The Numbers Speak</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">Impact & Results</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-105 transition-transform">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.text}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}