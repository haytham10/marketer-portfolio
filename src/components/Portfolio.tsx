import { useState } from 'react';
import { ExternalLink, Instagram, Facebook, Youtube, Globe } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import { projects } from '../data/projects';
import { CaseStudy } from '../types';

export const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Portfolio() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

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
                  {project.previewMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white">
                      {metric.icon}
                      <span className="text-sm">{metric.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.social?.instagram && (
                      <a 
                        href={project.social?.instagram || ''} 
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {project.social?.twitter && (
                      <a 
                        href={project.social?.twitter || ''} 
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="X"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <XIcon />
                      </a>
                    )}
                    {project.social?.facebook && (
                      <a 
                        href={project.social?.facebook || ''} 
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {project.social?.youtube && (
                      <a 
                        href={project.social.youtube}
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="YouTube"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    )}
                    {project.social?.website && (
                      <a 
                        href={project.social.website}
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Website"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedStudy(project)}
                    className="flex items-center gap-2 text-white/90 hover:text-white group/btn"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </section>
  );
}