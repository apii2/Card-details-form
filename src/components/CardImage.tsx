import CardFront from '../../public/images/bg-card-front.png';
import CardBack from '../../public/images/bg-card-back.png';
import CardLogo from '../../public/images/card-logo.svg';
import { useContext, useState, useEffect } from 'react';
import { CardContext } from '@/context/CardContext';
import type { StringObjectInterface } from '@/type/StringObjectInterface';

export default function CardImage() {
  
  const {cardInfo} = useContext(CardContext);

  const [valueList, setValueList] = useState<StringObjectInterface>({})

  useEffect(() => {
    const values: StringObjectInterface = {};

    cardInfo.forEach(dat => {
      if (!dat.children?.length) {
        values[dat.name] = dat.value || '';
      } else {
        dat.children.forEach(child => {
          values[child.name] = child.value || '';
        });
      }
    });

    setValueList(values);
  }, [cardInfo]);

  return (
    <section className='left-section bg-fixed bg-no-repeat bg-cover px-[4%] md:px-0 
      flex flex-col-reverse md:flex-col md:justify-center md:items-end md:gap-6'>

      <div className="relative w-70 xxs:max-[425px]:w-80 xxs:w-90 xs:w-full md:w-75 lg:w-88 xl:w-95 
        -mb-[22%] xs:-mb-[15%] md:mb-0 md:-me-[16%] lg:-me-[30%] z-20">
        <img src={CardFront} alt="Card front view" className='shadow-2xl' />
        <img src={CardLogo} alt="Card logo icon" className='absolute top-6 left-6 w-[21%]' />
          <p className='absolute bottom-0 -translate-y-12 left-6 text-White text-lg sm:text-xl tracking-widest'>{valueList['card_no'] || '0000 0000 0000 0000'}</p>
          <p className='absolute bottom-0 -translate-y-3.5 left-6 text-xs text-White uppercase tracking-widest'>{valueList['full_name'] || 'Jane Appleseed'}</p>
          <p className='absolute bottom-0 -translate-y-3.5 right-6 text-xs text-White uppercase tracking-widest'>{valueList['expiry_month'] || '00'}/{valueList['expiry_year'] || '00'}</p>
      </div>
      
      <div className="w-full md:w-75 lg:w-88 xl:w-95 relative
        -mb-[8%] xxs:-mb-[12%] xs:-mb-[33%] sm:-mb-[26%] md:mb-0 md:-me-[34%] lg:-me-[50%] 
        text-right">
        <img src={CardBack} alt="Card back view" className='inline-block shadow-2xl w-70 xxs:max-[425px]:w-80 xxs:w-90 xs:w-auto' />
        <p className='absolute top-[45%] right-12 text-White text-xs tracking-widest'>{valueList['code'] || '000'}</p>
      </div>
    </section>
  )
}
