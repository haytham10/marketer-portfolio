import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4 animate-pulse">
            <Sparkles className="text-yellow-400 w-6 h-6" />
            <span className="text-yellow-400 text-lg sm:text-xl font-semibold">
              Unleash Your Brand's Potential
            </span>
            <Sparkles className="text-yellow-400 w-6 h-6" />
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 tracking-tight leading-tight">
            Crafting Digital Narratives
          </h1>

          <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-4 sm:mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600"
            />
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-8 font-light">
            Transforming Visions into Vibrant Realities
          </p>

          <p className="text-xl sm:text-2xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Join me on a journey to elevate your brand through innovative strategies, captivating content, and a touch of creative magic.
          </p>

          <button className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 flex items-center justify-center gap-3 mx-auto">
            Discover What's Possible
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll hover:bg-white/80 transition-colors duration-300"></div>
        </div>
      </div>
    </header>
  );
}