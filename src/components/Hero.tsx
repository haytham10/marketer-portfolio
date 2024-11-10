import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80"
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-indigo-900/90 to-black/90 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-yellow-400 w-5 h-5" />
            <span className="text-yellow-400 text-lg font-medium">Elevate Your Social Presence</span>
            <Sparkles className="text-yellow-400 w-5 h-5" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            I'm Haytham
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-indigo-200 mb-8 font-light">
            Your Strategic Partner in Social Media Dominance
          </p>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming brands into social media powerhouses through data-driven strategies, compelling storytelling, and proven growth techniques.
          </p>
          <button className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto">
            Transform Your Brand
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </header>
  );
}