// pages/contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-screen-2xl mx-auto px-8 py-24 bg-white dark:bg-black border-t border-zinc-200 dark:border-white/10">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="section-header text-5xl heading-font font-semibold tracking-tighter mb-8 text-zinc-900 dark:text-white">LET'S BUILD SOMETHING</h2>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400">Open to internships, collaborations, or just a chat about tech in Nepal.</p>

          <div className="mt-12 space-y-6">
            <a href="tel:+9779844012034" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-2xl flex items-center justify-center text-2xl text-zinc-900 dark:text-white">📱</div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-white">+977 9844012034</p>
                <p className="text-sm text-zinc-500">Call or WhatsApp</p>
              </div>
            </a>

            <a href="mailto:aaryankoirala20@email.com" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-2xl flex items-center justify-center text-2xl text-zinc-900 dark:text-white">✉️</div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-white">aaryankoirala20@email.com</p>
                <p className="text-sm text-zinc-500">Drop me a line</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-3xl p-8">
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSc5FOr8vafiv9CFrPM-WrvRedMsHEAYDc3p_eeDUcxJcqCFFg/formResponse" 
                method="POST" 
                target="_blank"
                className="space-y-6">
            <input type="text" name="entry.238224347" placeholder="Your name" required
                   className="w-full bg-white dark:bg-transparent border border-zinc-300 dark:border-white/30 focus:border-[#00ff9d] rounded-3xl px-6 py-5 outline-none transition-all text-zinc-900 dark:text-white" />
            
            <input type="email" name="entry.179831632" placeholder="Email address" required
                   className="w-full bg-white dark:bg-transparent border border-zinc-300 dark:border-white/30 focus:border-[#00ff9d] rounded-3xl px-6 py-5 outline-none transition-all text-zinc-900 dark:text-white" />
            
            <textarea name="entry.1434433526" rows="5" placeholder="What are we building?" required
                      className="w-full bg-white dark:bg-transparent border border-zinc-300 dark:border-white/30 focus:border-[#00ff9d] rounded-3xl px-6 py-5 outline-none resize-none transition-all text-zinc-900 dark:text-white"></textarea>

            <button type="submit"
                    className="w-full py-6 bg-[#00ff9d] text-black font-semibold rounded-3xl flex items-center justify-center gap-3 text-lg hover:scale-105 transition-all">
              SEND MESSAGE
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;