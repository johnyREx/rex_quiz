import "./Footer.css";

const Footer = () => {
    return (
        <footer className="copyright">
            <p>
                {" "}
                Copyright © 2024{" "}
                <a
                 className="copyright-user-link"
                 href="https://x.com/TheJohnyRex"
                >
                    @TheJohnyRex
                </a>
                .All Rights Reserved{" "}
            </p>
        </footer>
    );
};

export default Footer;
