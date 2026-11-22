import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/content';
import MagneticButton from '../ui/MagneticButton';
import { Mail, Github, Linkedin, Download, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Anti-spam bot field
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }

    if (endpoint) {
      // POST to configured backend endpoint
      setStatus({ state: 'loading', message: 'Transmitting payload to endpoint...' });
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        if (response.ok) {
          setStatus({ state: 'success', message: 'Message dispatched successfully!' });
          setFormData({ name: '', email: '', message: '', honeypot: '' });
        } else {
          throw new Error('Endpoint returned error status');
        }
      } catch (err) {
        setStatus({
          state: 'error',
          message: 'Transmission failed. You can reach out directly via madaanrimjhim6@gmail.com.'
        });
      }
    } else {
      // Fallback to prefilled mailto: link (no false claims of delivery)
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Sender: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, '_blank');
      setStatus({
        state: 'fallback',
        message: 'No backend form endpoint configured. Opened default mail client with prefilled details.'
      });
    }
  };

  return (
    <section
      id="stage-07"
      className="w-full py-24 px-6 md:px-12 lg:px-20 border-b border-hairline bg-ink"
      aria-label="Stage 07: Ship (Contact)"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-hairline pb-4 font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal"></span>
            <span className="text-bone font-medium">STAGE 07 // SHIP</span>
          </div>
          <span className="text-muted text-[11px]">[SYSTEM HANDSHAKE & INQUIRIES]</span>
        </div>

        {/* Section Heading & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Links & Statement */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl text-bone">
                Initiate Connection
              </h2>
              <p className="text-muted text-base font-sans mt-4 leading-relaxed">
                Currently seeking a Software Engineer or Software Development Intern role. Open to discussing full-stack engineering, machine learning pipelines, and distributed software systems.
              </p>
            </div>

            {/* Direct Connect Directory */}
            <div className="flex flex-col gap-3 font-mono text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                data-reticle="EMAIL"
                className="p-3.5 rounded bg-graphite/40 border border-hairline hover:border-signal text-bone hover:text-signal transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-signal" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-reticle="LINKEDIN"
                className="p-3.5 rounded bg-graphite/40 border border-hairline hover:border-signal text-bone hover:text-signal transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-signal" />
                  <span>linkedin.com/in/rimjhim-madan</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                data-reticle="GITHUB"
                className="p-3.5 rounded bg-graphite/40 border border-hairline hover:border-signal text-bone hover:text-signal transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-signal" />
                  <span>github.com/RimjhimMadan</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Rimjhim_Madan_Resume.pdf"
                data-reticle="DOWNLOAD"
                className="p-3.5 rounded bg-graphite/40 border border-hairline hover:border-signal text-bone hover:text-signal transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-signal" />
                  <span>Download Resume (PDF)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl bg-graphite/40 border border-hairline flex flex-col gap-5 font-mono text-xs"
              noValidate
            >
              <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                <span className="text-bone font-semibold text-sm">TRANSMISSION TERMINAL</span>
                <span className="text-[10px] text-muted">
                  {endpoint ? 'LIVE ENDPOINT' : 'MAILTO FALLBACK READY'}
                </span>
              </div>

              {/* Honeypot field (hidden from real users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-bone text-[11px] font-medium">
                  NAME <span className="text-signal">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="px-3.5 py-2.5 rounded bg-ink border border-hairline text-bone placeholder:text-muted/40 focus:border-signal focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-bone text-[11px] font-medium">
                  EMAIL <span className="text-signal">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="px-3.5 py-2.5 rounded bg-ink border border-hairline text-bone placeholder:text-muted/40 focus:border-signal focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-bone text-[11px] font-medium">
                  MESSAGE <span className="text-signal">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your inquiry or project details here..."
                  className="px-3.5 py-2.5 rounded bg-ink border border-hairline text-bone placeholder:text-muted/40 focus:border-signal focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status Message Alert */}
              {status.state !== 'idle' && (
                <div
                  className={`p-3 rounded border text-xs flex items-start gap-2 ${
                    status.state === 'success'
                      ? 'bg-verified/10 border-verified/40 text-verified'
                      : status.state === 'fallback'
                      ? 'bg-graphite border-hairline text-bone'
                      : status.state === 'error'
                      ? 'bg-signal/10 border-signal/40 text-signal'
                      : 'bg-graphite border-hairline text-muted'
                  }`}
                >
                  {status.state === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />}
                  {status.state === 'fallback' && <Mail className="w-4 h-4 text-signal shrink-0 mt-0.5" />}
                  {status.state === 'error' && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                  <span className="font-sans text-[11px]">{status.message}</span>
                </div>
              )}

              {/* Submit CTA with Magnetic Effect */}
              <div className="pt-2">
                <MagneticButton
                  onClick={handleSubmit}
                  data-reticle="TRANSMIT"
                  className="w-full py-3 rounded bg-signal hover:bg-signal/90 text-bone font-mono text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT PAYLOAD</span>
                </MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

