import { Mail, MessageCircle, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&q=80')] opacity-10"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <span className="text-indigo-400 font-medium">Ready to Transform?</span>
        <h2 className="text-4xl font-bold mt-2 mb-8 text-white">Let's Grow Together</h2>
        <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
          Ready to take your social media presence to the next level? Let's discuss how we can achieve extraordinary results together.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email",
              action: "Send a Message",
              link: "mailto:contact@haytham.com"
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Calendar",
              action: "Book a Meeting",
              link: "#"
            },
            {
              icon: <MessageCircle className="w-6 h-6" />,
              title: "Chat",
              action: "Start a Conversation",
              link: "#"
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-indigo-400 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-indigo-200 group-hover:text-white transition-colors">{item.action}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}