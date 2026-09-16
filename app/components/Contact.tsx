'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { HiPaperAirplane } from 'react-icons/hi2'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'
      )

      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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

          <div className="text-center mb-12">
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Got a question, proposal, or just want to say hello? I&apos;d love
              to hear from you. Let&apos;s build something amazing together!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary text-sm mb-2 font-mono">
                  Name
                </label>
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full px-4 py-3 bg-dark-200 border border-accent/30 rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary text-sm mb-2 font-mono">
                  Email
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-3 bg-dark-200 border border-accent/30 rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-text-secondary text-sm mb-2 font-mono">
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 bg-dark-200 border border-accent/30 rounded-lg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 px-8 py-3 bg-transparent border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent mt-4"
                >
                  Message sent successfully! I&apos;ll get back to you soon. 🎉
                </motion.p>
              )}

              {submitStatus === 'error' && (
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
  )
}