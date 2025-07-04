import { useState } from 'react'
import type DataInterface from './type/DataInterface'
import { data } from './data/data';
import Form from './components/Form';
import { CardContext } from './context/CardContext';
import CardImage from './components/CardImage';

export default function App() {
  const [cardInfo, setCardInfo] = useState<DataInterface[]>(data);

  return (
    <CardContext.Provider value={{cardInfo, setCardInfo}}>
      <main className='min-h-dvh grid grid-rows-[35%_1fr] md:grid-rows-1 md:grid-cols-[auto_1fr] md:gap-23 lg:gap-40'>
        <CardImage />
        <Form />
      </main>
    </CardContext.Provider>
  )
}