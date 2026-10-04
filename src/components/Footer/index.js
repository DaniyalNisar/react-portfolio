import './index.scss'

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div>
        <strong>Daniyal Nisar Rana</strong>
        <span>Backend Engineering · Payments · Fintech · AI/ML</span>
      </div>
      <nav aria-label="Footer links">
        <a href="https://www.linkedin.com/in/daniyal-nisar99/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/DaniyalNisar" target="_blank" rel="noreferrer">GitHub</a>
        <a href={`${process.env.PUBLIC_URL || ''}/Daniyal_Nisar_Resume.pdf`} target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </div>
  </footer>
)

export default Footer
