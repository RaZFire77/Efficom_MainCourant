import React from "react"
import Header from "./Header"

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="md:w-2/3 w-full mx-auto py-4">{children}</main>
    </div>
  )
}

export default Layout
