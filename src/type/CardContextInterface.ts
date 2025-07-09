import type React from "react";
import type DataInterface from "./DataInterface";

export default interface CardContextInterface {
  cardInfo: DataInterface[],
  setCardInfo: React.Dispatch<React.SetStateAction<DataInterface[]>>,
  setIsFormClear: React.Dispatch<React.SetStateAction<boolean>>
}