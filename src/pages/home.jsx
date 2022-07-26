import React from 'react'
import Pokemon from '../components/pokemon'
import { useGlobalContext } from '../context'
export default function Home() {
    const {pokemons} = useGlobalContext()
    return (
        <>
            <h1 className='title'>Pokedex</h1>
            <main className="pokedex-container">
                {pokemons?.map(item =>{
                    return <Pokemon key={item.id} {...item}/>

                })}
                

            </main>

            
        </>
    )
}
