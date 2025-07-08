export default interface DataInterface {
  id: number,
  name: string,
  label: string,
  type: string,
  placeholder?: string,
  value?: string,
  pattern?: RegExp,
  min?: number,
  max?: number,
  children?: Omit<DataInterface, 'id'|'label'|'children'|'type'>[]
}