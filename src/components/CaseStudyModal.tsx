import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface Metric {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface CaseStudy {
  title: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: Metric[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface Props {
  study: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal = ({ study, onClose }: Props) => {
  if (!study) return null;

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Handle click outside modal
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in-up shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10 bg-black/20 text-white hover:text-white/90 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_60%)]" />
            <div className="absolute w-full h-full opacity-30">
              <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/4 top-1/4 animate-pulse" width="404" height="404" fill="none">
                <defs>
                  <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-white/20" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
              </svg>
              <svg className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/3 animate-pulse-slow" width="404" height="404" fill="none">
                <defs>
                  <pattern id="85737c0e-0916-41d7-917f-596dc7edfa28" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" className="text-white/10" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
              </svg>
            </div>
          </div>
          <div className="relative px-8">
            <div className="text-indigo-200 font-medium mb-3">{study.category}</div>
            <h2 id="modal-title" className="text-4xl font-bold text-white mb-4">{study.title}</h2>
            <div className="w-16 h-1 bg-indigo-300 rounded-full" />
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {study.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-indigo-600 bg-indigo-50 p-2 rounded-lg">
                    {metric.icon}
                  </div>
                  <h3 className="font-medium text-gray-600">{metric.label}</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-indigo-900">Our Solution</h3>
              <p className="text-indigo-700/80 leading-relaxed">{study.solution}</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-green-900">The Results</h3>
              <p className="text-green-700/80 leading-relaxed">{study.results}</p>
            </div>

            {study.testimonial && (
              <blockquote className="bg-purple-50 p-8 rounded-xl relative">
                <div className="absolute top-4 right-4 text-purple-200">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg italic text-purple-700 mb-4 relative z-10">{study.testimonial.quote}</p>
                <footer className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-purple-700 font-bold text-lg">
                      {study.testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <strong className="text-purple-900 block">{study.testimonial.author}</strong>
                    <span className="text-purple-600">{study.testimonial.role}</span>
                  </div>
                </footer>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CaseStudyModal);