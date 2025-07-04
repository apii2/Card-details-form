import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { useContext } from 'react';
import { CardContext } from '@/context/CardContext';

export default function Form() {

  const {cardInfo, setCardInfo} = useContext(CardContext);

  return (
    <div className='flex items-end md:items-center justify-center px-6 sm:px-7 lg:px-20 xl:px-0'>
      <form className='space-y-5 pb-20 md:pb-0'>
        {cardInfo.map(dat=>(
          dat.name !== 'expiry' ? 
            <Label key={dat.id} className={dat.name==='code' ? 'w-1/2 inline-flex ps-2' : 'w-full'}>
              {dat.label}
              <Input type={dat.type} placeholder={dat.placeholder} name={dat.name} id={dat.name} required /> 
            </Label> 
            :
            <Label key={dat.id} className='w-1/2 inline-flex pe-2'>
              {dat.label}
              <div className="flex gap-2">
                <Input type={dat.type} placeholder='MM' name={dat.name+'_month'} id={dat.name+'_month'} min={1} max={12} required /> 
                <Input type={dat.type} placeholder='YY' name={dat.name+'_year'} id={dat.name+'_year'} min={25} max={99} required /> 
              </div>
            </Label>
        ))}

        <Button type='submit'>
          Confirm
        </Button>
      </form>
    </div>
  )
}
