import { useEffect, useState } from "react";
import styles from "@/styles/Contact.module.css"
// components
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import NavArrows from "@/components/NavArrows";
import Link from "next/link";

export default function Contact() {

    const [formValidation, setFormValidation] = useState(false);
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);

    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const nameValidation = /^[A-Z][a-z]+$/;
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        setFirstNameInput(firstNameInput);
        setLastNameInput(lastNameInput);
        setEmailInput(emailInput);
        // console.log(textInput);

        if (nameValidation.test(firstNameInput) || firstNameInput === "") {
            setFirstNameValid(true);
        } else {
            setFirstNameValid(false);
        }

        if (nameValidation.test(lastNameInput) || lastNameInput == "") {
            setLastNameValid(true);
        } else {
            setLastNameValid(false);
        }

        if (emailValidation.test(emailInput) || emailInput == "") {
            setEmailValid(true);
        } else {
            setEmailValid(false);
            setFormValidation(false);
        }

        if (firstNameValid && lastNameValid && emailValid && firstNameInput !== "" && lastNameInput !== "" && emailInput !== "") {
            setFormValidation(true);
        } else {
            setFormValidation(false);
        }
    }, [firstNameInput, lastNameInput, emailInput, formValidation]);

    return (
        <>
            <Header
                title='Contact Us'
                metaContent='Assignment #1 - Contact Us Page'
            />
            <div className={styles.contact_page}>
                <NavBar/>
                <main>
                    <div className={styles.main__content}>
                        <h1>Contact Us</h1>
                        <p>Want to discuss? Lets Chat!</p>
                        <div className={styles.form__container}>
                            <form className={styles.form}>
                                <fieldset className={styles.fieldset}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr className={styles.table__row_top}>
                                                <label className={styles.label} htmlFor="firstName">First name:</label>
                                                <label className={styles.label} htmlFor="lastName">Last name:</label>
                                                <input 
                                                    className={styles.input} 
                                                    type="text" 
                                                    id="firstName" 
                                                    name="firstName" 
                                                    placeholder="First Name Here" 
                                                    onChange={(e) => setFirstNameInput(e.target.value)}
                                                />
                                                <input 
                                                    className={styles.input} 
                                                    type="text" 
                                                    id="lastName" 
                                                    name="lastName" 
                                                    placeholder="Last Name Here" 
                                                    onChange={(e) => setLastNameInput(e.target.value)}
                                                />
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr className={styles.table__row_bottom}>
                                                <label className={styles.label} htmlFor="email">Email:</label>
                                                <input 
                                                    className={styles.input} 
                                                    type="email" 
                                                    id="email" 
                                                    name="email" 
                                                    placeholder="Email Here"
                                                    onChange={(e) => setEmailInput(e.target.value)}
                                                />
                                            </tr>
                                        </thead>
                                    </table>
                                </fieldset>
                                {formValidation && (
                                    <button>
                                        <Link href="/">
                                            Submit
                                        </Link>
                                    </button>
                                )}
                            </form>
                            {!firstNameValid && (
                                <p className={`${styles.firstName__validation} ${styles.form__validation}`}>First name error. First letter must be capital. Must use alphabets only.</p>
                            )}
                            {!lastNameValid && (
                                <p className={`${styles.lastName__validation} ${styles.form__validation}`}>Last name error. First letter must be capital. Must use alphabets only.</p>
                            )}
                            {!emailValid && (
                                <p className={`${styles.email__validation} ${styles.form__validation}`}>Email is invalid.</p>
                            )}
                        </div>
                    </div>
                </main>
                <NavArrows linkArrowUp="/about" />
            </div>
        </>
    )
}