import { TrendingUp, Users, Brain, Target, Award, Coffee, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { XIcon } from './Portfolio';

const achievements = [
  { icon: <TrendingUp className="w-6 h-6" />, value: "5+", label: "Years Experience" },
  { icon: <Users className="w-6 h-6" />, value: "30+", label: "Brands Transformed" },
  { icon: <Coffee className="w-6 h-6" />, value: "500K+", label: "Followers Generated" },
];

const expertise = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Strategic Planning",
    description: "Crafting data-driven social media strategies, content plans, and audience growth tactics."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Content Creation",
    description: "Creating compelling stories that resonate with target audiences and drive engagement."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Growth Optimization",
    description: "Utilizing advanced analytics and optimization techniques for sustainable growth."
  }
];

const socialLinks = [
  { icon: <XIcon />, url: "https://x.com/Haytham_mkt", label: "Twitter" },
  { icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/_haytham._/", label: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/haytham-mokhtari-2a4867112/", label: "LinkedIn" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 font-medium text-center block mb-8"
        >
          About Me
        </motion.span>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-extrabold text-white">Haytham Mokhtari</h2>
            <p className="text-2xl text-indigo-200">Driving Digital Growth Through Strategic Innovation</p>
            
            <div className="space-y-6 mt-6">
              <p className="text-indigo-200 text-lg">
                With over 5 years of experience in social media marketing and brand development, I've helped numerous businesses transform their digital presence and achieve exceptional growth.
              </p>
              <p className="text-indigo-200 text-lg">
                My journey began at leading digital agencies, where I developed and executed strategies for global brands. Today, I specialize in helping businesses across various industries build authentic connections with their audiences through strategic storytelling and data-driven optimization.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-2 rounded-full bg-indigo-700/20 hover:bg-indigo-700/30 text-indigo-400 hover:text-indigo-300 transition-all duration-300 shadow-lg"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square w-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500 group mx-auto">
              <img
                src="/portrait.jpg"
                alt="Haytham Mokhtari"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/30 group-hover:bg-indigo-900/10 transition-colors duration-700"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -inset-4 border-4 border-indigo-500 rounded-full opacity-50 group-hover:opacity-30 transition-opacity duration-700"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -inset-8 border-4 border-indigo-500 rounded-full opacity-50 group-hover:opacity-30 transition-opacity duration-700"
              ></motion.div>
            </div>
            
            {/* Achievement Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {achievements.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="bg-indigo-700/20 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-indigo-700/30 transition-colors duration-300 shadow-lg"
                >
                  <div className="text-indigo-400 flex justify-center mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-sm text-indigo-200">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8">My Expertise</h3>
          <div className="grid gap-6 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-indigo-700/20 hover:bg-indigo-700/30 transition-all duration-300 group backdrop-blur-sm shadow-lg"
              >
                <div className="text-indigo-400 p-2 bg-indigo-400/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-indigo-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}