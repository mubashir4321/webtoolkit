import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Bot, TrendingUp, GraduationCap, Briefcase, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites with modern frameworks like React, Next.js, and TypeScript.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Creating cross-platform mobile applications with seamless user experiences and robust functionality.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Crafting visually stunning designs that capture attention and communicate your brand message effectively.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Bot,
    title: 'AI Chatbot Integration',
    description: 'Implementing intelligent chatbots powered by cutting-edge AI to enhance customer engagement and automate support.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Boosting your online visibility with data-driven SEO strategies that drive organic traffic and conversions.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: GraduationCap,
    title: 'Teaching Coding',
    description: 'Mentoring aspiring developers through personalized coaching and comprehensive programming courses.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Briefcase,
    title: 'Business Development',
    description: 'Strategic freelancing guidance to help you build a sustainable and profitable digital business.',
    gradient: 'from-teal-500 to-cyan-500'
  }
];

const Services = () => {
  const phoneNumber = '923705158694';

  const openWhatsApp = (service: string) => {
    const text = `Hello! I'm interested in ordering: ${service}.\n\nPlease share the next steps, pricing, and any details you need from me.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const openEmail = (service: string) => {
    const to = 'mbsirsakar5@gmail.com';
    const subject = `Project Inquiry: ${service}`;
    const body = `Hello,\n\nI would like to order the following service: ${service}.\n\nProject details:\n- Brief description:\n- Timeline:\n- Budget:\n\nPlease let me know the next steps.\n\nThanks!`;

    // Prefer Gmail web compose
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const opened = window.open(gmailUrl, '_blank');

    // Fallback to mailto if popup blocked or cannot open new tab
    if (!opened) {
      const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Order Actions */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    onClick={() => openWhatsApp(service.title)}
                    className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" /> Order via WhatsApp
                  </Button>
                  <Button
                    onClick={() => openEmail(service.title)}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Mail className="h-4 w-4 mr-2" /> Order via Email
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
