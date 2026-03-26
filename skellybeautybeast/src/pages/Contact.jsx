// pages/contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-screen-2xl mx-auto px-8 py-24 bg-black border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="section-header text-5xl heading-font font-semibold tracking-tighter mb-8">LET'S BUILD SOMETHING</h2>
          <p className="text-2xl text-zinc-400">Open to internships, collaborations, or just a chat about tech in Nepal.</p>

          <div className="mt-12 space-y-6">
            {/* Phone */}
            <a href="tel:+9779844012034" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">+977 9844012034</p>
                <p className="text-sm text-zinc-500">Call or WhatsApp</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:aaryankoirala20@email.com" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.568 2.13l-7.5 3.75a2.25 2.25 0 01-1.864 0l-7.5-3.75A2.25 2.25 0 012.25 7.243V6.75" />
                </svg>
              </div>
              <div>
                <p className="font-medium">aaryankoirala20@email.com</p>
                <p className="text-sm text-zinc-500">Drop me a line</p>
              </div>
            </a>
          </div>
        </div>

        {/* Google Form */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8">
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSc5FOr8vafiv9CFrPM-WrvRedMsHEAYDc3p_eeDUcxJcqCFFg/formResponse" 
                method="POST" 
                target="_blank"
                className="space-y-6">
            <div>
              <input type="text" name="entry.238224347" placeholder="Your name" required
                     className="w-full bg-transparent border border-white/30 focus:border-[#00ff9d] rounded-3xl px-6 py-5 outline-none transition-all" />
            </div>

            <div>
              <input type="email" name="entry.179831632" placeholder="Email address" required
                     className="w-full bg-transparent border border-white/30 focus:border-[#00ff9d] rounded-3xl px-6 py-5 outline-none transition-all" />
            </div>

            <div>
              <textarea name="entry.1434433526" rows="5" placeholder="What are we building?" required
                        className="w-full bg-transparent border border-white/30 focus:border-[#00ff9d] rounded-3xl px-6 py-5 outline-none resize-none transition-all"></textarea>
            </div>

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