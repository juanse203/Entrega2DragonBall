import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CardCharacter from '../../Components/CardCharacter/CardCharacter'

const FilterPage = () => {
    const { gender } = useParams();
    const [arrayCaracteres, setArrayCaracteres] = useState([]);

    const fetchCharacters = async () => {
        await fetch(`https://dragonball-api.com/api/characters`)
            .then((response) => response.json())
            .then((data) => {
                const filtrados = data.items.filter((items) => items.gender === gender);
                setArrayCaracteres(filtrados);
                console.log(filtrados)
            })
            .catch((error) => console.error('Error:', error));
    };

    useEffect(() => {
        fetchCharacters();
    }, [gender]);

    return (
        <main>
            {arrayCaracteres.map((items) => (
                <Link to={`/details/${items.id}`} key={items.id}>
                    <CardCharacter key={items.id} items={items} />
                </Link>
            ))}
        </main>
    );
};

export default FilterPage;