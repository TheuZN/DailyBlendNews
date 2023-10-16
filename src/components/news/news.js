import Entertainment from '../entertainment/entertainment';
import Sports from '../sports/sports';
import Business from '../business/business';
import Technology from '../technology/technology';


import "./news.css";

export default function News() {

  return (
    <section id="news-section">
      <div className="wrapper">
        <div className="news-wrapper">
            <Business />
            <Sports />
            <Entertainment />
            <Technology />
        </div>
      </div>
    </section>
  );
}

