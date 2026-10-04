import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.scss'

const Contact = () => {
  const [sending, setSending] = useState(false)
  const refForm = useRef()

  const sendEmail = async (e) => {
    e.preventDefault()
    setSending(true)

    const form = refForm.current
    const data = new FormData(form)
    data.append('access_key', 'c590dcdc-12ca-4079-b94e-914595f27a41')
    data.append('to_email', 'daniyal.nisar999@gmail.com')
    data.append('subject', data.get('subject') || 'New portfolio contact')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message || 'Unknown error')
      toast.success('Message sent successfully.', { position: 'top-center', autoClose: 3000 })
      form.reset()
    } catch (err) {
      console.error('Error sending form:', err)
      toast.error('Could not send the message. Please try again.', { position: 'top-center', autoClose: 5000 })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="container contact-page">
      <div className="contact-layout">
        <section className="contact-copy">
          <span className="section-kicker">Contact</span>
          <h1>Let’s talk about engineering, payments or AI.</h1>
          <p>
            I’m open to conversations around backend engineering, fintech and payment systems,
            technical collaboration, research and applied AI opportunities.
          </p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/daniyal-nisar99/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/DaniyalNisar" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>

        <section className="contact-card" aria-label="Contact form">
          <form ref={refForm} onSubmit={sendEmail}>
            <div className="form-row">
              <label>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input type="text" name="subject" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="7" required />
            </label>
            <button type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</button>
          </form>
        </section>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact
