import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


import React, { useState } from "react";
import "./menu.css";
import deepNetLogo from "./assets/deepNetLogo.png";

const MenuPage = () => {
    const [activeTab, setActiveTab] = useState("food");

    return (
        <div className="menu-container">

            {/* ---------------- HEADER ---------------- */}
            <header className="header">


                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid nav-main">

                        <div className="logo-wrapper">
                            <div className="logo d-flex align-items-center">
                                <img src={deepNetLogo} alt="DeepNetSoft Logo" className="logo-img" />
                                <span className='hide-text'>
                                    <span style={{ color: "gold" }}>DEEP</span> NET <br />
                                    <span style={{ color: "gray" }}>SOFT</span>
                                </span>
                            </div>
                        </div>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto nav-link">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Make A Reservation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>

            </header>

            {/* ---------------- HERO SECTION ---------------- */}
            <section className="hero">
                <h1>MENU</h1>
                <p>
                    Explore a fine mix of mouth-watering food, drinks, and brunch.
                    Choose a category below.
                </p>
            </section>


            <div className="tabs">
                <button
                    className={activeTab === "food" ? "active" : ""}
                    onClick={() => setActiveTab("food")}
                >
                    FOOD
                </button>
                <button
                    className={activeTab === "drinks" ? "active" : ""}
                    onClick={() => setActiveTab("drinks")}
                >
                    DRINKS
                </button>
                <button
                    className={activeTab === "brunch" ? "active" : ""}
                    onClick={() => setActiveTab("brunch")}
                >
                    BRUNCH
                </button>
            </div>
            <section className="appetizers">
                <div className="menu_box">
                    <img src="src/assets/kebabe.png" alt="" className='food-img1' />
                    <img src="src/assets/food1.png" alt="" className='food-img2' />
                    <img src="src/assets/food2.png" alt="" className='food-img3' />
                    <div className='appetizers-title'>
                        <div className='line1'></div>
                        <h1 class="section-title">APPETIZERS</h1>
                        <div className='line2'></div>
                    </div>
                    <div className="menu_text">

                        <div className="menu_item" >
                            <div className="item">
                                <span>Fried Red Snapper Bites</span>
                                <span>$18</span>
                            </div>
                            <p className="desc">
                                Juicy fried red snapper pieces, served with a house-made Cajun mayo and lemon wedges for a spicy, tangy finish.
                            </p>
                        </div>

                        <div className="menu_item">
                            <div className="item">
                                <span>Corn Ribs</span>
                                <span>$12</span>
                            </div>
                            <p className="desc">
                                Tender corn cut into rib-style wedges, fried and brushed with a house ranch dressing and herbs.
                            </p>
                        </div>

                        <div className="menu_item">
                            <div className="item">
                                <span>Fire Cracker Salmon</span>
                                <span>$16</span>
                            </div>
                            <p className="desc">
                                Pan-seared salmon topped with a bold, honey-lime glaze and crushed red peppers for an explosion of flavour.
                            </p>
                        </div>

                        <div className="menu_item">
                            <div className="item">
                                <span>Lamb Chops</span>
                                <span>$26</span>
                            </div>
                            <p className="desc">
                                Grilled lamb chops marinated overnight in herbs and spices, served with chimichurri sauce.
                            </p>
                        </div>

                        <div className="menu_item">
                            <div className="item">
                                <span>Oxtail Pizza</span>
                                <span>$20</span>
                            </div>
                            <p className="desc">
                                A gourmet pizza with tender oxtail, fresh onions, roasted peppers, and special herbs baked to perfection.
                            </p>
                        </div>

                        <div className="menu_item">
                            <div className="item">
                                <span>Fried Cauliflower</span>
                                <span>$10</span>
                            </div>
                            <p className="desc">
                                Golden fried cauliflower, seasoned and tossed with spicy lemon herbs. Served with creamy dipping sauce.
                            </p>
                        </div>

                        <div className="menu_item">
                            <div className="item">
                                <span>Whole Wings</span>
                                <span>$12</span>
                            </div>
                            <p className="desc">
                                Six marinated chicken wings, seasoned with our signature spice blend and fried until crispy and golden.
                            </p>
                        </div>

                        <div className="menu_item">
                            <div className="item">
                                <span>Crab Cake</span>
                                <span>$24</span>
                            </div>
                            <p className="desc">
                                Hand-made crab cakes packed with blue crab meat, pan-seared and served with Cajun remoulade.
                            </p>
                        </div>

                        <div className="menu_item">
                            <div className="item">
                                <span>Crispy Brussel Sprouts</span>
                                <span>$8</span>
                            </div>
                            <p className="desc">
                                Hand-made crab cakes packed with blue crab meat, pan-seared and served with Cajun remoulade.
                            </p>
                        </div>

                        <div className="menu_item">

                        </div>



                    </div>

                    <div className="salad-container">
                        <div className="salad-box">
                            <div className='salad-img'>
                                <img src="src/assets/food3.png" alt="" className='food-img4' />
                            </div>

                            <h1 className="salad-head">SALAD</h1>
                            <p>Option to Add Protein</p>
                            <div className="uline-container">
                                <div></div>
                            </div>

                            <div className="menu_text">

                                <div className="menu_item">
                                    <div className="salad_item">
                                        <span>HOUSE SALAD</span>
                                        <span>$6</span>
                                    </div>
                                </div>

                                <div className='salad-vline'></div>

                                <div className="menu_item">
                                    <div className="salad_item">
                                        <span>CAESAR SALAD</span>
                                        <span>$8</span>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>


            </section >

            <section className='footer'>

                <div className='footer-box box-one'>
                    <h4>CONNECT WITH US</h4>
                    <p><i class="bi bi-person-lines-fill icon"></i>&nbsp;&nbsp; +91 1234567890</p>
                    <p><i class="bi bi-envelope icon"></i> &nbsp;&nbsp;info@deepnetsoft.com</p>
                </div>

                <div className='footer-box box-two'>
                    <div className='footer-logo'>
                        <img src={deepNetLogo} alt="DeepNetSoft Logo" className="footer-logo-img" />
                    </div>
                    <h4><span style={{ color: "gold" }}>DEEP</span> NET
                        <span style={{ color: "gray" }}> SOFT</span></h4>
                </div>

                <div className='footer-box box-three'>
                    <h4>FIND US</h4>
                    <p><i class="bi bi-geo-alt icon"></i>&nbsp;&nbsp; Technopark, Kerala</p>
                </div>

            </section>
            <footer className='foot'>
                <p></p>
            </footer>




        </div >
    );
};

export default MenuPage;
