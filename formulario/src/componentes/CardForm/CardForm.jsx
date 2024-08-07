import React, { useEffect, useState } from 'react';
import './CardForm.css';
import { 
    ERROR_FORMAT_INVALID,
    ERROR_CANT_BE_BLANK,
    ERROR_DATE_INVALID,
    ERROR_CVC_INVALID,
    ERROR_NUMBERS_ONLY,
    INPUTS,
    REGEX_NAME_LASTNAME,
    REGEX_CARDNUMBER,
    REGEX_CVC,
    REGEX_MONTH,
    REGEX_YEAR,
    ICON_COMPLETED
} from '../../constantes';
import { deleteSpaceString, isEmptyObject, replaceEveryNCharacter } from '../../Animaciones/common';
import { BounceAnimation } from '../../Animaciones/animations';
import Button from '../Button/Button';
import { Value, DateInputs } from '../Complement/Complement';
import { Card as RectoCard, CardTwo as VersoCard } from '../Card/Card'; // Asegúrate de que los componentes sean correctos

function CardForm() {
    const [infos, setInfos] = useState({
        cardName: "",
        cardNumber: "",
        cvc: "",
    });

    const [expirationDate, setExpirationDate] = useState({
        month: "",
        year: "",
    });

    const [isSubmit, setIsSubmit] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});

    function handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        let value = target.value;

        if (name === "cardNumber") {
            value = deleteSpaceString(value);
            value = replaceEveryNCharacter(value, 4, " ");
        }

        setInfos({
            ...infos,
            [name]: value
        });
    }

    function handleDateChange(e) {
        const target = e.target;
        const name = target.name;
        let value = target.value;

        setExpirationDate({
            ...expirationDate,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = Object.assign({}, infos, expirationDate);

        if (handleValidaton(data)) {
            setIsSubmit(true);
        }
    }

    function handleValidaton(data) {
        let errors = {};
        let formIsValid = true;
        const today = new Date();

        // Cardholder Name
        if (!data['cardName'].match(REGEX_NAME_LASTNAME) || data['cardName'].length > 30) {
            errors['cardName'] = ERROR_FORMAT_INVALID;
        }

        // Card number
        const cardNumber = deleteSpaceString(data['cardNumber']);
        if (!cardNumber.match(REGEX_CARDNUMBER)) {
            errors['cardNumber'] = ERROR_NUMBERS_ONLY;
        }

        // Month
        if (!data['month'].match(REGEX_MONTH)) {
            errors['month'] = ERROR_DATE_INVALID;
        }

        // Year
        const inputYear = Number(data['year']) + 2000;
        if (!data['year'].match(REGEX_YEAR) || inputYear < today.getFullYear()) {
            errors['year'] = ERROR_DATE_INVALID;
        }

        // CVC
        if (!data['cvc'].match(REGEX_CVC)) {
            errors['cvc'] = ERROR_CVC_INVALID;
        }

        // Test if field is blank
        for (const [key, value] of Object.entries(data)) {
            const input = document.querySelector(`input[name='${key}']`);
            input.classList.contains("invalid") && input.classList.remove("invalid"); // if contains class invalid, remove it

            if (!value) {
                errors = {
                    ...errors,
                    [key]: ERROR_CANT_BE_BLANK
                };
            }
        }

        // Reject forms if there are some errors
        if (!isEmptyObject(errors)) {
            formIsValid = false;

            for (const [key] of Object.entries(errors)) {
                document.querySelector(`input[name='${key}']`).classList.add("invalid");
            }
        }

        setErrorMessages(errors);

        return formIsValid;
    }

    function resetForm() {
        setInfos({
            cardName: "",
            cardNumber: "",
            cvc: ""
        });

        setExpirationDate({
            month: "",
            year: ""
        });
    }

    /**
     * Animations
     */
    useEffect(() => {
        if (infos.cardName === "" &&
            infos.cardNumber === "" &&
            expirationDate.month === "" &&
            expirationDate.year === "") {
        } else {
            BounceAnimation(".recto-card");
        }
    }, [infos.cardName, infos.cardNumber, expirationDate.month, expirationDate.year]);

    useEffect(() => {
        if (infos.cvc !== "") {
            if (window.innerWidth >= 1150) {
                BounceAnimation(".verso-card");
            }
        }
    }, [infos.cvc]);
    /* */

    return (
        <>
            <header>
                <div className='cards'>
                    <VersoCard cvc={infos.cvc} />
                    <RectoCard 
                        expirationDate={expirationDate}
                        cardNumber={infos.cardNumber}
                        cardName={infos.cardName} />
                </div>
            </header>
            <main>
                {isSubmit ? 
                <div className="confirmation-container">
                    {ICON_COMPLETED}
                    <h1>Thank you!</h1>
                    <p>We've added your card details</p>
                    <Button
                        handleClick={() => {
                            resetForm();
                            setIsSubmit(false);
                        }}
                    >Continue</Button>
                </div>
                :
                <form onSubmit={handleSubmit}>
                    {/* Cardholder name & card number */}
                    {INPUTS.commonInputs.map(input => (
                        <Value 
                            key={input.name}
                            onChange={handleInputChange}
                            value={infos[input.name]}
                            errorMessage={errorMessages[input.name]}
                            {...input} />
                        ))}
                    <div className='inputs-subcontainer'>
                        {/* Date inputs */}
                        <DateInputs
                            inputs={INPUTS}
                            onChange={handleDateChange}
                            value={expirationDate}
                            errorMsgMonth={errorMessages['month']}
                            errorMsgYear={errorMessages['year']}
                        />
                        {/* CVC input */}
                        <Value
                            onChange={handleInputChange}
                            value={infos.cvc}
                            errorMessage={errorMessages['cvc']}
                            {...INPUTS.codeInput}
                        />
                    </div>
                    <Button>Confirm</Button>
                </form>
                }
            </main>
        </>
    );
}

export default CardForm;
