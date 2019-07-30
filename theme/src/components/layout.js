/** @jsx jsx */
import { jsx } from "theme-ui"

const Layout = ({ children }) => (
  <div sx = {{ backgroundColor: 'background', color: 'text' }}>
    { children }
  </div>
)

export default Layout
