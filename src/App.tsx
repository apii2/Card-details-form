import { useState } from 'react'
import type DataInterface from './type/DataInterface'
import { data } from './data/data';
import Form from './components/Form';
import { CardContext } from './context/CardContext';
import CardImage from './components/CardImage';
import ThankYou from './components/ThankYou';

export default function App() {
  const [cardInfo, setCardInfo] = useState<DataInterface[]>(data);
  const [isFormClear, setIsFormClear] = useState<boolean>(false);

  return (
    <CardContext.Provider value={{cardInfo, setCardInfo, setIsFormClear}}>
      <main className='min-h-dvh grid grid-rows-[35%_1fr] md:grid-rows-1 md:grid-cols-[auto_1fr] md:gap-23 lg:gap-40'>
        <CardImage />
        {!isFormClear ? 
          <Form /> : 
          <ThankYou />}
      </main>
    </CardContext.Provider>
  )
}