import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Image src="/vercel.svg" width={128} height={77}/>
        </div>
        <lu>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/siska"><a>Siska Listing</a></Link>
        </lu>
    </nav>
  )
}

export default Navbar