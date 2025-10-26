import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  // Google Forms configuration
  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/0/d/1g9JmwFiXOXLZzgjR_vRpso7MqlrzjZQn-CsE03UgCfU/formResponse';
  const ENTRY_NAME = 'entry.2045685767';
  const ENTRY_EMAIL = 'entry.6501631';
  const ENTRY_SERVICE = 'entry.1151847534';
  const ENTRY_BUDGET = 'entry.1194604648';
  const ENTRY_MESSAGE = 'entry.2007318848';

  // Map service values to Google Form option labels
  const mapService = (value: string) => {
    const map: Record<string, string> = {
      'web': 'Web Development',
      'app': 'App Development',
      'design': 'Graphic Design',
      'ai': 'AI Chatbot Integration',
      'seo': 'SEO',
      'teaching': 'Coding Lessons',
      'business': 'Business Development'
    };
    return map[value] || '';
  };

  // Map budget values to Google Form option labels
  const mapBudget = (value: string) => {
    const map: Record<string, string> = {
      '1-10': '$1 - $10',
      '10-100': '$10 - $100',
      '100-1000': '$100 - $1000',
      '1000-5000': '$1,000 - $5,000',
      '5000-10000': '$5,000 - $10,000',
      '10000+': '$10,000 +'
    };
    return map[value] || '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (submitting) return;
    setSubmitting(true);

    // Submit to Google Forms
    try {
      const formDataPayload = new FormData();
      formDataPayload.append(ENTRY_NAME, formData.name);
      formDataPayload.append(ENTRY_EMAIL, formData.email);
      formDataPayload.append(ENTRY_SERVICE, mapService(formData.service));
      formDataPayload.append(ENTRY_BUDGET, mapBudget(formData.budget));
      formDataPayload.append(ENTRY_MESSAGE, formData.message);

      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataPayload
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest.I'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: '',
      email: '',
      service: '',
      budget: '',
      message: ''
    });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Get in touch and let's create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">
                      <a href="mailto:rupaltechhub@gmail.com" className="underline underline-offset-4 hover:text-primary">
                        rupaltechhub@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-muted-foreground">
                      <a href="tel:+923705158694" className="underline underline-offset-4 hover:text-primary">
                        +923705158694
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-muted-foreground">Islamabad Pakistan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Why Choose Me?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>7 core areas of expertise for comprehensive solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Fast delivery with attention to detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Transparent communication throughout</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="app">App Development</SelectItem>
                    <SelectItem value="design">Graphic Design</SelectItem>
                    <SelectItem value="ai">AI Chatbot Integration</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="teaching">Coding Lessons</SelectItem>
                    <SelectItem value="business">Business Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">$1 - $10</SelectItem>
                    <SelectItem value="10-100">$10 - $100</SelectItem>
                    <SelectItem value="100-1000">$100 - $1000</SelectItem>
                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000+">$10,000 +</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 min-h-32"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 glow-primary" size="lg" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
