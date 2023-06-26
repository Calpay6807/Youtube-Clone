import {createContext, useState, useEffect} from 'react'
import axios from "axios"
import {options} from "../utils/constants.jsx"

// context yapisinin temelini oluşturna
export const YoutubeContext = createContext();

// contexte tutulan verileri bütün uygulamaya sağlayacak
export const ContextProvider = ({children}) =>{
    const[selectedCategory, setSelectedCategory] = useState("New")
    const[searchResult, setSearchResult] = useState(null)
   

    //SelectedCategory statini değişimini izleme
    useEffect(() => {
// başlangiçta null yapsın bu sayede loading koyabiliriz
        setSearchResult(null)
        //video verisini çek
        fetchCategory(selectedCategory)
    }, [selectedCategory])

    //Youtubedeb verileri çekmeye çalışan kodlar
const fetchCategory = (category) => {
axios.get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
.then((res) => setSearchResult(res.data.contents))
}

return(
    <YoutubeContext.Provider 
    value={{selectedCategory, setSelectedCategory, searchResult}}>
    {children}
    </YoutubeContext.Provider>
)
}
