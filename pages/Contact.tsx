import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-10 mt-4"
    >
      <header className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-medium uppercase tracking-wider border border-blue-100 dark:border-blue-800">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Available for work
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
          Let's Build <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Something Great</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          Have a project in mind or just want to chat tech? Drop me a message below.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <a className="group relative p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-lg" href="mailto:hello@isaacnaeem.dev">
          <div className="absolute top-4 right-4 text-slate-400 group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">arrow_outward</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <h3 className="font-display font-medium text-slate-900 dark:text-white">Email Me</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">hello@isaacnaeem.dev</p>
        </a>
        <a className="group relative p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-accent-light dark:border-accent-dark hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-lg" href="tel:+1234567890">
          <div className="absolute top-4 right-4 text-slate-400 group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">arrow_outward</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500 mb-3 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">call</span>
          </div>
          <h3 className="font-display font-medium text-slate-900 dark:text-white">Call Me</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">+1 (555) 012-3456</p>
        </a>
      </div>

      <form className="space-y-6 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-accent-light dark:border-accent-dark shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1" htmlFor="name">Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">person</span>
              </div>
              <input className="block w-full pl-10 pr-3 py-3 rounded-xl bg-background-light dark:bg-background-dark border-accent-light dark:border-accent-dark text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:text-sm outline-none" id="name" name="name" placeholder="John Doe" type="text"/>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1" htmlFor="email">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </div>
              <input className="block w-full pl-10 pr-3 py-3 rounded-xl bg-background-light dark:bg-background-dark border-accent-light dark:border-accent-dark text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:text-sm outline-none" id="email" name="email" placeholder="john@example.com" type="email"/>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1" htmlFor="message">Message</label>
            <div className="relative">
              <textarea className="block w-full px-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border-accent-light dark:border-accent-dark text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:text-sm resize-none outline-none" id="message" name="message" placeholder="Tell me about your project..." rows={4}></textarea>
            </div>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-glow text-sm font-semibold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98]" type="submit">
          <span>Send Message</span>
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </form>

      <div className="flex justify-center gap-6 py-4">
        <a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:-translate-y-1" href="#">
          <span className="sr-only">GitHub</span>
          <img alt="GitHub" className="w-6 h-6 dark:invert opacity-70 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1s66nmvllLtDFvBqO1meK3CCeYLvrqNAqBjhHeiy7qcz8jrYHP94kuri0EVls7JyNRYyq3X3CF74QFD2EbW33gUA0Mfy9pzmcRnNO_37FxRmWEuypR_VrwxZ6JP1nOCo8xWJ_Sgxm1GO3ql-rINV6AR7ybxiHBM4pyLTByO3I0N2t0LHXKiVnc1mu9vYCLvRcKX7GnitU0cp3D-nkhd-KG6DUVLlzPZtQDvMhnWZCkyMxZ5NKUsP11_YUr1l_k2SAE4A9ga3ymEUZ"/>
        </a>
        <a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:-translate-y-1" href="#">
          <span className="sr-only">LinkedIn</span>
          <img alt="LinkedIn" className="w-6 h-6 opacity-70 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwuu8lRBRyjjTPOrXxStUbe1RLXsicHfnPyNrZLgZ2QeJj0D6Zco3W8QA6bA_k3tRkQtkwSryV_q5WX9kA_tlFU-qlw5FbPgIygQl7gUL5uJFml_lj5ZZTQPDViCMbs65fZtP3nih9aWkrevejT3cTF5eWbXSqvTMXPPXLqs_ClB-MEnm49pOWdQep-Fd-R6YcZz-fPtlOFMFUoLMj3JIQT3L8zouOWZOZlwOVCLkcXrLoonboJQHpQq0NqPGu_sv1NkB95UTmWjMA"/>
        </a>
        <a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:-translate-y-1" href="#">
          <span className="sr-only">Twitter</span>
          <svg aria-hidden="true" className="w-6 h-6 fill-current opacity-70 hover:opacity-100" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
        <a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:-translate-y-1" href="#">
          <span className="sr-only">Dribbble</span>
          <svg aria-hidden="true" className="w-6 h-6 fill-current opacity-70 hover:opacity-100" viewBox="0 0 24 24">
            <path clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.493-.184-.845 2.513-1.254 3.962-3.517 4.197-4.198zM8.72 9.85c.29-.448.6-1.529.6-1.529-1.552.203-2.92.834-4.045 1.756.974 1.996 4.312 2.766 6.892 2.825-.33.878-.711 1.66-1.127 2.37-3.238.257-6.289 1.583-6.289 1.583-.004-.085-.01-.168-.01-.255 0-2.828 1.154-5.385 3.018-7.218.423.859.961 1.696 1.487 2.449.197.319.395.632.584.939-.41.026-.827.05-1.11.08zm-4.328 8.995c2.31 1.795 5.215 2.863 8.358 2.658-.698-1.545-1.348-3.525-1.558-5.748-1.782-.284-4.22-.162-6.8.922zm9.176 2.628c-1.303 1.545-3.279 2.502-5.462 2.502-.27 0-.537-.015-.8-.043 1.25-2.035 2.05-4.606 2.126-7.135 1.603-.139 3.239.068 4.629.544.156.495.286.992.404 1.488.291 1.226.43 2.505.421 2.644H13.568zM15.64 8.243c.097.554.18 1.066.242 1.493 2.72.33 5.568.835 5.568.835.034-.29.052-.584.052-.88 0-2.22-.884-4.24-2.316-5.748-.372.934-2.008 3.447-3.546 4.3z" fillRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;