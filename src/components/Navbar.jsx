import { logo } from '../assets/images'
import { hamburger } from '../assets/icons/index'
import { navLinks } from '../constants'
 
const Navbar = () => {
  return (
    <header className='padding-x py-6 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                    src={logo}
                    alt='Logo'
                    width={140}
                    height={29}
                    className='max-lg:hidden'
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map(link=>(
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img
                    src={hamburger}
                    alt='hamburger'
                    width={25}
                    height={25}
                    className='cursor-pointer'
                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
