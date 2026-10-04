import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <div className="app-shell">
    <Sidebar />
    <main className="site-main" id="main-content">
      <Outlet />
    </main>
    <footer className="site-footer">
      <div className="site-width footer-inner">
        <span>© {new Date().getFullYear()} Daniyal Nisar Rana</span>
        <span>Backend Engineering · Payments · Fintech · AI/ML</span>
      </div>
    </footer>
  </div>
)

export default Layout
