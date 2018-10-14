import React from "react"
import layoutStyles from "../styles/layout.module.css"

export default ({ children }) => (
  <div className={layoutStyles.container}>
    {children}
  </div>
)