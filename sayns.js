var inputs = document.querySelectorAll(".form-group input, .single-submit"), input;
function shake() {
    for (let i = 0; i < inputs.length; i++) {
        input = inputs[i];
        if (input.classList.contains('shake')) {
            input.classList.remove("shake");
        } else {
            input.classList.add("shake");
        }
    }
}
setInterval("shake()", 1000);