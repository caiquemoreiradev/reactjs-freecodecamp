import Logo from '../assets/logo.png';

export function Header() {

    return (
        <header>
            <img src={Logo} alt="" />

            <span>my travel journal.</span>
        </header>
    )
}