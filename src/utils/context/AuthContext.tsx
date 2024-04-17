import React , { createContext , useState , useEffect} from 'react'
import { URL } from "../constants/URL.js"
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
        console.log("Salah")
        // API 
        setIsLoading(true) 
        try{
            const { data, status } = await axios.post(URL.USER_SIGN , dataForm)
            console.log(data)

            if(status === 200){
                // Mettre à jours l'etat du state (user) avec les données de l'utilisateur
                setUser(data)

                // Stockez les données de l'utilisatuer dans le asynctorage

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