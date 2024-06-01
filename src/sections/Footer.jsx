import { footerLogo } from '../assets/images';
import { copyrightSign } from '../assets/icons';
import { socialMedia, footerLinks } from '../constants/index';

const Footer = () => {
  return (
    <footer className='max-container pt-20'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start '>
          <a href='/'>
            <img src={footerLogo} height={150} width={46} />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect size in store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className='mt-3'>
                    <a
                      href=''
                      className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between m-24 mx-sm:flex-col  text-white-400 max-sm:flex-col'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copy right sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copy rights. All rights reserved</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};
export default Footer;
