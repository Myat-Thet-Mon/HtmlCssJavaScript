import logoImage from '../images/littleLemonLogo.png';

export default function HomePage() {
    return (
        <div className="homePage">

            <header className='headerOfHomePg'>
                <div className='logoImgOfHomePg'>
                <img src={logoImage} alt="Little Lemon Logo" />
                </div>
                <nav className='navLinks'>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="menu.html">About</a></li>
                        <li><a href="book.html">Menu</a></li>
                        <li><a href="about.html">Reservation</a></li>
                        <li><a href="menu.html">Order Online</a></li>
                        <li><a href="book.html">LogIn</a></li>
                    </ul>
                </nav>
            </header>
            
            <main>
               
            </main>

            <footer>
                <div>
                </div>
            </footer>


        </div>
    )
}