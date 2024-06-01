import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 absolute w-full'>
      <nav className='flex justify-between max-container items-center'>
        <a href='/'>
          <img src={headerLogo} alt='logo' height={29} width={130} />
        </a>
        <ul className='flex-1 flex justify-center gap-16 items-center max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-slate-gray font-montserrat leading-normal text-lg'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hambuger' height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
