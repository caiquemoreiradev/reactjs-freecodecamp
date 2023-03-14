export function BusinessCard() {

    return (
        <div className="business__card">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb663ee5-af56-43fc-a219-2e7bf85acd60/d5zdsoa-ea8e542f-9c89-4e10-bfe9-5c342dfc3fb3.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiNjYzZWU1LWFmNTYtNDNmYy1hMjE5LTJlN2JmODVhY2Q2MFwvZDV6ZHNvYS1lYThlNTQyZi05Yzg5LTRlMTAtYmZlOS01YzM0MmRmYzNmYjMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5MraKh2ltlgwNFogxjA8p49RKqodvoyHqROnAmo21p0" alt="" />

            <div className="people__info">
                <strong>Caique Moraes</strong>
                <span className="position">Frontend developer</span>
                <span>caique@email.com</span>
            </div>

            <div className="actions">
                <button>Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>

            <div className="about">
                <strong>About</strong>

                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

            <div className="about">
                <strong>Interests</strong>

                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>

            <div className="footer">
                @cmoraes 2023
            </div>
        </div>
    )
}