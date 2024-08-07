/**
 * Regex
 */
export const REGEX_NAME_LASTNAME        = /^[a-zA-ZÀ-ÖØ-öø-ÿ\u0300-\u036f]+([-\s'][a-zA-ZÀ-ÖØ-öø-ÿ\u0300-\u036f]+)*\s[a-zA-ZÀ-ÖØ-öø-ÿ\u0300-\u036f]+([-\s'][a-zA-ZÀ-ÖØ-öø-ÿ\u0300-\u036f]+)*$/ // Regex that match "name lastname" with accents, dash, etc... Source : ChatGPT 🤖👀
export const REGEX_MONTH                = /^(0[1-9]|1[0-2])$/
export const REGEX_YEAR                 = /^([2-9][0-9])$/
export const REGEX_CARDNUMBER           = /^[0-9]{16}$/
export const REGEX_CVC                  = /^[0-9]{3}$/

/**
 * Error messages
 */
export const ERROR_FORMAT_INVALID   = "The format is not correct"
export const ERROR_CANT_BE_BLANK    = "Can't be blank"
export const ERROR_DATE_INVALID     = "The date is not correct"
export const ERROR_CVC_INVALID      = "Must be 3 numbers"
export const ERROR_NUMBERS_ONLY     = "Wrong format, numbers only"

/**
 * SVG
 */
export const ICON_COMPLETED = <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stopColor="#6348FE"/><stop offset="1" stopColor="#610595"/></linearGradient></defs></svg>


export const INPUTS = {
    commonInputs: [
        {
            name: "cardName",
            label: "cardholder name",
            type: "text",
            maxLength: 20,
            placeholder: "e.g. Jane Appleseed",
        },
        {
            name: "cardNumber",
            label: "Card number",
            maxLength: 19,
            type: "tel",
            placeholder: "e.g. 1234 5678 9123 0000",
        },
    ],
    dateInputs: {
        label: "Exp. date (MM/YY)",
        inputs: [
            {
                name: "month",
                placeholder: "MM",
                maxLength: 2,
                type: "tel",
            },
            {
                name: "year",
                placeholder: "YY",
                maxLength: 2,
                type: "tel",
            }
        ],
    },
    codeInput: {
        name: "cvc",
        label: "cvc",
        type: "tel",
        maxLength: 3,
        placeholder: "e.g. 123",
    }
}

