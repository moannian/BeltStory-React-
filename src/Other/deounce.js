const debounce = (fn, delay) => {
    let timer = null
    return (...agrs) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, agrs)
        }, delay)
    }
}
export default debounce