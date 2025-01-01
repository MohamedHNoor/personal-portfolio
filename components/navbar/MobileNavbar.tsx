'use client'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { links } from '@/utils/links'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function MobileNavbar() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu className='w-4 h-4' />
        </Button>
      </SheetTrigger>
      <SheetTitle className='sr-only' />
      <SheetContent>
        <nav className='mt-5 flex px-2 py-1 flex-col'>
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.href}
                className={cn(
                  pathname === link.href
                    ? 'text-blue-400 bg-muted'
                    : 'hover:bg-muted hover:bg-opacity-75',
                  'group flex items-center px-3 py-2 mb-2 text-base font-semibold rounded-md uppercase'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
