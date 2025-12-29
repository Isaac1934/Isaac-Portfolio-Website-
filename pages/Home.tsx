import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-10"
    >
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col gap-6 relative mt-4">
        <div className="relative w-24 h-24 mx-auto mb-2">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-lg opacity-70"></div>
          <img 
            alt="Portrait of Isaac Naeem" 
            className="w-full h-full object-cover rounded-full border-2 border-white dark:border-gray-700 relative z-10 shadow-xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBetIv4VgQM70dTz7uB9p10SCvDEW7Vy5M2JpdNZbkHHux--oV7UVB9GYjmssSpkIqrRQDfEiV0frwnSejwx1mSY1NZ3bfE2jCEKFRjo7pvYSAmaaR4kL0qllN1ducpAcvP9He_6hzlb_Yty57Xn9ajjC6VkILtKFujAoVKy_AKtCEWV1sWFnS2iOkmuihOIP67TRxXIDamsopKNC5K1J892Bi3f8pO8ES2pcQAwybq-lQC40BF1ic56q1cskbLMiw3sqsl3CPGibuz"
          />
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white dark:border-background-dark rounded-full z-20" title="Available for work"></div>
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="font-display text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400">
            Isaac Naeem
          </h1>
          <p className="text-primary font-medium tracking-wide text-sm uppercase">Software Developer</p>
        </div>
        
        <div className="text-center px-4">
          <p className="text-subtext-light dark:text-subtext-dark leading-relaxed text-lg">
            Crafting digital experiences with code and creativity. Specializing in high-performance web applications and intuitive user interfaces.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center mt-2">
          <Link to="/projects" className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center gap-2">
            View Work
            <span className="material-icons-outlined text-sm">arrow_downward</span>
          </Link>
          <Link to="/contact" className="bg-white dark:bg-card-dark text-text-light dark:text-text-dark border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-sm">
            Contact Me
          </Link>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6 border-y border-gray-200 dark:border-gray-800 py-6">
          <div className="text-center">
            <span className="block font-display text-2xl font-bold">3+</span>
            <span className="text-xs text-subtext-light dark:text-subtext-dark uppercase tracking-wider">Years Exp.</span>
          </div>
          <div className="text-center border-l border-r border-gray-200 dark:border-gray-800">
            <span className="block font-display text-2xl font-bold">20+</span>
            <span className="text-xs text-subtext-light dark:text-subtext-dark uppercase tracking-wider">Projects</span>
          </div>
          <div className="text-center">
            <span className="block font-display text-2xl font-bold">100%</span>
            <span className="text-xs text-subtext-light dark:text-subtext-dark uppercase tracking-wider">Commitment</span>
          </div>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="space-y-4">
        <h2 className="font-display text-xl font-semibold flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full"></span>
          Technical Arsenal
        </h2>
        <div className="bg-card-light dark:bg-card-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
          <div className="flex flex-wrap gap-3">
            {['React Native', 'SwiftUI', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL', 'Figma', 'AWS'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 text-subtext-light dark:text-subtext-dark">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="space-y-4" id="projects">
        <div className="flex justify-between items-end">
          <h2 className="font-display text-xl font-semibold flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            Featured Work
          </h2>
          <Link to="/projects" className="text-primary text-sm font-medium hover:underline">View All</Link>
        </div>
        
        {/* Card 1 */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:border-primary/50 transition-colors">
          <div className="h-40 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <img alt="Fintech Dashboard Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNys3AGoJGF6kD4xYbOYoabSvisGVMn9_Zk8kCqn1p1KnXVADhEmA__jreEkozCLEfV6QqNUOQTMyHVWZxnlcRmSCuQmOoeh-xBl4i6Uoe6lRG-IULREU4dz_ncDBjWzETP7gN9YFLi41W3uDmmTONkWmCnNPuBK25_zanwGMyQa3b0CXCRHSU1XaZVL0tFdcyaziX4px-hgYGAh76ULNSlvk-F3q5fj5EtXhMMu2Wnn370P-_Q3M3tbaXv-QH4pEuDgIEtP8wWjnO"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <span className="bg-white/20 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Fintech</span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-display font-bold text-lg mb-1">Nexus Finance App</h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4 line-clamp-2">A comprehensive dashboard for tracking crypto assets and stock market trends in real-time.</p>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-card-dark flex items-center justify-center text-[8px] text-white">R</div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white dark:border-card-dark flex items-center justify-center text-[8px] text-black">JS</div>
              </div>
              <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                Case Study <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:border-primary/50 transition-colors">
          <div className="h-40 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <img alt="Learning Management System" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWu9uivt7bgOBfXQgRUUiguWsdSowA7W3GO6Rq6QeSIWix-PUnMVqxvmorfnvlF1uLAJnIAGiLAwyf197MPWCZKL7dgxmizBFMNIqNw3XFeO3blATDJoKchAxipaJy16ZWPkJE3heWR-3P3hrf03-A4KCSz6lWxslVc5VEWLzpO48yjM76DVGawdnBmB4ohIhYfg4DriZw1iU6D_e7I9UBHwfm13Hx6vQSiu6pz9xQqaG4JW68P6B1_5MWQQ2H55fAZ3JUnYTOsCdK"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <span className="bg-white/20 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Education</span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-display font-bold text-lg mb-1">LearnFlow Platform</h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4 line-clamp-2">Interactive learning management system designed for remote education accessibility.</p>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-card-dark flex items-center justify-center text-[8px] text-white">V</div>
                <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white dark:border-card-dark flex items-center justify-center text-[8px] text-white">N</div>
              </div>
              <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                Case Study <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section>
        <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-primary rounded-full"></span>
          Current Focus
        </h2>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <h3 className="font-display font-bold text-lg relative z-10 mb-2">Exploring AI Integration</h3>
          <p className="text-gray-300 text-sm leading-relaxed relative z-10 mb-4">
            Currently diving deep into Large Language Models (LLMs) and how to seamlessly integrate them into consumer-facing mobile applications for enhanced UX.
          </p>
          <div className="w-full bg-gray-700/50 rounded-full h-1.5 relative z-10">
            <div className="bg-primary h-1.5 rounded-full w-3/4"></div>
          </div>
          <span className="text-xs text-gray-400 mt-2 block relative z-10">Learning progress: 75%</span>
        </div>
      </section>

      {/* Services */}
      <section className="space-y-4">
        <h2 className="font-display text-xl font-semibold flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full"></span>
          Services
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: 'smartphone', label: 'Mobile Apps' },
            { icon: 'web', label: 'Web Dev' },
            { icon: 'layers', label: 'UI/UX Design' },
            { icon: 'code', label: 'Consulting' },
          ].map((service) => (
            <div key={service.label} className="bg-card-light dark:bg-card-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <span className="material-icons-outlined text-3xl text-primary">{service.icon}</span>
              <span className="font-medium text-sm">{service.label}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;