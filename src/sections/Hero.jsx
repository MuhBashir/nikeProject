import { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants/index';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-ful flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-lg font-montserrat text-coral-red'>
          Our Summer Collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span>
          Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike new arrivals, quality comfort, and innovation
          for your active life
        </p>
        <Button label='shop now' iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className='text-4xl font-palanquin font-bold'>
                  {stat.value}
                </p>
                <p className='font-montserrat leading-7 text-slate-gray'>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen mx-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImage}
          alt='shoe collection'
          width={610}
          height={400}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[30%] sm:left-[10%] max-sm:px-6 xl:-bottom-[5%]'>
          {shoes.map((shoe) => {
            return (
              <div key={shoe}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => {
                    setBigShoeImage(shoe);
                  }}
                  bigShoeImage={bigShoeImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
