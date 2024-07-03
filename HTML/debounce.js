const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");

const updateDebounceText = debounce((text) => {
    debounceText.textContent = text
},2000)

input.addEventListener("input", evento => {
    defaultText.textContent = evento.target.value;
    updateDebounceText(evento.target.value)
});

function debounce(callBack, delay) {
    let timeout

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callBack(...args)
        }, delay)
    }
}

