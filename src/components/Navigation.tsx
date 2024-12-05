import React from 'react'

const navList = [
    {
        name: 'dashboard',
        link: '@',
    },
    {
        name: 'about',
        link: '@about',
    },
    {
        name: 'price',
        link: '@price',
    }
]

function Navigation() {
  return (
    <div>
        <div className='flex gap-4'>
        {navList.map((navItem, index) => (
            <a key={index} href={navItem.link} className='nav-item'>
            {navItem.name}
            </a>
        ))}
        </div>
    </div>
  )
}

export default Navigation