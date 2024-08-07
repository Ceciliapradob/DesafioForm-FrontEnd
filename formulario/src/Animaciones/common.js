/**
 * Common functions
 */


/**
 * 
 * Function that insert a character every N index
 * eg. replaceEveryNCharacter("hello", 1, ".")
 * Result : h.e.l.l.o
 * 
 * @param {String} str 
 * @param {Number} n 
 * @param {Char} separator
 * @returns {String}
 */
export function replaceEveryNCharacter(str, n, separator) {

    const regex = `.{1,${n}}`
    const re = new RegExp(regex, "g")

    const matches = str.match(re);

    return matches !== null ? matches.join(separator) : str
}

/**
 * 
 * @param {Object} object
 * @returns {Boolean}
 */
export function isEmptyObject(object) {
    return Object.keys(object).length === 0 ? true : false
}

/**
 * 
 * Delete spaces in a string
 * eg. deleteSpaceString("hello world !")
 * Result : helloworld!
 * 
 * @param {String} str 
 * @returns {String}
 */
export function deleteSpaceString(str) {
    return str.replace(/\s+/g, '') 
}
