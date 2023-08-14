import React from 'react'
import './globals.css'

const layout = ({children}) => {


  return (
    <html>
        <body className='bg-[#232323]'>
          
            {children}
        </body>
    </html>
  )
}

export default layout
