import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { useContext, useState } from 'react';
import { CardContext } from '@/context/CardContext';
import type { ErrorInterface } from '@/type/ErrorInterface';
import { validation, inputValue } from '@/methds/validation';

export default function Form() {

  const {cardInfo, setCardInfo} = useContext(CardContext);
  const [errorList, setErrorList] = useState<ErrorInterface>({});

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let errors = validation(formData, cardInfo);
    setErrorList(errors);
  }

  function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
    const { name, value } = e.currentTarget;
    inputValue(setCardInfo, name, value);
  }

  return (
    <div className='flex items-end md:items-center justify-center px-6 sm:px-7 lg:px-20 xl:px-0'>
      <form onSubmit={handleSubmit} className='space-y-5 pb-20 md:pb-0'>
        {cardInfo.map(dat=>(
          dat.children?.length ? 
            (<Label key={dat.id} className='w-1/2 inline-flex pe-2'>
              {dat.label}
              <div className="flex gap-2">
                {dat.children?.map(child=>(
                  <Input className={`${errorList[child.name] && 'error'}`} key={child.name} type={dat.type} placeholder={child.placeholder} name={child.name} id={child.name} min={child.min} max={child.max} onChange={handleInputChange} /> 
                ))}
              </div>
              {errorList[dat.name] && <p className='text-Red-400 text-[10px] sm:text-xs normal-case tracking-normal'>{errorList[dat.name]}</p>}
            </Label>)
            :
            (<Label key={dat.id} className={dat.name==='code' ? 'w-1/2 inline-flex ps-2' : 'w-full'}>
              {dat.label}
              <Input className={`${errorList[dat.name] && 'error'}`} type={dat.type} placeholder={dat.placeholder} name={dat.name} id={dat.name} onChange={handleInputChange} /> 
              {errorList[dat.name] && <p className='text-Red-400 text-[10px] sm:text-xs normal-case tracking-normal'>{errorList[dat.name]}</p>}
            </Label>)
        ))}

        <Button type='submit'>
          Confirm
        </Button>
      </form>
    </div>
  )
}
