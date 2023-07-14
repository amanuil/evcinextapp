import { FtrLinks } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex w-full '>
    <div className="logo">
        <Link href='/'><Image src='/icon/logo.png' alt='EVCI logo' width={50} height={50} /></Link>
    </div>
</footer>
  )
}

export default Footer