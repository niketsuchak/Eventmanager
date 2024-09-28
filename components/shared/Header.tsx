import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'


const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href='/' className='w-36'>
                <img src="/assets/images/logo.svg" width={128} height={38} alt='Evently Logo'/>
            </Link>

            <SignedIn>
                <nav className='md:flex-between hidden w-full max-w-xs'>
                    <NavItems/>
                </nav>
            </SignedIn>

            <div className='flex w-32 justify-end gap-3'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                        <MobileNav/>
                </SignedIn>
                <SignedOut>
                    <Link href='/sign-in'>
                        <Button asChild className='rounded-full' size='lg'>
                            <p>Sign in</p>
                        </Button>
                    </Link> 
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header