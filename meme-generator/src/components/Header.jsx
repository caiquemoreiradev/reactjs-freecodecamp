import Logo from '../assets/logo.png';

export function Header() {

    return (
        <header className='header'>
            <img src={Logo} alt="logo" />

            <p className='header-project'>React Course - Project 3</p>
        </header>
    )
}