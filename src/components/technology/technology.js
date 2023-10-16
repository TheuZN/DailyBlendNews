import "./technology.css";
import { useState, useEffect } from "react";

export default function Technology() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=412f9fef597240459c2762d8809dbda5'
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <section id="technology-section">
      <div className="wrapper">
        <h1 className="title">Technology</h1>
      {news.slice(0, 6).map((item) => {
        return (
          <div className="card-small">
            <a href={item.url} target="_blank">

                <div className="card-img">
                  <img src={item.urlToImage}/>
                </div>

                <div className="card-text">
                  <h2>{item.title}</h2>
                  <span>{item.publishedAt}</span>
                </div>
            </a>
          </div>
        );
        })}        
      </div>
    </section>
  );
}