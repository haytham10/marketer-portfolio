import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-8">
            {[
              { icon: <Instagram size={24} />, link: "#" },
              { icon: <Twitter size={24} />, link: "#" },
              { icon: <Linkedin size={24} />, link: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="hover:text-indigo-400 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-center">
            <div className="text-gray-400 mb-2">
              © {new Date().getFullYear()} Haytham
            </div>
            <div className="text-sm text-gray-500">
              Transforming brands through strategic social media growth
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}