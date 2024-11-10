import React, { useState } from 'react';
import { ExternalLink, TrendingUp, Users, Target, BarChart } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const projects = [
  {
    title: "Mindful Moments Yoga",
    category: "Wellness & Yoga Studio",
    metrics: [
      { icon: <TrendingUp className="w-5 h-5" />, text: "312% follower growth in 4 months" },
      { icon: <Users className="w-5 h-5" />, text: "15K+ engaged community" }
    ],
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80",
    color: "from-purple-500/90 to-indigo-500/90",
    fullStudy: {
      challenge: "A local yoga studio struggling to transition to digital presence during post-pandemic shifts, with only 2,000 Instagram followers and low engagement rates.",
      solution: "Implemented a holistic content strategy focusing on mindfulness tips, beginner-friendly yoga sequences, and behind-the-scenes studio content. Created Instagram Reels showing quick yoga flows and meditation techniques.",
      results: "Achieved significant organic growth and community engagement, leading to a 200% increase in class bookings through social media channels.",
      metrics: [
        { icon: <TrendingUp className="w-6 h-6" />, label: "Follower Growth", value: "2,000 → 15,000+" },
        { icon: <Users className="w-6 h-6" />, label: "Engagement Rate", value: "8.5% (Industry avg: 1.5%)" },
        { icon: <Target className="w-6 h-6" />, label: "Click-through Rate", value: "4.2%" },
        { icon: <BarChart className="w-6 h-6" />, label: "Monthly Bookings", value: "+200%" }
      ],
      testimonial: {
        quote: "The strategic approach to our social media transformed our studio's online presence. We're now connecting with our community in ways we never imagined possible.",
        author: "Sarah Mitchell",
        role: "Founder, Mindful Moments Yoga"
      }
    }
  },
  {
    title: "Pure Glow Skincare",
    category: "Natural Beauty Brand",
    metrics: [
      { icon: <TrendingUp className="w-5 h-5" />, text: "280% revenue increase" },
      { icon: <Users className="w-5 h-5" />, text: "25K+ organic followers" }
    ],
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&q=80",
    color: "from-rose-500/90 to-pink-500/90",
    fullStudy: {
      challenge: "A small natural skincare brand struggling to stand out in a crowded market, with limited social media presence and declining direct-to-consumer sales.",
      solution: "Developed an educational content strategy focusing on skin health, ingredient transparency, and user-generated content. Launched influencer partnerships with micro-influencers in the clean beauty space.",
      results: "Established Pure Glow as a trusted voice in natural skincare, leading to significant sales growth and strong community engagement.",
      metrics: [
        { icon: <TrendingUp className="w-6 h-6" />, label: "Revenue Growth", value: "+280% YoY" },
        { icon: <Users className="w-6 h-6" />, label: "Social Following", value: "25,000+" },
        { icon: <Target className="w-6 h-6" />, label: "Conversion Rate", value: "5.8%" },
        { icon: <BarChart className="w-6 h-6" />, label: "Average Order Value", value: "+45%" }
      ],
      testimonial: {
        quote: "The authentic storytelling approach helped us connect with our audience on a deeper level. Our social media presence now truly reflects our brand values.",
        author: "Emma Chen",
        role: "CEO, Pure Glow Skincare"
      }
    }
  },
  {
    title: "Vital Nutrition Co",
    category: "Supplements & Wellness",
    metrics: [
      { icon: <TrendingUp className="w-5 h-5" />, text: "425% engagement increase" },
      { icon: <Users className="w-5 h-5" />, text: "30K+ community members" }
    ],
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80",
    color: "from-green-500/90 to-emerald-500/90",
    fullStudy: {
      challenge: "A supplement startup facing fierce competition and skepticism about product effectiveness, with minimal social proof and low brand trust.",
      solution: "Created a science-backed content strategy highlighting research, expert interviews, and customer success stories. Implemented a comprehensive education program about supplement quality and transparency.",
      results: "Positioned the brand as a trusted authority in wellness supplements, leading to significant community growth and sales increase.",
      metrics: [
        { icon: <TrendingUp className="w-6 h-6" />, label: "Community Growth", value: "30,000+ Members" },
        { icon: <Users className="w-6 h-6" />, label: "Engagement Rate", value: "6.2%" },
        { icon: <Target className="w-6 h-6" />, label: "Customer Retention", value: "78%" },
        { icon: <BarChart className="w-6 h-6" />, label: "Monthly Sales", value: "+320%" }
      ],
      testimonial: {
        quote: "The strategic focus on education and transparency helped us build incredible trust with our community. Our social channels are now our primary source of customer acquisition.",
        author: "Michael Torres",
        role: "Founder, Vital Nutrition Co"
      }
    }
  }
];

export default function Portfolio() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyData | null>(null);

  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-medium">Success Stories</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Featured Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real results for wellness brands through strategic social media growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-90`} />
              </div>
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-auto">
                  <span className="text-white/80 text-sm font-medium">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">{project.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white">
                      {metric.icon}
                      <span className="text-sm">{metric.text}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setSelectedStudy(project.fullStudy)}
                  className="mt-6 flex items-center gap-2 text-white/90 hover:text-white group/btn"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CaseStudyModal 
        study={selectedStudy} 
        onClose={() => setSelectedStudy(null)} 
      />
    </section>
  );
}