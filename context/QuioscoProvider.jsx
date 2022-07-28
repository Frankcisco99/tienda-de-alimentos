import { useState, useEffect, createContext } from "react";
import axios from "axios";
const QuioscoContext = createContext()

const QuioscoProvider = ({children})=>{
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const obtenerCategorias = async ()=>{
        try {
            const url = "/api/categorias"
            const {data} = await axios(url)
            setCategorias(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = id =>{
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    useEffect(()=>{
        obtenerCategorias()
    },[])

    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])
    return(
        <QuioscoContext.Provider
        value={{categorias,
                handleClick,
                categoriaActual
        }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}

export default QuioscoContext