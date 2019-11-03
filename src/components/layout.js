import React from "react"
import { Link } from "gatsby"
// import { IdentityContextProvider } from "react-netlify-identity-widget"

import "./layout.css"
// <IdentityContextProvider url="https://bitcreative-jam.netlify.com">
//
// </IdentityContextProvider>

const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </>
)

export default Layout
