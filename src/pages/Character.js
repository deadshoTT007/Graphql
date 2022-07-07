import React from 'react'
import { useCharacter } from '../hooks/useCharacter'
import { useParams } from 'react-router'

const Character = () => {

    const {id} =useParams()

    const { data, loading, error } = useCharacter(id)
    console.log(data, loading, error,"charData")

    if ( loading ) {
        return(
            <div>LOADING....</div>
        )
    }

    return (
        <div>
        <div>Character Name: {data.character.name}</div>
        <br></br>
        {data.character.episode.map((ep,index)=>{
            return(
                <div>Ep Name: {ep.name}</div>
            )
        })}
        </div>
    )
}

export default Character
