"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiPaperAirplane, HiOutlineEnvelope } from "react-icons/hi2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY",
      );

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title justify-center mb-12">
            <span className="section-number">04.</span>
            Get In Touch
            <span className="section-line" />
          </h2>

          <div className="text-center mb-12 space-y-6">
            <p className="text-(--text-secondary) text-lg max-w-2xl mx-auto">
              Got a question, proposal, or just want to say hello? I&apos;d love
              to hear from you. Let&apos;s build something amazing together!
            </p>

            {/* Direct Email Link */}
            <div>
              <a
                href="mailto:nwekechidigodwin460@gmail.com"
                className="inline-flex items-center gap-2 font-mono text-(--accent-primary) hover:underline text-base sm:text-lg transition-all"
              >
                <HiOutlineEnvelope className="w-5 h-5" />
                nwekechidigodwin460@gmail.com
              </a>
            </div>

            {/* Social Links List */}
            <ul className="flex items-center justify-center gap-6 pt-2">
              <li>
                <a
                  href="https://github.com/NwekeGoddy"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--text-secondary) hover:text-(--accent-primary) hover:-translate-y-1 transition-all inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/iam_ngoddy/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--text-secondary) hover:text-(--accent-primary) hover:-translate-y-1 transition-all inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <title>Instagram</title>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/NwekeChidi_G"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--text-secondary) hover:text-(--accent-primary) hover:-translate-y-1 transition-all inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <title>Twitter</title>
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/nweke-chidi/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--text-secondary) hover:text-(--accent-primary) hover:-translate-y-1 transition-all inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-(--text-secondary) text-sm mb-2 font-mono"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full px-4 py-3 bg-(--bg-input) border border-[var(--accent-border)] rounded-lg text-(--text-primary) placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-border)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-(--text-secondary) text-sm mb-2 font-mono"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-3 bg-(--bg-input) border border-(--accent-border) rounded-lg text-(--text-primary) placeholder:text-(--text-secondary)/50 focus:outline-none focus:border-(--accent-border) focus:ring-2 focus:ring-accent transition-all"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-(--text-secondary) text-sm mb-2 font-mono"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={6}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 bg-(--bg-input) border border-(--accent-border) rounded-lg text-(--text-primary) placeholder:text-(--text-secondary)/50 focus:outline-none focus:border-(--accent-border) focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 px-8 py-3 bg-transparent border-2 border-(--accent-border) text-(--accent-primary) rounded-lg hover:bg-[var(--accent-border)] transition-all duration-300 font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-(--accent-primary) mt-4"
                >
                  Message sent successfully! I&apos;ll get back to you soon. 🎉
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 mt-4"
                >
                  Oops! Something went wrong. Please try again later.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
