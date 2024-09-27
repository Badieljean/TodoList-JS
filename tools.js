
/**
 * @param {string} element
 * @param {object} attributes
 * @param {string} text
 * @returns {HTMLElement} 
 */

export function ComposeElement (element, attributes = {}, text){
    const el = document.createElement(element)
    for (let [name, value] of Object.entries(attributes)){
        el.setAttribute(name, value)
    }
    el.innerText = text ? text : ""
    return el
}
