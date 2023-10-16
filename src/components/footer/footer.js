import "./footer.css";

export default function Footer() {

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <a href="#">
              <img src="/img/logo.svg" alt="Logo DailyBlend News"/>
              <span>DailyBlend <br/> News</span>
            </a>   
          </div>
          <div className="footer-copy">
              <span>© Copyright DailyBlend News</span>
          </div>
        </div>
      </div>
    </footer>
  );
}