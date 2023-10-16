import "./header.css";
import React, { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState("/img/menu.svg");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
        setMenuIcon("/img/menu.svg");
        } else {
        setMenuIcon("/img/close.svg");
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        setMenuIcon("/img/menu.svg");
    };

    return (
        <header>
            <div className="wrapper">
                <div className="menu">

                    <div className="header-info">
                            <div className="header-logo">
                                <div>
                                    <a href="">
                                        <img src="/img/logo.svg" alt="Logo DailyBlend News"/>
                                        <span>DailyBlend <br/> News</span>
                                    </a>
                                </div>
                            </div>


                            <div className="header-menu">
                                <ul>
                                    <li><a href="#entertainment-section">Entertainment</a></li>
                                    <li><a href="#sports-section">Sports</a></li>
                                    <li><a href="#business-section">Business</a></li>
                                    <li><a href="#technology-section">Technology</a></li>
                                </ul>
                            </div>
                    </div>

                    <div className="header-menu-mobile">
                        <button onClick={toggleMenu}>
                            <img src={menuIcon} alt="Menu Mobile" />
                        </button>
                    </div>

                    <div className="header-social">
                        <a href=""><img src="/img/face-ico.svg" alt="Link Facebook"/></a>
                        <a href=""><img src="/img/insta-ico.svg" alt="Link Instagram"/></a>
                        <a href=""><img src="/img/twitter-ico.svg" alt="Link Twitter"/></a>
                    </div>
                </div>

                {isOpen && (
                    <div className="mobile-nav">
                        <ul>
                            <li>
                                <a onClick={closeMenu} href="#entertainment-section">Entertainment</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="#sports-section">Sports</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="#business-section">Business</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="#technology-section">Technology</a>
                            </li>
                        </ul>

                        <div className="header-social-mobile">
                            <a href=""><img src="/img/face-ico.svg" alt="Link Facebook"/></a>
                            <a href=""><img src="/img/insta-ico.svg" alt="Link Instagram"/></a>
                            <a href=""><img src="/img/twitter-ico.svg" alt="Link Twitter"/></a>
                        </div>
                    </div>
                    )}
            </div>
        </header>
    )     
}
