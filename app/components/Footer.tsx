import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa6'
import Link from 'next/link'

const socials = [
  { icon: FaGithub, href: 'https://github.com/NwekeGoddy', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nweke-chidi/', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/NwekeChidi_G', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/iam_ngoddy/', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="py-8 border-t border-accent/10">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons - Mobile */}
          <div className="flex gap-4 md:hidden">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors text-2xl"
                aria-label={social.label}
              >
                <social.icon />
              </Link>
            ))}
          </div>

          <p className="text-text-secondary/60 text-sm font-mono text-center">
            Designed & Built by{' '}
            <span className="text-accent hover:text-accent/80 transition-colors">
              Nweke Chidi
            </span>
          </p>

          <p className="text-text-secondary/40 text-xs font-mono">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}