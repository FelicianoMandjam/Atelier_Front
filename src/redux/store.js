import { configureStore } from "@reduxjs/toolkit"
import Articles from "./reducers/article"


export default configureStore({
    reducer:{
        articles : Articles
    }
})