import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Devis.module.scss";
import logo from "../../assets/images/LOGOJ.jpg";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Devis() {
    //   const [feedback, setFeedBack] = useState("");
    //   const [feedbackGood, setFeedBackGood] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const navigate = useNavigate();

    const yupSchema = yup.object({
        firstname: yup
            .string()
            .required("Le champ est obligatoire")
            .min(2, "Le champ doit contenir au minimum 2 caractères")
            .max(12),
        lastname: yup
            .string()
            .required("Le champ est obligatoire")
            .min(2, "Le champ doit contenir au minimum 2 caractères")
            .max(12),
        adress: yup
            .string()
            .required("Le champ est obligatoire")
            .min(2, "Le champ doit contenir au minimum 2 caractères")
            .max(50),
        adressPostal: yup
            .number()
            .required("Le champ est obligatoire")
            .test('is-five-digits', 'Le champ doit contenir exactement 5 chiffres', (value) => {
                return value.toString().length === 5 && !isNaN(value);
            }),
        adressCountry: yup
            .string()
            .required("Le champ est obligatoire")
            .min(2, "Le champ doit contenir au minimum 2 caractères")
            .max(50),
        email: yup
            .string()
            .required("Le champ est obligatoire")
            .email("Vous devez saisir un email valide"),
        acceptedTerms: yup
            .boolean()
            .oneOf([true],
                "Vous devez cocher cette case avant de pouvoir envoyer le formulaire"),
        project: yup
            .string()
            .required("Le champ est obligatoire")
            .min(2, "Le champ doit contenir au minimum 2 caractères")
            .max(5000),
        telephone: yup
            .string()
            .required("Le champ est obligatoire")
            .matches(/^\d{10}$/, "Le numéro de téléphone doit contenir exactement 10 chiffres")
            .test('startsWithZero', 'Le numéro de téléphone doit commencer par zéro', (value) => {
                return value.charAt(0) === '0';
            }),
    });

    const defaultValues = {
        firstname: "",
        lastname: "",
        adress: "",
        adressPostal: "",
        adressCountry: "",
        email: "",
        acceptedTerms: false,
        project: "",
        telephone: "",
    };

    const {
        register,
        handleSubmit,
        reset,
        // control,
        formState: { errors },
    } = useForm({
        defaultValues,
        mode: "onChange",
        resolver: yupResolver(yupSchema),
    });

    async function submit(values) {
        try {
            setIsSubmitted(true);
            // setFeedBack("");
            console.log(values);
            const response = await fetch("http://localhost:8000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                const newUser = await response.json();
                // console.log("newUser", newUser);
                if (newUser.message) {
                    // setFeedBack("Email déjà existant");
                } else {
                    // setFeedBackGood(newUser.messageGood);
                    reset(defaultValues);
                    setTimeout(() => {
                        // navigate("/Login");
                    }, 3000);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitted(false);
        }
    }

    return (
        <body>
            <header>
                <div className={styles.header}>
                    <div className={styles.buttonText}>
                        <NavLink to="/">
                            <button className={styles.buttonHeaderLeft}>Accueil</button>
                        </NavLink>
                    </div>
                    <img className={styles.logo} src={logo} alt="" />
                </div>
            </header>
            <main className="center">
                <section className="mb3 mt1">
                    <h2 id='devis' className='text-align-center mb3'>Demande de devis</h2>
                    <div>
                        <form className={styles.container} onSubmit={handleSubmit(submit)}>
                            <div className={styles.twoInput}>
                                <div className="d-flex flex-column gap1">
                                    <label htmlFor="firstname">
                                        Nom
                                    </label>
                                    <input type="text" id="firstname" {...register("firstname")} />
                                    {errors?.firstname && (
                                        <p className={`${styles.feedback}`}>{errors.firstname.message}</p>
                                    )}
                                </div>
                                <div className="d-flex flex-column gap1">
                                    <label htmlFor="lastname">
                                        Prénom
                                    </label>
                                    <input type="text" id="lastname" {...register("lastname")} />
                                    {errors?.lastname && (
                                        <p className={`${styles.feedback}`}>{errors.lastname.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="d-flex flex-column gap1">
                                <label htmlFor="adress">
                                    Adresse
                                </label>
                                <input className={styles.inputAdress} type="text" id="adress" {...register("adress")} />
                                {errors?.adress && (
                                    <p className={`${styles.feedback}`}>{errors.adress.message}</p>
                                )}
                            </div>
                            <div className={styles.twoInput}>
                                <div className="d-flex flex-column gap1">
                                    <label htmlFor="adressPostal">
                                        Code postal
                                    </label>
                                    <input type="postal-code" id="adressPostal" {...register("adressPostal")} />
                                    {errors?.adressPostal && (
                                        <p className={`${styles.feedback}`}>{errors.adressPostal.message}</p>
                                    )}
                                </div>
                                <div className="d-flex flex-column gap1">
                                    <label htmlFor="adressCountry">
                                        Ville
                                    </label>
                                    <input type="text" id="adressCountry" {...register("adressCountry")} />
                                    {errors?.adressCountry && (
                                        <p className={`${styles.feedback}`}>{errors.adressCountry.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className="d-flex flex-column gap1">
                                <label htmlFor="telephone">
                                    Numéro de téléphone
                                </label>
                                <input className={styles.inputTel} type="tel" id="telephone" {...register("telephone")} />
                                {errors?.telephone && (
                                    <p className={`${styles.feedback}`}>{errors.telephone.message}</p>
                                )}
                            </div>
                            <div className="d-flex flex-column gap1">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" id="email" {...register("email")} />
                                {errors?.email && (
                                    <p className={`${styles.feedback}`}>{errors.email.message}</p>
                                )}
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap1">
                                    <label className={styles.labelCheckbox} htmlFor="acceptedTerms">
                                        Je souhaite recevoir un devis sans engagement
                                    </label>
                                    <input type="checkbox" id="acceptedTerms" {...register("acceptedTerms")} />
                                </div>
                                {errors?.acceptedTerms && (
                                    <p className={`${styles.feedback}`}>{errors.acceptedTerms.message}</p>
                                )}
                            </div>
                            <div>
                                <p>Décrivez votre projet</p>
                                <div>
                                    <label htmlFor="project"></label>
                                    <textarea className={styles.sizeArea}
                                        id="project"
                                        {...register("project")}
                                    />
                                    {errors?.project && (
                                        <p className={`${styles.feedback}`}>{errors.project.message}</p>
                                    )}
                                </div>
                                <p className={styles.termsProject}>En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande d'information et de la relation commerciale qui peut en découler. Pour connaitre et exercer vos droits, notamment le retrait de votre consentement à l'utilisation des données collectées par ce formulaire, veuillez consulter notre Politique de confidentialité.</p>
                            </div>
                            {/* {feedback && <p className={`${styles.feedback} mb20`}>{feedback}</p>}
                    {feedbackGood && (
                        <p className={`${styles.feedbackGood} mb20`}>{feedbackGood}</p>
                    )} */}
                            <button className={styles.buttonDevis} disabled={isSubmitted}>
                                Envoyer
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </body>
    );
}

export default Devis;
