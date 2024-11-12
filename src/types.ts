export interface PreviewMetric {
  icon: JSX.Element;
  text: string;
}

export interface DetailMetric {
  icon: JSX.Element;
  label: string;
  value: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  image: string;
  timeline: string;
  challenge: string;
  solution: string;
  results: string;
  previewMetrics: PreviewMetric[];
  metrics: DetailMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  color?: string;
  logo?: string;  // Add optional logo property
  social?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
	youtube?: string;
	website?: string;
  };
}
