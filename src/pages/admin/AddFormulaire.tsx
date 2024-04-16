import React from 'react'
import { useState } from 'react'

function AddFormulaire() {
  // Faire une interface pour le useState 
  const [article , setArticle] = useState({
    name : "",
    category : "",
    brand : "" , 
    price : "" ,
    content : "" , 
    stock : "" , 
    online : "" , 
    picture: [] ,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });

  // Function pour la checkbox
  // function isOnline(e: React.ChangeEvent<HTMLInputElement>){
  //   e.target.checked
  }
  // Function pour l'envoie du formulaire

  function sendForm(e) {
    e.preventDefault()
    console.log(article)
  }



  return (
    <div>
        <h1>Création de article</h1>
      <form onSubmit={sendForm}>

        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleInputChange} value={article.name} type="text" name="name" required/>
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input onChange={handleInputChange} value={article.category} type="text" name="category" required/>
        </div>

        <div>
          <label htmlFor="brand">Brand</label>
          <input onChange={handleInputChange} value={article.brand} type="text" name="brand" required/>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input onChange={handleInputChange} value={article.price} type="number" name="price" required/>
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea onChange={handleInputChange} value={article.content} name="content" required></textarea>
        </div>
        
        <div>
          <label htmlFor="stock">Stock</label>
          <input onChange={handleInputChange} value={article.stock} type="number" name="stock" />
        </div>

        <fieldset>
        <legend>Disponibilité du produit.</legend>
        <div>
          <label htmlFor="online">Disponible</label>
          <input onChange={handleInputChange} value={article.name} type="checkbox" name="online" id="online" value="online" required/>
        </div>
        </fieldset>

        <div>
          <label htmlFor="URL_image">L'URL de l'image</label>
          <input name='picture' onChange={handleInputChange} value={article.picture} type="url" required/>
        </div>
        
        <button type="submit" value="Submit">Envoie</button>
        {/* <button type="submit"> Ajouter </button> */}
      </form>
    </div>
  )
}

export default AddFormulaire;
