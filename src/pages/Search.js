import React, {useState} from 'react'
import { useLazyQuery, gql } from '@apollo/client'


const Search = () => {

    const [ name, setName ] = useState('')
    console.log(name,"name")

    const GET_LOCATIONS = gql`
    query GetCharacterLocation($name: String!){
        characters(filter:{
            name:$name
        })
        {
            results{
                location{
                    name
                }
            }
        }
    }
    `
    
        const [locationHandler, {data,loading,error}] = useLazyQuery(GET_LOCATIONS,{
            variables:{
                name
            }
        })

        console.log(data,"search")
    

    return (
        <div>
            <input onChange={(e)=>setName(e.target.value)} type="text"/>
            <button onClick={()=>locationHandler()}>Search</button>
            {data?
             data.characters.results.length>0 && data.characters.results.map((result,index)=>{
                return(
                    <div>{result.location.name}</div>
                )
            }):""
        }
            
        </div>
    )
}

export default Search
