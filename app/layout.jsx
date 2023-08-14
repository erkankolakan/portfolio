import React from 'react'
import './globals.css'

const layout = ({children}) => {
  return (
    <html>
        <body>
            {children}
        </body>
    </html>
  )
}

export default layout
