import { scrollToElement } from '../utils/scroll.js';

/**
 * Seek for elements with 'js-scroll' class and inserts the "clickToScroll" function
 */
onElementLoaded('.js-scroll', () => {
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
});