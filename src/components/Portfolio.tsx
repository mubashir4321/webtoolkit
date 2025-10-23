import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack online store with payment integration and inventory management',
    tags: ['React', 'Node.js', 'Stripe'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI Assistant App',
    category: 'AI Integration',
    description: 'Intelligent mobile assistant powered by advanced language models',
    tags: ['React Native', 'OpenAI', 'Firebase'],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Brand Identity Suite',
    category: 'Graphic Design',
    description: 'Complete branding package including logos, style guides, and marketing materials',
    tags: ['Figma', 'Illustrator', 'Branding'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Analytics dashboard with real-time data visualization and reporting',
    tags: ['Next.js', 'TypeScript', 'D3.js'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Customer Support Bot',
    category: 'AI Chatbot',
    description: '24/7 automated support system with natural language processing',
    tags: ['Python', 'TensorFlow', 'NLP'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'SEO Campaign',
    category: 'SEO',
    description: 'Complete website optimization resulting in 300% traffic increase',
    tags: ['SEO', 'Analytics', 'Content'],
    gradient: 'from-yellow-500 to-orange-500'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of successful projects that demonstrate expertise and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="mr-2">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
