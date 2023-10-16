import '../index.css';

import { useEffect } from 'react';

import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import News from '../components/news/news';
import Blog from '../components/blog/blog';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';

export default function HomePage() {
    const toTop = () => {
        window.scrollTo(0, 0);    
    }

    const noInTop = () => {
        const arrowTop = document.getElementById("arrow-top");

        if (window.scrollY > 10) {
            arrowTop.style.display = "block";
        } else {
            arrowTop.style.display = "none";
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", noInTop);
        return () => {
            window.removeEventListener("scroll", noInTop);
        };
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <News />
            <Blog />
            <Banner />
            <Footer />
            <button onClick={toTop}>
                <img id='arrow-top' src='./img/arrow.svg' alt="Arrow to top" />
            </button>
        </div>
    );
}