'use client'

import { useState } from 'react'

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(label)
          setTimeout(() => setCopied(null), 2000)
        }).catch(() => {
          fallbackCopy(text, label)
        })
      } else {
        fallbackCopy(text, label)
      }
    } catch {
      fallbackCopy(text, label)
    }
  }

  const fallbackCopy = (text: string, label: string) => {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    } finally {
      document.body.removeChild(textarea)
    }
  }

  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'khalidmagdy845@gmail.com',
      action: () => copyToClipboard('khalidmagdy845@gmail.com', 'email'),
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+20 1552198683',
      action: () => copyToClipboard('+20 1552198683', 'phone'),
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Cairo, Egypt',
      action: () => copyToClipboard('Cairo, Egypt', 'location'),
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-secondary text-sm font-semibold mb-2 inline-block">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-foreground/60">
            I&apos;m always interested in hearing about new engineering challenges and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, idx) => (
            <button
              key={idx}
              onClick={contact.action}
              disabled={!contact.action}
              className={`p-8 rounded-xl border transition-all ${
                contact.action
                  ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/50 hover:shadow-md cursor-pointer'
                  : 'bg-white border-border'
              }`}
            >
              <div className="text-3xl mb-3">{contact.icon}</div>
              <p className="text-sm text-foreground/60 mb-1">{contact.label}</p>
              <p className="font-semibold text-foreground text-sm break-all">{contact.value}</p>
              {copied === contact.label && (
                <p className="text-xs text-primary mt-2 font-medium">Copied!</p>
              )}
            </button>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-primary to-secondary/50 rounded-2xl p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-lg mb-6 opacity-90">
            Feel free to reach out for project inquiries, collaborations, or consulting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                onClick={() => {
                window.open(
                  'https://mail.google.com/mail/?view=cm&fs=1&to=khalidmagdy845@gmail.com&su=Portfolio Inquiry',
                  '_blank'
                )
              }}
              className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Send Email
            </button>
            <button
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/khalid-m-abdel-samea-2231ass/',
                '_blank'
              )
            }}
              className="px-8 py-3 bg-white/20 border border-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              My LinkedIn
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60">
            © 2024 Khalid M. Abd El-Samea. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40 mt-2">
            Designed & developed with attention to detail and engineering precision.
          </p>
        </div>
      </div>
    </section>
  )
}
