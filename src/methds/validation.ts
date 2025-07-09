import type DataInterface from "@/type/DataInterface";
import type { StringObjectInterface } from "@/type/StringObjectInterface";
import type React from "react";

export function validation(formData:FormData, cardInfo:DataInterface[]){
  let errors:StringObjectInterface = {};
    
  cardInfo.forEach(dat=>{
    let value = (formData.get(dat.name)??'').toString().trim();

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
    else{
      if(!value){
        errors[dat.name] = "Can't be blank"
      } 
      else if(!dat.pattern?.test(value)){
        errors[dat.name] = dat.name === 'full_name' ? `Wrong format, alphabets only` : `Wrong format, numbers only`;
      }
    } 
  })
  
  return errors;
}

export function inputValue(setCardInfo:React.Dispatch<React.SetStateAction<DataInterface[]>>, name:string, value:string){
  setCardInfo(prev=>(
      prev.map(dat=>{
        if(dat.children?.length){
          return {
            ...dat,
            children: dat.children?.map(child=>{
              return (child.name === name) ? {
                ...child,
                value: value
              }: child
            })
          }
        }
        return (dat.name === name) ? {
          ...dat,
          value : value
        }: dat
      })
    ))
}