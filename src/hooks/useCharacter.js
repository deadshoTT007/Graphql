import  { gql, useQuery } from '@apollo/client'

const GET_CHARACTER = gql`
query getCharacter($id: ID!){
    character(id:$id){
        name
        id
        image
        episode{
            name
            episode
        }
    }
}
`

export const useCharacter = (id) => {
    const {data, error, loading} = useQuery(GET_CHARACTER,{
        variables:{
            id: id
        }
    })

    return { data, error, loading }
}