import { onElementLoaded } from '../utils/onElementLoaded.js';
import { executeScroll } from '../utils/scroll.js';

/**
 * This archive has as purpose to execute functions automatically when the DOM finishes it's loading
 * It must imports lists of objects which have the following structure
 * @obj {selector: string, callback: function}
 */

Array.prototype.forEach.call(executeScroll, (execute) => {
    onElementLoaded(execute.selector, execute.callback);
});