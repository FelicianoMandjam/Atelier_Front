import React from 'react'
import { URL } from "../../../utils/constants/URL";
import { useEffect , useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import articles, * as ACTIONS from "../../../redux/reducers/article"
import { allArticles } from '../../../services/selector/articles.selector';

function Home(){
 const dispatch = useDispatch(); 

 const store = useSelector((state) => allArticles(state))

 useEffect(()=>{

  dispatch(ACTIONS.FETCH_START());

  const fetchArticles = async ()=>{
          console.log("fetchArticles")
        try {
          console.log("Entree try - Axios")
          const { data , status } = await axios.get(URL.ALL_ARTICLES)
          
          dispatch(ACTIONS.FETCH_SUCCES(data))
          console.log("Entrée status")
          console.log(status)
          console.log(store)
    } catch (e) {
          console.log(e)
          dispatch(ACTIONS.FETCH_FAILURE())
    }
  };
  fetchArticles()
 },[])



  return (
    <div>
      <h1> Home Page </h1>
      {store.map((article , index) => (
        <div className='card-Product' key={index}>
          <fieldset>
          <p> {article.brand} </p>
          <p> {article.name} </p>
          <p> {article.price +" €"} </p>
          <p> {article.content} </p>
          <img 
          src={article.picture[0].img} 
          alt="Image NA" 
          width={100} />
          </fieldset>
        </div>
      ))}
    </div>
  )
}

export default Home



// let articles = [] ; 
// console.log("Entree Hame() ")

// const recupAllArticles: any = async () => {
// // e.preventDefault()
// try {
// console.log("Entree Axios")
// const responses = await axios.get(URL.ALL_ARTICLES)
// // Pour récuperer 1 element faut mettre l'elemenet axios.get(URL.ALL_ARTICLES , ID ) 
// console.log(responses.data)
// articles = responses.data
// console.log(articles[0].name)
// // const afficheArticle = articles.map(article => console.log(article.map))
// // console.log(afficheArticle)
// } catch (e) {
// console.log(e)
// }
// }
// recupAllArticles()