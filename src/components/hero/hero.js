import "./hero.css";
import { useState, useEffect } from "react";

export default function Hero() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=412f9fef597240459c2762d8809dbda5'
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <section id="hero-section">
      <div className="wrapper">
        <div className="gallery-news">
          {news.slice(0, 2).map((item, index) => {
            return (
                <a href={item.url} target="_blank">
                    <div
                        key={index}
                            style={{
                            backgroundImage: `url(${item.urlToImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            }} 
                        className={`card-${index + 1}`}>

                        <h1>{item.title}</h1>
                    </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
















