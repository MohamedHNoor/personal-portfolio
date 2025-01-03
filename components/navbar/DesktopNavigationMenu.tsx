'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { links } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function DesktopNavigationMenu() {
  const pathname = usePathname()
  return (
    <NavigationMenu className='hidden sm:flex'>
      <NavigationMenuList>
        {links.map((link) => {
          return (
            <NavigationMenuItem key={link.href}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  active={pathname === link.href}
                  className={`${navigationMenuTriggerStyle()} capitalize font-semibold text-lg hover:text-blue-400 bg-muted`}
                >
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default DesktopNavigationMenu
