import React from 'react'
import { URL } from "../../../utils/constants/URL";
import { useEffect , useState } from 'react';
import axios from 'axios';

function Home(){
  let articles = [] ; 
  console.log("Entree Hame() ")

const recupAllArticles: any = async () => {
  // e.preventDefault()
try {
  console.log("Entree Axios")
  const responses = await axios.get(URL.ALL_ARTICLES)
  // Pour récuperer 1 element faut mettre l'elemenet axios.get(URL.ALL_ARTICLES , ID ) 
  console.log(responses.data)
  articles = responses.data

  console.log(articles[1].name)

} catch (e) {
  console.log(e)
}
}
recupAllArticles()


  return (
    <div>
      <h1> Home Page </h1>
      <div className='product'>
      { articles.map( article => <p>{article.name }</p> )}
        
      </div>
    </div>
  )
}

export default Home

