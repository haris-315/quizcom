import React from "react";
import "../styles/footer.css"
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/logo.webp" alt="QuizCom Logo" className="logo" />
                </div>
                <div className="footer-links">
                    <p>
                        Developed by{" "}
                        <a href="https://haris-315.vercel.app" target="_blank" rel="noopener noreferrer">
                            Haris Khan
                        </a>
                    </p>
                    <p>
                        <a href="https://wa.me/+923150398498" target="_blank" rel="noopener noreferrer">
                            <span role="img" aria-label="WhatsApp">📞</span> +92 315 0398498
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;