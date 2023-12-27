"use client"

import React from 'react'

import Image from 'next/image'
import ButtonPrimary from '../components/General/ButtonPrimary'
const notfound = () => {
  return (
    <div className='text-center justify-center items-center flex flex-col gap-y-10 p-20'>
    <Image src={'/notfound.png'} width={200} height={200}></Image>
    <p className='text-3xl'>Oops. This page has gone missing.</p>
    <p className='text-xl'>You may have mistyped the address or the page may have moved.</p>
    <ButtonPrimary text={'Go Home'} locate={'/'}/>
    </div>
  )
}

export default notfound