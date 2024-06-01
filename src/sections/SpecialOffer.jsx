import { offer } from '../assets/images';
import { arrowRight } from '../assets/icons';
import Button from '../components/Button';

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>
          <br />
          <span className='text-coral-red'>Special </span>
          <span>Offer</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Emberk on a shopping journey that redefines your experience with
          unbeatable deals from premier selections to incredible savings. We
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill ypur unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gary'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
