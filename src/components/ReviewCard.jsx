import { star } from '../assets/icons';

const ReviewCard = ({ customerName, rating, feedback, imgUrl }) => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <img
        src={imgUrl}
        alt={customerName}
        className='rounded-full object-cover h-[120px] w-[120px]'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img src={star} width={24} height={24} className='object-contain m-0' />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl font-bold'>{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
