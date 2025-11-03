import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Bot, TrendingUp, GraduationCap, Briefcase, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Website Development Services',
    description: 'Responsive, SEO-friendly website development using modern tools like React, Next.js, and TypeScript.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile app development using industry-standard app development software and languages with seamless UX.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Palette,
    title: 'Graphic Designing Services',
    description: 'Branding, UI graphics, and marketing assets. Professional graphic design services in Pakistan and worldwide.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    description: 'AI chatbot development services and integrations to automate support, lead capture, and customer engagement.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization Services',
    description: 'On-page, technical, and content SEO optimization to improve rankings, visibility, and conversions.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: GraduationCap,
    title: 'Web & App Dev Courses',
    description: 'Website development course and app development roadmap. Mentorship, training, and career guidance.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Briefcase,
    title: 'Business Development Services',
    description: 'Business development services (BDS): proposals, strategy, and growth playbooks for sustainable digital businesses.',
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
    const to = 'rupaltechhub@gmail.com';
    const subject = `Project Inquiry: ${service}`;
    const body = `Hello,

I would like to order the following service: ${service}.

Project details:
- Brief description:
- Timeline:
- Budget:

Please let me know the next steps.

Thanks!`;

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
