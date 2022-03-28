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

/**
 * List used by @file {findAndExecute.js}
 */
const executeScroll = [
    {
        selector: '.js-scroll',
        callback: function() {
            const createScrollTo = (element) => {
                const target = document.getElementById(element.dataset['scroll']);
        
                if(!target) return undefined;
        
                return () => {
                    scrollToElement(target);
                };
            };
        
            const links = document.querySelectorAll('.js-scroll');
        
            Array.prototype.forEach.call(links, (element) => {
                element.addEventListener('click', createScrollTo(element));
            });
        } 
    }
];

export { scrollToElement, scrollTo, executeScroll }