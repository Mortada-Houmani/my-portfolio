import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
];

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 text-stone-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-indigo-900/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-slate-700/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-olive-700/20 blur-3xl" />
        <div className="noise-overlay" />
      </div>

      <header className="relative border-b border-stone-700/50 bg-ink-950/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-5">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-300 sm:text-lg md:text-xl lg:text-2xl">
          Mortada Houmani
        </p>

          <nav className="flex w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-stone-700/70 bg-ink-900/70 p-1 sm:w-auto sm:justify-start sm:gap-2 sm:rounded-full">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'rounded-full px-3 py-1.5 text-sm transition-colors sm:px-4',
                    isActive
                      ? 'bg-stone-100/10 text-stone-100'
                      : 'text-stone-400 hover:bg-stone-100/5 hover:text-stone-200',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/96170270163"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green-600 px-3 py-1.5 text-sm text-white transition hover:bg-green-500 sm:px-4"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <motion.main
        key={typeof window !== 'undefined' ? window.location.pathname : 'page'}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative mx-auto w-full max-w-6xl px-4 py-8 sm:px-5 sm:py-10"
      >
        {children}
      </motion.main>
    </div>
  );
}

export default Layout;
