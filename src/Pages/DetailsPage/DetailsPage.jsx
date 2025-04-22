import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './Detailspage.css'

const DetailsPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p className="loading">Cargando...</p>;

  const carouselImages = [
    { image: character.image, name: character.name },
    ...(character.transformations || [])
  ];

  const hasMultipleImages = carouselImages.length > 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
      <div className="carousel">
        {hasMultipleImages && (
          <button className="carousel-btn left" onClick={prevSlide}>◀</button>
        )}

        <div className="carousel-content">
          <h2 className="carousel-title">
            {carouselImages[currentSlide].name}
          </h2>
          <img
            src={carouselImages[currentSlide].image}
            alt={carouselImages[currentSlide].name}
            className="carousel-img"
          />
          {hasMultipleImages && (
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          )}
        </div>

        {hasMultipleImages && (
          <button className="carousel-btn right" onClick={nextSlide}>▶</button>
        )}
      </div>

      <div className="info">
        <h1 className="character-name">{character.name}</h1>
        <p><strong>Raza:</strong> {character.race}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Ki:</strong> {character.ki}</p>
        <p><strong>Ki Máximo:</strong> {character.maxKi}</p>
        <p><strong>Afiliación:</strong> {character.affiliation}</p>
        <p className="description"><strong>Descripción:</strong> {character.description}</p>

        {character.originPlanet && (
          <div className="origin-section">
            <h2 className="origin-title">Planeta de origen: {character.originPlanet.name}</h2>
            <img
              src={character.originPlanet.image}
              alt={character.originPlanet.name}
              className="origin-img"
            />
            <p className="origin-desc">{character.originPlanet.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DetailsPage