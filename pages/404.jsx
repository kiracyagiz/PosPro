import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
<div className='text-center justify-center items-center flex flex-col gap-y-10 p-20'>
    <img src='/notfound.png' alt='Not Found' width='200' height='200'/>
    <p className='text-3xl'>Oops. This page has gone missing.</p>
    <p className='text-xl'>You may have mistyped the address or the page may have moved.</p>
    <Link href='/' className='bg-blue-500 text-white px-4 py-2 rounded'>Go Home</Link>
  </div>
  )
}

export default notFound