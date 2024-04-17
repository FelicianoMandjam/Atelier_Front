import React , { createContext , useState , useEffect} from 'react'
import { URL } from "../constants/URL"
import axios from 'axios'

// Créez un contexte d'authentification 
export const AuthContext = createContext() 

export const AuthProvider = ({ children }) => {
    // L'Etat pour suivre si l'authentifiacation est en cours
    const [ isLoading , setIsLoading ] = useState(false)

    // Etat pour stocker les informations de l'utilisateur connecté
    const [user , setUser] = useState(null)

    // Fonction pour gérer l'authentification de l'utilisateur
    const login = async (dataForm) => {
        console.log("Entree dans login")
        console.log(dataForm)
        
        // API 
        setIsLoading(true) 
        try{
            console.log("bdckjdsb")
            const { data, status } = await axios.post(URL.USER_SIGN , dataForm)
            if(status === 200){
                // Mettre à jours l'etat du state (user) avec les données de l'utilisateur
                setUser(data)
                console.log(user)

                // Stockez les données de l'utilisatuer dans le local Storage
                
                const userSend = localStorage.setItem( "user" , JSON.stringify(user));
                // console.log(localStorage.getItem("user"))
                const recupUser = localStorage.getItem("user");
                const userTransformObj = JSON.parse(recupUser);
                
                // Met isLoading à false apres une authentification
                setIsLoading(false)
            }
        }catch(e){
            console.log(e)
            setIsLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ login , user , isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}