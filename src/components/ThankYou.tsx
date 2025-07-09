import { useContext } from 'react';
import CompleteIcon from '../assets/images/icon-complete.svg';
import { Button } from './ui/button';
import { CardContext } from '@/context/CardContext';

export default function ThankYou() {

  const {setCardInfo, setIsFormClear} = useContext(CardContext);

  function handleClick(){
    setIsFormClear(false);
    
    setCardInfo(prev=>(
      prev.map(dat=>{
        if(dat.children?.length){
          return {
            ...dat,
            children: dat.children?.map(child=>({
              ...child,
              value: ''
            }))
          }
        }
        return {
          ...dat,
          value: ''
        }
      })
    ))
  }
  
  return (
    <section className='flex flex-col items-center justify-center px-6 sm:px-7 lg:px-20 xl:px-40'>
      <img src={CompleteIcon} alt="Right Tick Icon for completed form" className='mb-6' />
      <h1 className='uppercase text-xl tracking-widest text-Purple-950 mb-2'>Thank you!</h1>
      <h4 className='text-Gray-400 text-sm mb-8'>We've added your card details</h4>
      <Button type='button' onClick={handleClick}>Continue</Button>
    </section>
  )
}
