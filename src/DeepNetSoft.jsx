import React from 'react'
import "./DeepSoft.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const DeepNetSoft = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid nav-main">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav ">
                        <ul class="navbar-nav ms-auto nav-link">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Make A Reservation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>



<h2>APPETIZERS</h2>

                <div className="menu-items">
                    <div className="item">
                        <span>Fried Red Snapper Bites</span>
                        <span>$18</span>
                    </div>
                    <p className="desc">
                        Crispy fried snapper served with house-made Cajun sauce.
                    </p>

                    <div className="item">
                        <span>Fire Cracker Salmon</span>
                        <span>$16</span>
                    </div>
                    <p className="desc">
                        Pan-seared salmon topped with spicy seasoning.
                    </p>

                    <div className="item">
                        <span>Oxtail Pizza</span>
                        <span>$20</span>
                    </div>
                    <p className="desc">Wood-fired pizza with shredded oxtail.</p>

                    <div className="item">
                        <span>Whole Wings</span>
                        <span>$12</span>
                    </div>

                    <div className="item">
                        <span>Corn Ribs</span>
                        <span>$12</span>
                    </div>

                    <div className="item">
                        <span>Lamb Chops</span>
                        <span>$26</span>
                    </div>

                    <div className="item">
                        <span>Fried Cauliflower</span>
                        <span>$10</span>
                    </div>

                    <div className="item">
                        <span>Crab Cake</span>
                        <span>$24</span>
                    </div>
                </div>

                <h2>SALADS</h2>
                <div className="menu-items">
                    <div className="item">
                        <span>House Salad</span>
                        <span>$6</span>
                    </div>

                    <div className="item">
                        <span>Caesar Salad</span>
                        <span>$8</span>
                    </div>
                </div>






{/* ---------------- FOOTER ---------------- */}
            <footer className="footer">
                <div className="footer-box">
                    <h3>CONNECT WITH US</h3>
                    <p>+91 1234567890</p>
                    <p>info@deepnetsoft.com</p>
                </div>

                <div className="footer-box">
                    <h3>DEEP NET SOFT</h3>
                </div>

                <div className="footer-box">
                    <h3>FIND US</h3>
                    <p>Technopark, Kerala</p>
                </div>
            </footer>
        </div>


    )
}

export default DeepNetSoft
