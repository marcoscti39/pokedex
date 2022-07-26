import React,{useState, useEffect, useContext} from 'react'

const GlobalContext = React.createContext()

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}

const url = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

export default function ContextProvider({children}) {
    const [pokemons, setPokemons] = useState(null)

    useEffect(() =>{
        const pokemonPromises = Array(150).fill().map((_,index) => fetch(url(index + 1))
            .then(item => item.json()))

        const fetchData =  async () =>{
            const response = await Promise.all(pokemonPromises)
            setPokemons(response)
        }
        fetchData()
    },[])
    return (
        <GlobalContext.Provider value
        ={{
            pokemons,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
