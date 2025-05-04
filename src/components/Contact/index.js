// src/components/Contact/Contact.jsx

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
    // Replace with your actual Web3Forms access key:
    data.append('access_key', 'c590dcdc-12ca-4079-b94e-914595f27a41')
    // Force-send to your email:
    data.append('to_email', 'daniyal.nisar999@gmail.com')
    // Fallback subject if none entered:
    data.append('subject', data.get('subject') || 'New contact form submission')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()

      if (json.success) {
        toast.success('✅ Message sent successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
        })
        form.reset()
      } else {
        throw new Error(json.message || 'Unknown error')
      }
    } catch (err) {
      console.error('Error sending form:', err)
      toast.error('❌ Failed to send message. Please try again.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','m','e']}
              idx={15}
            />
          </h1>
          <p className='contact-text'>
            Feel free to get in touch! Whether it’s a project proposal,
            collaboration idea, or just to say hi—I’d love to hear from you.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  />
                </li>
                <li>
                  <button
                    type="submit"
                    className="flat-button"
                    disabled={sending}
                  >
                    {sending ? 'SENDING…' : 'SEND'}
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      {/* Toast container (you can also move this to App.jsx) */}
      <ToastContainer />

      <Loader type="pacman" />
    </>
  )
}

export default Contact
