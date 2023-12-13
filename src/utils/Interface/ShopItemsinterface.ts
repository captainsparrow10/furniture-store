export interface shopItems {
  _id: string
  name: string
  price: string
  tags : {
    _id: string,
    name:string
  }[]
  colors: {
    _id:string,
    name : string,
    urlList: string[]
  }[]
}