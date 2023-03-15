import StarIcon from '../assets/star.png';

export function Card({ cardImage, stars, description, location, price }) {

    return (
        <div className="card">

            <img
                className='experience_image'
                src={cardImage} alt={description}
            />

            <p className='avaliation'>
                <img src={StarIcon} alt="" />
                {stars} (6) {location}
            </p>

            <p>{description}</p>

            <span><strong>From {price} </strong>/ person</span>
        </div>
    )
}