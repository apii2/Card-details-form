import type DataInterface from "@/type/DataInterface";

export const data:DataInterface[] = [
  {
    id: 1,
    name: 'full_name',
    label: 'Cardholder name',
    type: 'text',
    placeholder: 'e.g. Jane Appleseed',
    value: '',
    pattern: /^[a-zA-Z' -]+$/
  },
  {
    id: 2,
    name: 'card_no',
    label: 'Card number',
    type: 'number',
    placeholder: 'e.g. 1234 5678 9123 0000',
    value: '',
    pattern: /^(?:\d{4}\s){3}\d{4}$/
  },
  {
    id: 3,
    name: 'expiry',
    label: 'Exp. date (mm/yy)',
    type: 'number',
    value: ''
  },
  {
    id: 4,
    name: 'code',
    label: 'cvc',
    type: 'number',
    placeholder: 'e.g. 123',
    value: '',
    pattern: /^\d{3}$/
  }
];