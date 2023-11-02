import React from 'react';
import logo from "../../assets/images/LOGOJ.jpg";
import styles from "./Homepage.module.scss";
import Carousel1 from '../../components/carousels/Carousel1';
import Carousel2 from '../../components/carousels/Carousel2';
import Carousel3 from '../../components/carousels/Carousel3';
import { tableauImageCarousel1, tableauImageCarousel2, tableauImageCarousel3 } from "../../data/Data";
import FAQ from '../../components/FAQ/Faq';
import { NavLink } from "react-router-dom";

function Homepage() {
    return (
        <body>
            <header>
                <div className={styles.header}>
                    <div className={styles.buttonText}>
                        <NavLink to="/Devis">
                            <button className={styles.buttonHeaderLeft}>Devis gratuit</button>
                        </NavLink>
                    </div>
                    <img className={styles.logo} src={logo} alt="" />
                </div>
            </header>
            <main className="center">
                <img className={styles.logoMain} src={logo} alt="" />
                <section className='text-align-center mb3'>
                    <p>Un artisan, une passion, une transformation exceptionnelle. Si vous rêvez de rénovation et de construction, vous êtes au bon endroit. Je suis votre artisan polyvalent, spécialisé dans la charpente, la couverture, la construction bois, la pose de menuiserie extérieure en bois/PVC mais aussi l’électricité et la rénovation de salles de bains. Chaque projet est une œuvre d'art, taillée sur mesure pour vous. Explorez mon univers de créativité et de savoir-faire sur ce site Web dédié à l'artisanat authentique.</p>
                </section>
                <section className={`text-align-center mb3 ${styles.carousel}`}>
                    <h2>Retrouvez ci-dessous quelques projets réalisés</h2>
                    <h3>Titre</h3>
                    <div> <Carousel1 data={tableauImageCarousel1} /></div>
                    <h3>Titre</h3>
                    <div> <Carousel2 data={tableauImageCarousel2} /></div>
                    <h3>Titre</h3>
                    <div> <Carousel3 data={tableauImageCarousel3} /></div>
                </section>
                <section>
                    <h2 className='text-align-center mb3'>Contact et FAQ</h2>
                    <div className='d-flex justify-content-center align-items-center gap1'>
                        <i class="fa-solid fa-envelope"></i>
                        <p>jacques.mant@laposte.net</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap1'>
                        <i class="fa-solid fa-phone"></i>
                        <p>06.73.54.83.23</p>
                    </div>
                    <div className={styles.separation}></div>
                    <div>
                        <FAQ />
                    </div>
                </section>
            </main>
        </body>
    );
}

export default Homepage;