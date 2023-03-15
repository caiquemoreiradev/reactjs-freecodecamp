import HeroImage from '../assets/hero.png';

export function Hero() {

    return (
        <section className='hero'>

            <img src={HeroImage} alt="hero airbnb experiences" />

            <div className='hero__info'>
                <h1>Online Experiences</h1>

                <span>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</span>
            </div>
        </section>
    )
}