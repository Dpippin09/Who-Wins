/**
 * Formats a date string into a more readable format.
 * @param {string} dateString - The date string to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Validates if an object has all required fields.
 * @param {Object} obj - The object to validate.
 * @param {Array<string>} requiredFields - The list of required fields.
 * @returns {boolean} - True if all required fields are present, false otherwise.
 */
export const validateFields = (obj, requiredFields) => {
    return requiredFields.every(field => obj.hasOwnProperty(field) && obj[field]);
};

/**
 * Sanitizes a string to prevent XSS attacks.
 * @param {string} str - The string to sanitize.
 * @returns {string} - The sanitized string.
 */
export const sanitizeString = (str) => {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = str;
    return tempDiv.innerHTML;
};