import React from 'react';
import styles from './Faq.module.scss';

function Faq() {
  return (
    <div className={styles.faqContainer}>
      <div>
        <details>
          <summary className={styles.question}>Question : Quels types de projets de rénovation et de construction réalisez-vous  ?</summary>
          <p className={styles.answer}>En tant qu'artisan en rénovation et construction, je m'occupe de divers projets, y compris la charpente, la couverture, l'électricité, la construction en bois, la pose de menuiserie extérieure en bois/PVC et la rénovation de salles de bains.</p>
        </details>
      </div>
      <div>
        <details>
          <summary className={styles.question}>Quelle est votre zone d'intervention ?</summary>
          <p className={styles.answer}>J'interviens dans tout le département des Haut de France</p>
        </details>
      </div>
      <div>
        <details>
          <summary className={styles.question}>Pouvez-vous m'aider à concevoir mon projet de rénovation ou de construction ?</summary>
          <p className={styles.answer}>Bien sûr, pour cela rien de plus simple, remplissez le formulaire ci-dessous et cliquez sur "envoyer"</p>
        </details>
      </div>
      <div>
        <details>
          <summary className={styles.question}>vneroinvonvnvo?</summary>
          <p className={styles.answer}>jvnivnfthtfhhfthfthtfhfthftienvre</p>
        </details>
      </div>
    </div>
  );
}

export default Faq;
