import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardCharacter from '../../Components/CardCharacter/CardCharacter'

const DetailsPage = () => {

  const [character, setCharacter] = useState({})

  let {id} = useParams()

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters/' + id)
      .then(response => response.json())
      .then(data => setCharacter(data))
  }, [id]);

  return (
    <CardCharacter items={character}/>
  )
}

export default DetailsPage