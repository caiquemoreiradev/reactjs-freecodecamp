import { TravelCard } from "./TravelCard";

export function Main() {

    const data = [
        {
            img: 'https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
            location: 'Japan',
            title: 'Shinjuku, Tokyo',
            date: 'April 9, 2019',
            description: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
        },

        {
            img: 'https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
            location: 'Australia',
            title: 'Sea Cliff Bridge, Clifton',
            date: 'May 8, 2017',
            description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
        },

        {
            img: 'https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            location: 'Brazil',
            title: 'Rio de Janeiro',
            date: 'January 24, 2018',
            description: 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
        }
    ]

    return (
        <section>
            {data.map(item => (
                <TravelCard
                    key={item.title}
                    title={item.title}
                    img={item.img}
                    date={item.date}
                    description={item.description}
                    location={item.location}
                />
            ))}
        </section>
    )
}