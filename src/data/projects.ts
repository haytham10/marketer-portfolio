import { CaseStudy } from '../types';
import { BarChart, Target, TrendingUp, Users } from 'lucide-react';
import React from 'react';

export const projects: CaseStudy[] = [
  {
    title: "Aylan Yoga School",
    category: "Wellness & Yoga Studio",
    image: "/portfolio/aylan-yoga.jpg",
    color: "from-purple-500/90 to-indigo-500/90",
    timeline: "4 months",
    challenge:
      "A local yoga studio struggling to transition to digital presence during post-pandemic shifts, with only 2,000 Instagram followers and low engagement rates.",
    solution:
      "Implemented a holistic content strategy focusing on mindfulness tips, beginner-friendly yoga sequences, and behind-the-scenes studio content. Created Instagram Reels showing quick yoga flows and meditation techniques.",
    results:
      "Achieved significant organic growth and community engagement, leading to a 200% increase in class bookings through social media channels.",
    logo: "/portfolio/aylan-yoga-logo.jpg",
    social: {
      instagram: "https://www.instagram.com/aylanyogaschool",
      facebook: "https://web.facebook.com/AylanYogaSchool",
    },
    previewMetrics: [
      { icon: React.createElement(TrendingUp, { className: "w-5 h-5" }), text: "312% follower growth in 4 months" },
      { icon: React.createElement(Users, { className: "w-5 h-5" }), text: "15K+ engaged community" }
    ],
    metrics: [
      { icon: React.createElement(TrendingUp, { className: "w-6 h-6" }), label: "Follower Growth", value: "2,000 → 15,000+" },
      { icon: React.createElement(Users, { className: "w-6 h-6" }), label: "Engagement Rate", value: "8.5% (Industry avg: 1.5%)" },
      { icon: React.createElement(Target, { className: "w-6 h-6" }), label: "Click-through Rate", value: "4.2%" },
      { icon: React.createElement(BarChart, { className: "w-6 h-6" }), label: "Monthly Bookings", value: "+200%" },
    ],
    testimonial: {
      quote:
        "The strategic approach to our social media transformed our studio's online presence. We're now connecting with our community in ways we never imagined possible.",
      author: "Aylan Kai",
      role: "Founder, Aylan Yoga School",
    },
  },

  
  //////////////////////////////////////


  {
    title: "SpaDerma",
    category: "Natural Beauty Brand",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-rose-500/90 to-pink-500/90",
    timeline: "1 year",
    challenge:
      "A small natural skincare brand struggling to stand out in a crowded market, with limited social media presence and declining direct-to-consumer sales.",
    solution:
      "Developed an educational content strategy focusing on skin health, ingredient transparency, and user-generated content. Launched influencer partnerships with micro-influencers in the clean beauty space.",
    results:
      "Established Pure Glow as a trusted voice in natural skincare, leading to significant sales growth and strong community engagement.",
	logo: "/portfolio/spaderma-logo.jpg", 
    social: {
      instagram: "https://www.instagram.com/spaderma_medspa/",
      facebook: "https://web.facebook.com/spadermachicago",
	  website: "https://www.spaderma.com/"
    },
    previewMetrics: [
      { icon: React.createElement(TrendingUp, { className: "w-5 h-5" }), text: "280% revenue increase" },
      { icon: React.createElement(Users, { className: "w-5 h-5" }), text: "25K+ organic followers" }
    ],
    metrics: [
      { icon: React.createElement(TrendingUp, { className: "w-6 h-6" }), label: "Revenue Growth", value: "+280% YoY" },
      { icon: React.createElement(Users, { className: "w-6 h-6" }), label: "Social Following", value: "25,000+" },
      { icon: React.createElement(Target, { className: "w-6 h-6" }), label: "Conversion Rate", value: "5.8%" },
      { icon: React.createElement(BarChart, { className: "w-6 h-6" }), label: "Average Order Value", value: "+45%" },
    ],
    testimonial: {
      quote:
        "The authentic storytelling approach helped us connect with our audience on a deeper level. Our social media presence now truly reflects our brand values.",
      author: "Olivia Brandy",
      role: "CEO, SpaDerma",
    },
  },

  ///////////////////////////////////


  {
    title: "Fit With Realfood",
    category: "Supplements & Wellness",
    image: "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-green-500/90 to-emerald-500/90",
    timeline: "6 months",
	logo: "/portfolio/realFood.jpg",
    challenge:
      "A supplement startup facing fierce competition and skepticism about product effectiveness, with minimal social proof and low brand trust.",
    solution:
      "Created a science-backed content strategy highlighting research, expert interviews, and customer success stories. Implemented a comprehensive education program about supplement quality and transparency.",
    results:
      "Positioned the brand as a trusted authority in wellness supplements, leading to significant community growth and sales increase.",
    previewMetrics: [
      { icon: React.createElement(TrendingUp, { className: "w-5 h-5" }), text: "425% engagement increase" },
      { icon: React.createElement(Users, { className: "w-5 h-5" }), text: "30K+ community members" }
    ],
    metrics: [
      { icon: React.createElement(TrendingUp, { className: "w-6 h-6" }), label: "Community Growth", value: "30,000+ Members" },
      { icon: React.createElement(Users, { className: "w-6 h-6" }), label: "Engagement Rate", value: "6.2%" },
      { icon: React.createElement(Target, { className: "w-6 h-6" }), label: "Customer Retention", value: "78%" },
      { icon: React.createElement(BarChart, { className: "w-6 h-6" }), label: "Monthly Sales", value: "+320%" }
    ],
	social:{
		instagram: "https://www.instagram.com/fitwithrealfoodid/",
		twitter: "https://x.com/realfood_id",
		facebook: "https://web.facebook.com/FitWithRealfood"

	},
    testimonial: {
      quote:
        "The strategic focus on education and transparency helped us build incredible trust with our community. Our social channels are now our primary source of customer acquisition.",
      author: "Edwin Pranata",
      role: "Founder, Realfood"
    }
  }
];