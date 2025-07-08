import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { useContext, useState } from 'react';
import { CardContext } from '@/context/CardContext';
import type { ErrorInterface } from '@/type/ErrorInterface';

export default function Form() {

  const {cardInfo, setCardInfo} = useContext(CardContext);
  const [errorList, setErrorList] = useState<ErrorInterface>({});

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setCardInfo(prev=>(
      prev.map(dat=>{
        if(dat.children?.length){
          return {
            ...dat,
            children: dat.children?.map(child=>({
              ...child,
              value: (formData.get(child.name)??'') as string
            }))
          }
        }

        return {
          ...dat,
          value : (formData.get(dat.name)??'') as string
        }
      })
    ))

    let errors:ErrorInterface = {};
    
    cardInfo.forEach(dat=>{
      if(dat.children?.length){
        dat.children?.forEach(child=>{
          if(!formData.get(child.name)){
            errors[child.name] = "Can't be blank"
          }  
          if(errors[child.name]){
            errors[dat.name] = "Can't be blank"
          }
        })
      }

      if(!dat.children?.length){
        if(!formData.get(dat.name)){
          errors[dat.name] = "Can't be blank"
        } 
        else if(!dat.pattern?.test((formData.get(dat.name)??'') as string)){
          errors[dat.name] = dat.name === 'full_name' ? `Wrong format, alphabets only` : `Wrong format, numbers only`;
        }
      } 
    })
    
    setErrorList(errors);
  }

  // function handleInputChange(){
    
  // }

  return (
    <div className='flex items-end md:items-center justify-center px-6 sm:px-7 lg:px-20 xl:px-0'>
      <form onSubmit={handleSubmit} className='space-y-5 pb-20 md:pb-0'>
        {cardInfo.map(dat=>(
          dat.children?.length ? 
            (<Label key={dat.id} className='w-1/2 inline-flex pe-2'>
              {dat.label}
              <div className="flex gap-2">
                {dat.children?.map(child=>(
                  <Input className={`${errorList[child.name] && 'error'}`} key={child.name} type={dat.type} placeholder={child.placeholder} name={child.name} id={child.name} min={child.min} max={child.max} /> 
                ))}
              </div>
              {errorList[dat.name] && <p className='text-Red-400 text-[10px] sm:text-xs normal-case tracking-normal'>{errorList[dat.name]}</p>}
            </Label>)
            :
            (<Label key={dat.id} className={dat.name==='code' ? 'w-1/2 inline-flex ps-2' : 'w-full'}>
              {dat.label}
              <Input className={`${errorList[dat.name] && 'error'}`} type={dat.type} placeholder={dat.placeholder} name={dat.name} id={dat.name} /> 
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
