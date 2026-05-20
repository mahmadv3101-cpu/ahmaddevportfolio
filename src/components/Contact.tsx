import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Bento from './Bento';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: 'Message sent', description: "Thanks — I'll get back to you within 24h." });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 noise">
      <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="eyebrow mb-5">04 — Contact</div>
          <h2 className="section-heading text-foreground mb-6">
            Have a project in mind?<br />
            <span className="gradient-text italic font-medium">Let's build it.</span>
          </h2>
          <p className="section-subheading">
            Available for freelance, contracts and long-term collaborations. I usually reply within a few hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {/* Info bento */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Bento className="p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Direct channels</div>
              <div className="space-y-5">
                <a href="mailto:mahmadv3101@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">mahmadv3101@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+923415765097" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">+92 341 5765097</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-ahmad-a8a682397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">LinkedIn</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">muhammad-ahmad</div>
                  </div>
                </a>
              </div>
            </Bento>

            <Bento className="p-7 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-primary">Status</span>
                </div>
                <div className="font-display text-lg font-semibold text-foreground">Open to new projects</div>
                <div className="text-sm text-muted-foreground">Booking June 2026 →</div>
              </div>
              <a
                href="https://github.com/mahmadv3101-cpu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:text-primary hover:border-primary transition-colors"
              >
                <Github size={18} />
              </a>
            </Bento>
          </div>

          {/* Form bento */}
          <Bento className="lg:col-span-3 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="you@brand.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Subject</label>
                <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="input-field" placeholder="Webflow landing for…" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Project brief</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="input-field resize-none" placeholder="Tell me about goals, timeline, and budget range…" />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-gradient w-full sm:w-auto disabled:opacity-60">
                {isSubmitting ? 'Sending…' : (<>Send message <Send size={16} /></>)}
              </button>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-2">
                Prefer email? <a href="mailto:mahmadv3101@gmail.com" className="text-primary inline-flex items-center gap-0.5 hover:underline">mahmadv3101@gmail.com <ArrowUpRight size={12} /></a>
              </p>
            </form>
          </Bento>
        </div>
      </div>
    </section>
  );
};

export default Contact;
