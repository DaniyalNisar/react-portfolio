import React, { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [sending, setSending] = useState(false)
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()
    setSending(true)

    const form = refForm.current
    const data = new FormData(form)
    data.append('access_key', 'c590dcdc-12ca-4079-b94e-914595f27a41')
    data.append('to_email', 'daniyal.nisar999@gmail.com')
    data.append('subject', data.get('subject') || 'New contact form submission')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message || 'Unknown error')
      toast.success('Message sent successfully!', { position: 'top-center', autoClose: 3000 })
      form.reset()
    } catch (err) {
      console.error('Error sending form:', err)
      toast.error('Failed to send message. Please try again.', { position: 'top-center', autoClose: 5000 })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1><AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} /></h1>
          <p className="contact-text">Feel free to get in touch. Whether it’s a project, engineering opportunity, collaboration or a technical conversation, I’d be happy to hear from you.</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half"><input type="text" name="name" placeholder="Name" autoComplete="name" required /></li>
                <li className="half"><input type="email" name="email" placeholder="Email" autoComplete="email" required /></li>
                <li><input type="text" name="subject" placeholder="Subject" required /></li>
                <li><textarea name="message" placeholder="Message" required /></li>
                <li><button type="submit" className="flat-button" disabled={sending}>{sending ? 'SENDING…' : 'SEND'}</button></li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Loader type="pacman" />
    </>
  )
}

export default Contact
