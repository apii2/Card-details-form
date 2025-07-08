import CardFront from '../assets/images/bg-card-front.png';
import CardBack from '../assets/images/bg-card-back.png';
import CardLogo from '../assets/images/card-logo.svg';
import { useContext } from 'react';
import { CardContext } from '@/context/CardContext';

export default function CardImage() {
  
  const {cardInfo, setCardInfo} = useContext(CardContext);
  console.log(cardInfo);

  function getFullDate(){
    return cardInfo
    .filter(dat=>!dat.children?.length)
      .map(dat=>{
        return dat.value
      })
  }
  let dates = getFullDate();
  // console.log(dates);

  return (
    <section className='bg-fixed bg-no-repeat bg-cover px-[4%] md:px-0 
      flex flex-col-reverse md:flex-col md:justify-center md:items-end md:gap-6'>

      <div className="relative w-70 xxs:max-[425px]:w-80 xxs:w-90 xs:w-full md:w-75 lg:w-88 xl:w-95 
        -mb-[22%] xs:-mb-[15%] md:mb-0 md:-me-[16%] lg:-me-[30%]">
        <img src={CardFront} alt="Card front view" className='shadow-2xl' />
        <img src={CardLogo} alt="Card logo icon" className='absolute top-6 left-6 w-[21%]' />
        {cardInfo.map(dat=>(
          <div key={dat.id}>
          {(dat.name === 'card_no') && <p className='absolute bottom-0 -translate-y-9.5 left-6 text-White text-xl tracking-widest'>{dat.value || '0000 0000 0000 0000'}</p>}
          {(dat.name === 'full_name') && <p className='absolute bottom-0 -translate-y-3.5 left-6 text-xs text-White uppercase tracking-widest'>{dat.value || 'Jane Appleseed'}</p>}
          {/* {(dat.name === 'expiry') && dat.children?.map(child=><p className='absolute bottom-0 -translate-y-3.5 right-6 text-xs text-White uppercase tracking-widest'>{child.value || '00'}</p>)} */}
          </div>
        ))}
      </div>
      
      <div className="w-full md:w-75 lg:w-88 xl:w-95 relative
        -mb-[8%] xxs:-mb-[12%] xs:-mb-[33%] sm:-mb-[26%] md:mb-0 md:-me-[34%] lg:-me-[50%] 
        text-right">
        <img src={CardBack} alt="Card back view" className='inline-block shadow-2xl w-70 xxs:max-[425px]:w-80 xxs:w-90 xs:w-auto' />
        {cardInfo.map(dat=>(
          (dat.name === 'code') && <p key={dat.id} className='absolute top-[46%] right-12 text-White text-xs tracking-widest'>{dat.value || '000'}</p>
        ))}
      </div>
    </section>
  )
}
