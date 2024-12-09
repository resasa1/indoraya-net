// import React from 'react'
// import { Nav } from './components/Navigation'
// import { Dashboard }  from './components/pages/Dashboard'
import { Price } from './components/pages/Price';
import { Sidebar } from './components/pages/Sidebar';


export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Nav /> */}
      <main className='flex'>
        {/* <Dashboard /> */}
        <Sidebar/>
        <Price />
      </main>
    </div>
  )
}