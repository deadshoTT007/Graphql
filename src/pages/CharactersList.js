import React from 'react';
import './CharactersList.css'
import { useCharacters } from '../hooks/useCharacters';
import { useNavigate } from 'react-router';



const CharactersList = () =>{
    const { data, loading, error } = useCharacters()
    console.log(data,loading,error)
    const navigate =useNavigate()
    
    if ( loading ) {
        return (
            <div >LOADING .....</div>
        )
    }

    return (

        <div className='CharactersList'>
            {data.characters.results.map((char,index)=>{
                return(
                    <div style={{cursor:"pointer"}} onClick={()=>navigate(`/${char.id}`)}>
                        <img src={char.image}/>
                        <div>{char.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default CharactersList;