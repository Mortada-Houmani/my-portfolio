import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <section className="grid gap-8 lg:grid-cols-12 lg:items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="lg:col-span-7"
      >
        <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Junior Full-Stack Developer</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-stone-100 sm:text-4xl md:text-5xl">
          Building practical products with clean full-stack code.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-300">
          I develop frontend interfaces with React and backend APIs with Node.js + Express.
          My current focus is improving architecture choices, API reliability, and production-ready
          project structure.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-full border border-stone-500/60 bg-stone-200/10 px-5 py-2 text-sm text-stone-100 transition hover:bg-stone-200/15"
          >
            Explore Projects
          </Link>
          <a
            href="https://github.com/Mortada-Houmani"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-700 px-5 py-2 text-sm text-stone-300 transition hover:border-stone-500 hover:text-stone-100"
          >
            GitHub Profile
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        className="relative lg:col-span-5"
      >
        <div className="panel p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Current Focus</p>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            <li>Designing REST APIs with clear contracts</li>
            <li>Building reusable and predictable React components</li>
            <li>Improving error handling and deployment workflow</li>
          </ul>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="panel p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Primary Stack</p>
            <p className="mt-2 text-sm text-stone-200">React, Tailwind, Node.js, Express</p>
          </div>
          <div className="panel p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Learning</p>
            <p className="mt-2 text-sm text-stone-200">FullStack, Machine Learning</p>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

export default HomePage;
