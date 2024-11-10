import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1665470909901-162912ec16f7?q=80&w=2012&auto=format&fit=crop"
          alt="Background" 
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-indigo-900/90 to-black/90 backdrop-blur-sm animate-gradient" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 sm:px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4 animate-float">
            <Sparkles className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-yellow-400 text-base sm:text-lg font-medium">Elevate Your Social Presence</span>
            <Sparkles className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white animate-gradient-x tracking-tight leading-tight">
            I'm Haytham
          </h1>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 sm:mb-8 animate-width"></div>
          <p className="text-xl sm:text-2xl md:text-3xl text-indigo-200 mb-4 sm:mb-8 font-light animate-fade-in-up delay-200">
            Your Strategic Partner in Social Media Dominance
          </p>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Transforming brands into social media powerhouses through data-driven strategies, compelling storytelling, and proven growth techniques.
          </p>
          <button className="group w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold active:scale-95 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2 mx-auto animate-fade-in-up delay-400">
            Transform Your Brand
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll hover:bg-white/80 transition-colors duration-300"></div>
        </div>
      </div>
    </header>
  );
}