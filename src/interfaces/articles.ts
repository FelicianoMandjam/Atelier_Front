import User from "./User"

interface Articles {
    name:string,
    category:string,
    brand:string,
    price:number,
    content:string,
    stock:number,
    online:boolean,
    avis?:Avis,
    picture:[{
        img:string,
        img1?:string,
        img2?:string,
        img3?:string,
        img4?:string,
    }],
    
}

export type Avis = {
stars : string , 
content : string,
user : User ,
}

export type RootState = {
    articles : {
        data: Articles[]
    }
}

export type initialArticleType = {
    data: Articles[] , 
    loading : (boolean | null ) , 
    error: (boolean) 
}