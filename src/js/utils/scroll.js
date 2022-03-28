//Modifier of any scroll function
const additionalTopDefault = 0;

/**
 * Given an element, the user view will scroll to it
 * @param {HTMLElement} element element to scroll until view
 * @param {number} additionalTop modifier (in pixels) of the scroll
 */
function scrollToElement(element, additionalTop = 0) {
    const y = element.getBoundingClientRect().top + window.scrollY + additionalTop + additionalTopDefault;

    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}

/**
 * Simple scrollTo function
 * @param {number} additionalTop modifier (in pixels) of the scroll
 */
function scrollTo(additionalTop = 0) {
    const y =  window.scrollY + additionalTop + additionalTopDefault;

    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}

export { scrollToElement, scrollTo }