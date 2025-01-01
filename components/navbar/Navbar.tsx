import Container from '../global/Container'
import DarkMode from './DarkMode'
import Logo from './Logo'
import MobileNavbar from './MobileNavbar'
import DesktopNavigationMenu from './DesktopNavigationMenu'

function Navbar() {
  return (
    <nav className='sticky top-0 z-50 shadow-sm'>
      <Container className='flex flex-row justify-between items-center  gap-4 py-8'>
        {/* Logo */}
        <Logo />

        <DesktopNavigationMenu />

        {/* Dark Mode and Mobile menu */}
        <div className='flex gap-4'>
          <div>
            <DarkMode />
          </div>
          <div className='sm:hidden'>
            <MobileNavbar />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
