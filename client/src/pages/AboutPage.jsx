import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="panel lg:col-span-7"
      >
        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-stone-100">About</h2>
          <p className="mt-5 leading-relaxed text-stone-300">
            I am a junior full-stack developer focused on building reliable web apps with readable
            code and practical architecture. I work across frontend and backend, and I prioritize
            maintainability over complexity.
          </p>
          <p className="mt-4 leading-relaxed text-stone-300">
            I approach projects by defining clear API contracts, keeping components focused, and
            implementing straightforward error handling.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.06, ease: 'easeOut' }}
        className="panel lg:col-span-5"
      >
        <div className="space-y-6 p-6 md:p-8">
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-400">Technical Background</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              <li>End-to-end JavaScript application development</li>
              <li>REST API integration and API-first thinking</li>
              <li>Structured project organization and code readability</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-400">Tech Stack</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              <li>Frontend: React, React Router, Zustand</li>
              <li>Backend: Node.js, Express, MongoDB, Sqlite</li>
              <li>Tools: Git, npm</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutPage;
