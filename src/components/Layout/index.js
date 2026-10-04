import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <div className="route-transition" key={location.pathname}>
          <Outlet />
        </div>
        <span className="tags bottom-tags">
          &lt;/body&gt;<br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
