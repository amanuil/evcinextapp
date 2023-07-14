import { NavLinks } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='flex w-full flexBetween navbar bg-teal-300'>
        <div className="flex-1 flexStart gap-10 logo ">
            <Link href='/'><Image src='/icon/logo.png' alt='EVCI logo' width={80} height={80} /></Link>
        </div>
        
            <ul className='xl:flex '>
                {NavLinks.map((link)=>(
                <Link href={link.href} key={link.key} className=''>
                    {link.text}
                    </Link>
                    ))}
            </ul>
        
    </header>
  )
}

export default Navbar