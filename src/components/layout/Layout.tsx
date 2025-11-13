import React from 'react'
import { Header } from './Header'
import Footer from './Footer'

export const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='flex min-h-screen flex-col'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

