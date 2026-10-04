import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    const timeline = gsap.timeline()
      .to(bgRef.current, { duration: 1, opacity: 1 })
      .fromTo(
        solidLogoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 4 },
        1
      )

    return () => timeline.kill()
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Daniyal Nisar"
      />
    </div>
  )
}

export default Logo
