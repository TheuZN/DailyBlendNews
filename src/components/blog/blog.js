import "./blog.css";

export default function Blog() {

  return (
    <section id="blog">
      <div className="wrapper">
        <h1 className="title">Columnists</h1>
        <div className="blog-list">
            
            <div className="blog-writer">
              <a href="https://www.nytimes.com/column/maureen-dowd" target="_blank">
                <img src="/img/maureen-dowd-thumbLarge.png" alt=""/>
                <span>Maurren Dowd</span>
              </a>
            </div>

            <div className="blog-writer">
              <a href="https://www.nytimes.com/column/nicholas-kristof" target="_blank">
                <img src="/img/nicholas-kristof-thumbLarge-v2.png" alt=""/>
                <span>Nicholas Kristof</span>
              </a>
            </div>

            <div className="blog-writer">
              <a href="https://www.nytimes.com/column/paul-krugman" target="_blank">
                <img src="/img/paul-krugman-thumbLarge.png" alt=""/>
                <span>Paul Krugman</span>
              </a>
            </div>

            <div className="blog-writer">
              <a href="https://www.nytimes.com/column/thomas-l-friedman" target="_blank">
                <img src="/img/thomas-l-friedman-thumbLarge.png" alt=""/>
                <span>Thomas Friedman</span>
              </a>
            </div>

            <div className="blog-writer">
              <a href="https://www.nytimes.com/by/pamela-paul" target="_blank">
                <img src="/img/pamela-paul-new-thumbLarge-v2.png" alt=""/>
                <span>Pamela Paul</span>
              </a>
            </div>

            <div className="blog-writer">
              <a href="https://www.nytimes.com/column/ezra-klein-podcast" target="_blank">
                <img src="/img/ezra-klein-thumbLarge-v3.png" alt=""/>
                <span>Ezra Klein</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}