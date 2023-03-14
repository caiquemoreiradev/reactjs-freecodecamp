import ReactBackgroundLogo from '../assets/reactjs-icon 2.png'

export function MainContent() {

    return (
        <main>

            <div className="left">

                <h1>Fun facts about React</h1>

                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>

            </div>

            <img
                src={ReactBackgroundLogo} alt="react background_logo"
                style={{ width: '200px' }}
            />
        </main>
    )
}