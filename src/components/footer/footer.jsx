import React from "react";
import './footer.css'


export default function Footer() {
    return (
        <footer className="all-footer">
            <p className="footer-heart">
                Coded with
                <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                    <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"></img>
                </g-emoji> by <a href="https://github.com/JesusArtz/">Jesus</a>
            </p>
        </footer>
    );
};