import logoImage from '../images/littleLemonLogo.png';
import img2 from '../images/img3.jpg';
import img1 from '../images/greek-salad.jpg';
import img3 from '../images/img5.jpg';
import mainImg from '../images/img4.jpg';
import footerLogo from '../images/Asset 20@4x.png';
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

            <main className='mainOfHome'>
                <article className='articleOfMain'>
                    <h1 className='title'>Little Lemon</h1>
                    <h1>Chicago</h1>
                    <p className='lines'>We have a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className='reserveTableBtn'>Reserve a Table</button>
                </article>
                <div className='mainImg'>
                    <img src={mainImg} alt="Little Lemon Logo" />
                </div>
                <div className='bodyPart'>

                    <div className='bodyTitleBar'>
                        <h1 className='bodyTitle'>This weeks specials!</h1>
                        <button className='reserveTableBtn'>Online Menu</button>
                    </div>

                    <div className='MenuCards'>
                        <div className='card'>
                            <img src={img1} alt="Little Lemon Logo" />
                            <div className='menuName-Price'>
                                <h3 className='menuName'>Green Salad</h3>
                                <h3 className='price'>$ 12</h3>
                            </div>
                            <p className='textOfMenu'>The famous greek salad of cripsy lettuce,peppers,olives and our chicago style cheees garnished with crunchy garlic.</p>
                            <button className='orderBtn'>
                                Order a delivery
                            </button>
                        </div>

                        <div className='card'>
                            <img src={img2} alt="Little Lemon Logo" />
                            <div className='menuName-Price'>
                                <h3 className='menuName'>Green Salad</h3>
                                <h3 className='price'>$ 12</h3>
                            </div>
                            <p className='textOfMenu'>The famous greek salad of cripsy lettuce,peppers,olives and our chicago style cheees garnished with crunchy garlic.</p>
                            <button className='orderBtn'>
                                Order a delivery
                            </button>
                        </div>

                        <div className='card'>
                            <img src={img3} alt="Little Lemon Logo" />
                            <div className='menuName-Price'>
                                <h3 className='menuName'>Green Salad</h3>
                                <h3 className='price'>$ 12</h3>
                            </div>
                            <p className='textOfMenu'>The famous greek salad of cripsy lettuce,peppers,olives and our chicago style cheees garnished with crunchy garlic.</p>
                            <button className='orderBtn'>
                                Order a delivery
                            </button>
                        </div>

                    </div>

                </div>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={footerLogo} alt="Little Lemon Logo" />
                    </div>

                    <div className="footer-social">
                        <ul style={{ listStyle: 'none' }}>
                            <li><a href="https://facebook.com"><i className="material-icons">facebook</i></a></li>
                            <li><a href="https://twitter.com"><i className="material-icons" style={{ color: '#495E57' }}>email</i></a></li>
                            <li><a href="https://instagram.com"><i className="material-icons" style={{ color: '#495E57' }}>message</i></a></li>
                        </ul>
                    </div>
                </div>

            </footer>


        </div>
    )
}