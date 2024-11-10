import React from 'react';
import { TrendingUp, Users, BarChart, Target, Zap, LineChart } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Strategic Growth Planning",
    description: "Custom-tailored strategies that catapult your social media presence to new heights through data-driven decisions"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Cultivation",
    description: "Transform casual followers into passionate brand advocates through authentic engagement and community building"
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Performance Analytics",
    description: "Deep insights and metrics that matter, turning complex data into actionable growth strategies"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Content Excellence",
    description: "Captivating content strategies that resonate with your audience and drive meaningful engagement"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Brand Scaling",
    description: "Accelerate your brand's growth with proven techniques that deliver explosive results"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "ROI Maximization",
    description: "Optimize your social media investment with data-backed campaigns that deliver measurable returns"
  }
];

export default function Services() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-medium">Expert Solutions</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Services That Drive Results</h2>
          <p className="text-indigo-200 mt-4 max-w-2xl mx-auto">
            Comprehensive social media solutions designed to elevate your brand's presence and drive meaningful growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}