/**
 * Format an integer with dot seperator grouping digits by 3.
 * @param {number} value 
 * @returns {string}
 */
export const format = (value) => {
    value = value.toString();

    if (value.length < 4){
        return value;
    }

    return `${format(value.slice(0, -3))},${value.slice(-3)}`;
}