import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';

function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-stone-100">Projects</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
            className="project-card group"
          >
            <h3 className="text-lg font-semibold text-stone-100">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-300">
              <span className="text-stone-200">Problem:</span> {project.problem}
            </p>
            <p className="mt-3 text-sm text-stone-300">
              <span className="text-stone-200">Tech Stack:</span> {project.techStack.join(', ')}
            </p>

            <div className="mt-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-stone-200 transition group-hover:text-stone-50"
              >
                Open GitHub
              </a>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500 transition group-hover:text-stone-300">
                Case Study
              </span>
            </div>

            <div className="project-overlay" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
