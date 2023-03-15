import { Card } from "./Card";

export function Main() {

    const data = [
        {
            cardImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
            description: 'Frontend lessons with Mark',
            location: 'USA',
            price: '$120',
            stars: '4.3'
        },

        {
            cardImage: 'https://images.unsplash.com/photo-1664575603992-0f17b771dd91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            description: 'Game dev lessons with Alissa',
            location: 'France',
            price: '$100',
            stars: '5.0'
        },

        {
            cardImage: 'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            description: 'Mobile lessons with John',
            location: 'Brazil',
            price: '$80',
            stars: '4.8'
        }
    ]

    return (
        <section className="main">
            {data.map(item => (
                <Card
                    key={item.description}
                    cardImage={item.cardImage}
                    description={item.description}
                    location={item.location}
                    price={item.price}
                    stars={item.stars}
                />
            ))}
        </section>
    )
}