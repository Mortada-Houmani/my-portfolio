import { useState } from 'react';
import { motion } from 'framer-motion';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const messages = [];

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      // Simulate async submit while storing messages in frontend memory.
      await new Promise((resolve) => setTimeout(resolve, 350));
      messages.push({
        id: messages.length + 1,
        ...formData,
        createdAt: new Date().toISOString(),
      });

      setStatus('success');
      setFeedback('Message saved locally.');
      setFormData(initialForm);
    } catch (submitError) {
      setStatus('error');
      setFeedback(submitError.message);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="mx-auto max-w-3xl"
    >
      <div className="panel p-6 md:p-8">
        <h2 className="text-3xl font-semibold text-stone-100">Contact</h2>
        <p className="mt-3 text-sm text-stone-400">Send a direct message through this form.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm text-stone-300">
            Name
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="input-field mt-2"
            />
          </label>

          <label className="block text-sm text-stone-300">
            Email
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-field mt-2"
            />
          </label>

          <label className="block text-sm text-stone-300">
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="input-field mt-2 resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full border border-stone-500/60 bg-stone-300/10 px-5 py-2 text-sm text-stone-100 transition hover:bg-stone-200/15 disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {feedback && (
            <p
              className={
                status === 'success'
                  ? 'rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200'
                  : 'rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-200'
              }
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}

export default ContactPage;
