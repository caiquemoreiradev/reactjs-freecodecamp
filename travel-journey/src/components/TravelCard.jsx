import PinIcon from '../assets/pin_icon.png'; 

export function TravelCard({ img, location, title, date, description }) {

    return (
        <div className="travel__card">

            <img className='card__main__image' src={img} alt="" />

            <div className="right">
                <span><img src={PinIcon} alt="" /> {location}</span>

                <h2>{title}</h2>

                <strong>{date}</strong>

                <p>{description}</p>
            </div>
        </div>
    )
}