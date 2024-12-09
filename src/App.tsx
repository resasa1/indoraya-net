import React from 'react'
// import { Nav } from './components/Navigation'
// import { Dashboard }  from './components/pages/Dashboard'
import { Price } from './components/pages/Price';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Nav /> */}
      <main>
        {/* <Dashboard /> */}
        <Price />
      </main>
    </div>
  )
}