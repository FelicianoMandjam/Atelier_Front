import React from 'react'
import { useState } from 'react'
import { URL } from "../../utils/constants/URL";
import axios from 'axios';


function AddFormulaire() {
  // Faire une interface pour le useState 
  const [article , setArticle] = useState({
    name : "",
    category : "",
    brand : "" , 
    price : "" ,
    content : "" , 
    stock : 0 , 
    online : true , 
    picture: "" ,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== "picture") {
      setArticle({ ...article, [name]: value });
    }else{
      setArticle({...article , [name]: [{img : value }] })
    }

    console.log(article)

  // Function pour la checkbox
  // function isOnline(e: React.ChangeEvent<HTMLInputElement>){
  //   e.target.checked
  }
  // Function pour l'envoie du formulaire

  const handleSubmit = async (e) => {
    console.log("Entree handleSubmit")
    e.preventDefault();
    try{
    console.log("Entree try")

        // console.log(URL.USER_SIGNUP)
        console.log(URL.ARTICLE_ADD)
        console.log(article)
        const response = await axios.post( URL.ARTICLE_ADD, article)
        console.log(response)

    }catch(e){
        console.log(e);
    }
  }


  return (
    <div>
        <h1>Création de article</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleChange} value={article.name} type="text" name="name" required/>
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input onChange={handleChange} value={article.category} type="text" name="category" required/>
        </div>

        <div>
          <label htmlFor="brand">Brands</label>
          <input onChange={handleChange} value={article.brand} type="text" name="brand" required/>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input onChange={handleChange} value={article.price} type="number" name="price" required/>
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea onChange={handleChange} value={article.content} name="content" required></textarea>
        </div>
        
        <div>
          <label htmlFor="stock">Stock</label>
          <input onChange={handleChange} value={article.stock} type="number" name="stock" />
        </div>
{/* 
        <fieldset>
        <legend>Disponibilité du produit.</legend>
        <div>
          <label htmlFor="online">Disponible</label>
          <input onChange={handleChange} value={article.name} type="checkbox" name="online" id="online" value="online" required/>
        </div>
        </fieldset> */}

        <div>
          <label htmlFor="URL_image">L'URL de l'image</label>
          <input name='picture' onChange={handleChange} type="url" required/>
        </div>
        
        <button type="submit" value="Submit">Envoie</button>
        {/* <button type="submit"> Ajouter </button> */}
      </form>
    </div>
  )
}

export default AddFormulaire;

/* name : { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  content: { type: String, required: true },
  stock: { type: Number, required: true },
  online: { type: Boolean, required: true },
  avis: [{ type: mongoose.Schema.Types.ObjectId, ref: "Avis" }],
  picture: [
    {
      img: { type: String, required: true },
      img1: { type: String },
      img2: { type: String },
      img3: { type: String },
      img4: { type: String },
    },
  ],*/ 
