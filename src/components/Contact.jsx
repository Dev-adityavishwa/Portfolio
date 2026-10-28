import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone,
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalData } from '../data/personal';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // If EmailJS env vars are present, use real EmailJS
    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus('success');
        setFeedbackMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setFeedbackMessage('Something went wrong while sending. Please email me directly at ' + personalData.social.email);
      }
    } else {
      // Graceful fallback for local demo / unconfigured EmailJS:
      // Simulate delay and deliver successful feedback + mailto fallback
      setTimeout(() => {
        setStatus('success');
        setFeedbackMessage('Message received! Thank you for reaching out. (EmailJS simulated mode: you can also reach me directly at ' + personalData.social.email + ')');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        // Also open mailto if user wants instant send
        const mailtoLink = `mailto:${personalData.social.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-cyan-600/10 to-transparent blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Channel</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build Something Great
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-zinc-300 text-base sm:text-lg"
          >
            Have an opportunity, an interesting idea, or a project in mind? I'd love to hear from you.
          </motion.p>
        </div>

        {/* Two-Column Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                Get in Touch
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-8">
                I am actively seeking software engineering internships, graduate roles, and collaborative projects. Feel free to send a message or connect via LinkedIn.
              </p>

              {/* Contact Details List */}
              <div className="space-y-4 mb-8">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-800/40 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 block">Direct Email</span>
                      <a 
                        href={`mailto:${personalData.social.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                      >
                        {personalData.social.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-800/40 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block">Phone / WhatsApp</span>
                    <a 
                      href={`tel:${personalData.social.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {personalData.social.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-800/40 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalData.social.location}
                    </span>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-800/40 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block">Response Time</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-300">
                      Usually replies within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-zinc-400 block mb-3">
                PROFESSIONAL PROFILES
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={personalData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-violet-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-300 mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/80 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-300 mb-2">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/80 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-zinc-300 mb-2">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Project collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/80 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-300 mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Aditya, I came across your portfolio and wanted to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/80 transition-all resize-none"
                />
              </div>

              {/* Status Alert */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/30 border border-indigo-400/30 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Sending Transmission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
