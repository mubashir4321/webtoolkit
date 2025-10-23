import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dealGuruImg from '@/assets/web projects/dealguru.png';
import mazenoImg from '@/assets/web projects/mazeno adventures.png';
import rupalImg from '@/assets/web projects/rupal adventures.png';
import urbanAdcheckImg from '@/assets/web projects/urban-adcheck.png';
import zoomCarImg from '@/assets/app projects/zoom car.png';
import rememberyImg from '@/assets/app projects/Remembery.png';
import bdThumb from '@/assets/bd projects/bd thumnail.png';
import bd1 from '@/assets/bd projects/bd project 1.png';
import bd3 from '@/assets/bd projects/bd project 3.png';
import bd2b from '@/assets/bd projects/bd project2.png';

const projects = [
  // Newly added Web Development projects with thumbnails
  {
    title: 'Deal Guru',
    category: 'Web Development',
    description: 'Deals discovery platform for Sweden. Browse curated offers and promotions across categories.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    image: dealGuruImg,
    url: 'https://dealguru.se/'
  },
  {
    title: 'Mazeno Adventures',
    category: 'Web Development',
    description: 'Adventure travel and expedition operator website with tours, itineraries and contact.',
    tags: ['React', 'UI/UX', 'SEO'],
    image: mazenoImg,
    url: 'https://www.mazenoadventures.com/'
  },
  {
    title: 'Rupal Adventures',
    category: 'Web Development',
    description: 'Outdoor adventures and tours site featuring routes, gallery and booking information.',
    tags: ['React', 'Tailwind', 'Content'],
    image: rupalImg,
    url: 'https://rupaladventures.com/'
  },
  {
    title: 'Urban-AdCheck',
    category: 'Web Development',
    description: 'Ad verification dashboard for urban campaigns with real-time tracking and reports.',
    tags: ['Vite', 'TypeScript', 'Charts'],
    image: urbanAdcheckImg,
    url: 'https://urban-adcheck-web.vercel.app/'
  },
  {
    title: 'Remembery',
    category: 'App Development',
    description:
      'Remembery is your personal memory companion. Capture photos, videos, and thoughts, then relive and organize them with smart filters and tags. Share privately or with friends to complete your story.',
    tags: ['Android', 'React Native', 'Firebase'],
    image: rememberyImg,
    url: 'https://play.google.com/store/apps/details?id=com.verygoodcore.remembery'
  },
  {
    title: 'Zoom Car',
    category: 'App Development',
    description: 'Passenger ride-hailing app experience with booking, live tracking, and trip history for a seamless urban commute.',
    tags: ['Android', 'React Native'],
    image: zoomCarImg,
    url: 'https://play.google.com/store/apps/details?id=com.zoomcars.passengerapp'
  },
  {
    title: 'Business Development',
    category: 'Business Development',
    description: 'Providing end-to-end freelancing business development services: profile optimization, proposals, client communication, and growth strategy.',
    tags: ['Freelancing', 'Upwork', 'Consulting'],
    image: bdThumb,
    slides: [
      { image: bd1 },
      { image: bd2b, url: 'https://fiverr.com/ar_alizada' },
      { image: bd3 },
    ],
  },
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
    <section id="portfolio" className="py-14 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
              <div
                className={`relative ${('slides' in project ? 'h-48 sm:h-56 md:h-64' : 'h-64 md:h-72')} overflow-hidden ${
                  project.image ? '' : `bg-gradient-to-br ${project.gradient || ''}`
                }`}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain p-2 bg-background/30" />
                ) : (
                  <div className="w-full h-full" />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {('url' in project && project.url) ? (
                    <a href={(project as any).url} target="_blank" rel="noopener noreferrer" className="mr-2">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" variant="secondary" className="mr-2" disabled>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  )}
                  {('codeUrl' in project && (project as any).codeUrl) && (
                    <a href={(project as any).codeUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                {('slides' in project && (project as any).slides?.length) ? (
                  <div className="mb-4 overflow-x-auto -mx-6 px-6">
                    <div className="flex items-center gap-3 pr-2 snap-x snap-mandatory">
                      {(project as any).slides.map((slide: { image: string; url?: string }, i: number) => (
                        slide.url ? (
                          <a key={i} href={slide.url} target="_blank" rel="noopener noreferrer" className="shrink-0 snap-start">
                            <img src={slide.image} alt={`${project.title} ${i+1}`} className="h-16 sm:h-20 w-auto object-contain rounded-md border border-border bg-background/50" />
                          </a>
                        ) : (
                          <img key={i} src={slide.image} alt={`${project.title} ${i+1}`} className="h-16 sm:h-20 w-auto object-contain rounded-md border border-border bg-background/50 shrink-0 snap-start" />
                        )
                      ))}
                    </div>
                  </div>
                ) : null}
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
