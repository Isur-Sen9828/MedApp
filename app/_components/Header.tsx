import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  const Menu = [
    {
      id:1,
      name:'Home',
      path:'/'
    },
    {
      id:2,
      name:'Explore',
      path:'/'
    },
    {
      id:3,
      name:'Contact-Us',
      path:'/'
    },
  ]
  return (
    <div>
      <div className='flex items-center gap-10'>
        <Image src='/logo.svg' alt='logo' width={50} height={0}/>

        <ul className='md:flex gap-8 hidden'>
          {Menu.map((item,index)=>(
            <li>{item.name}</li>
          ))}
        </ul>
        </div>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header