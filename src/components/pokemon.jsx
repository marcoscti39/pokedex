import React from 'react'

export default function Pokemon({species, sprites, types}) {
    const pokemonMainType = types[0].type.name;

    const pokemonColors ={
        fire: "rgb(255, 125, 125)",
        grass: "rgb(204, 252, 133)",
        water: "rgb(150, 150, 248)",
        normal: "whitesmoke",
        eletric: "rgb(255, 255, 134)",
        psychic: 'rgb(131, 75, 131)',
        ghost: 'rgb(43, 41, 41)',

    }

    const selectColor = () => pokemonColors[pokemonMainType] || 'rgb(204, 204, 204)'
    
    return (
        <article className="poke-container" 
            style={{backgroundColor: selectColor()}}>

            <img className='poke-img' src={sprites.front_default} alt="" />
            <strong className="poke-name">
               {species.name}
            </strong>
            <div className="poke-type-wrapper">
                {types.map((item,index) =>{
                    return <span key={index} className="poke-type">{item.type.name}</span>

                })}

            </div>

        </article>
    )
}
