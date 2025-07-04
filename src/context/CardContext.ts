import { createContext } from "react";
import { data } from "@/data/data";
import type CardContextInterface from "@/type/CardContextInterface";

export const CardContext = createContext<CardContextInterface>({
  cardInfo: data,
  setCardInfo: () => {},
});