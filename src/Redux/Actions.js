import { CHANGEDETIALS, CHANGETITLE } from './Type'
export const changedetails = (value) => {
    return {
        type: CHANGEDETIALS,
        value
    }
}
export const changeTitle = (value) => {
    return {
        type: CHANGETITLE,
        value
    }
}