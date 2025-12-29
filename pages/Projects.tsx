import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-8 w-full"
    >
      <header className="flex flex-col gap-3 mt-4">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for hire
        </div>
        <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white">
          Selected <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Projects</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
          A showcase of technical expertise in full-stack development, cloud architecture, and UI engineering.
        </p>
      </header>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-6 px-6">
        <button className="whitespace-nowrap px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium shadow-lg shadow-slate-200 dark:shadow-slate-900/50">
          All Work
        </button>
        <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-primary transition-colors">
          Web Apps
        </button>
        <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-primary transition-colors">
          Mobile
        </button>
        <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-primary transition-colors">
          Open Source
        </button>
      </div>

      <article className="group relative bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-300">
        <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img alt="Abstract gradient representing Nebula Dashboard interface" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUZN7kOm2_l2W6lGFDAlFi4hbQUed4ZqKrQ9MxNfbf3b_qVLQ9EUO4qlx5WkaKWUXIQYp6dnjMws083iB00X3-leHwZVm9DzWU1hSWZUYONHAxFqVX5Rsr9KiY51MbLxBxP2hkBG3Y7eDRiRltHmYrrlN-sSyYrIUNSUp6A_juTLYqWkDhjPLHKRx3-1pQHdUAmA0wEJToYaq5G8_7Qn2Wkb2tnum4rit0M6j-OvKQ13f4XT56ukZymos7S2sO-eooOCmx6zFCsZzh"/>
          <div className="absolute inset-0 bg-gradient-to-t from-card-light dark:from-card-dark to-transparent"></div>
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
            2024
          </div>
        </div>
        <div className="p-6 pt-2">
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-display text-2xl font-bold group-hover:text-primary transition-colors text-slate-900 dark:text-white">Nebula FinTech</h2>
            <a className="p-2 -mt-2 -mr-2 text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
            A real-time financial dashboard visualizing crypto assets with sub-millisecond latency using WebSockets.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">React</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">TypeScript</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">Node.js</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">D3.js</span>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-primary text-white py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              Live Demo
            </button>
            <button className="bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white px-4 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center border border-slate-200 dark:border-slate-600">
              <span className="material-symbols-outlined text-[20px]">code</span>
            </button>
          </div>
        </div>
      </article>

      <article className="group relative bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-300">
        <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img alt="Code editor screen showing neural network architecture" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVCMsSwpeVbbVJ5nOGaFLzAYhOOujoNv2h6Zq8i0TduoxvLT3s8yzaAAdXO214NA2ScmFTJrYNfiO46Mvgf7pE9OOW2ZCXJNxalQrbDcJ0b8pBQIfmKg2UVP1353-XBlOsBbQwM0EOrqHiwQUp1JBBCQuVoVRRchZU4PQnOFHZvlr3WAAqrfj5WYB1Owrs8whwxx1l9UC9Ec3EzjfgNJ00Y62IsII_8CZsKCaVLbNNtm_vHkmQ2i1g-BsD8NvqLMDbEa8uIHFCQj5v"/>
          <div className="absolute inset-0 bg-gradient-to-t from-card-light dark:from-card-dark to-transparent"></div>
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
            2023
          </div>
        </div>
        <div className="p-6 pt-2">
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-display text-2xl font-bold group-hover:text-primary transition-colors text-slate-900 dark:text-white">Vortex AI</h2>
            <a className="p-2 -mt-2 -mr-2 text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
            Machine learning pipeline automation tool. Processed over 1TB of training data with distributed computing.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">Python</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">PyTorch</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">AWS</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">Docker</span>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">description</span>
              Case Study
            </button>
            <button className="bg-slate-900 dark:bg-slate-700 text-white px-4 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors flex items-center justify-center border border-transparent dark:border-slate-600">
              <img alt="GitHub" className="w-5 h-5 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3_VH3mbMxejJV2vCM8Kx2X9mIVhkIInHeBVBMnBaTpilMbNtgiPUYGp_484gq94sm22Zz7ca61M1koUAKnSvtMqx9RSH60U8MHgyhe1XxRKxBY_rQSJDL74f3tPwWjUc_IXQNKv0RIYhRo_cA8LFmL7yWBrzIGtxDWpwmWDLxmh4njYyLPJ2GVsgxm6MwWQL3diXDEXjUD1Tuvy2XTK09mWgIqod0qL0PDhxQ3_7k0VmuhK2-sfsIsvJMTVkmpu5lrcBi2XX3BpHh"/>
            </button>
          </div>
        </div>
      </article>

      <article className="group relative bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-300">
        <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img alt="Modern minimalist dashboard analytics chart" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHQQvFWYwYsKBxPEHsYqK6Gg76JlJF5Q_afBbSaLWcDN6o3QfYapH1O6ivG4UF1BpadN1Oy7EaVcnPmyN7p9PBTdcovLmHRzMaei3nRt5C_zOSI1LYpKPPOBWq3ZH3UoyPMpeix5uCfm54zapbd-D0KxTNNJWovaG_5L5-2goGVnfmUeyMraupFT8PM45QsZEpfyYwOGRfSL9QBl7LzzF9NpWIPeGrEDO9YrW9MoGU0Nb1wxon9SDmKJIm6_U21EkPfTOYyZXPfP6M"/>
          <div className="absolute inset-0 bg-gradient-to-t from-card-light dark:from-card-dark to-transparent"></div>
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
            2022
          </div>
        </div>
        <div className="p-6 pt-2">
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-display text-2xl font-bold group-hover:text-primary transition-colors text-slate-900 dark:text-white">Aether Analytics</h2>
            <a className="p-2 -mt-2 -mr-2 text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
            SaaS platform for social media sentiment analysis. Scales to 1M+ daily events.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">Next.js</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">Tailwind</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">PostgreSQL</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-600">Redis</span>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              Live Demo
            </button>
            <button className="bg-slate-900 dark:bg-slate-700 text-white px-4 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors flex items-center justify-center border border-transparent dark:border-slate-600">
              <img alt="GitHub" className="w-5 h-5 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpnBawPrVcqvd3LOwCfC2zl5PvN65Amoz0gauMbtzpwye1EVtvt_LiWSPbojBWp7uG0lk9bkEGt2uVcAOwBem32QeSiE-c_OWoDeVy_I-w3t5QLOWRjdl2VSki289d7AWd-IGINvK6UghFklZXXaxI0fWps9ShZKGP1v3mfB87wToU0_c5_dbuyKVz6AwpYJvYDDhi2XGsQgfHXQLkAaxaIOMDHY1xOhAhatzLvKrK8LpdeVn549TF71MqG_8_3weRHMsTf5CcHmIC"/>
            </button>
          </div>
        </div>
      </article>
      
      <a className="block text-center py-4 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" href="#">
        View Archived Projects →
      </a>
    </motion.div>
  );
};

export default Projects;