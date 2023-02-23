import { types } from '//pedr.ooo/types.js'

export function $(selector, element = null) {
    types({string:selector}, {object:element})   
    return (element ? element : document).querySelector(selector)
}

export function $$(selector, element = null) {
    types({string:selector}, {object:element})
    return (element ? element : document).querySelectorAll(selector)
}

export function neww(type, options = null) {
    types({string:type}, {object:options})
    let element = document.createElement(type)
    if (options?.class) element.classList.add(options?.class)
    if (options?.id) element.id = options?.id
    return element
}
