var inputs = document.querySelectorAll(".form-group input, .single-submit"), input, el;

function shake() {
    for (let i = 0; i < inputs.length; i++) {
        input = inputs[i];
        console.log(input.value);

        if (input.classList.contains('shake')) {
            input.classList.remove("shake");
        } else if(input.value) {
            input.classList.add("stopshake");
            input.classList.remove("shake");
        }else {
            if (!input.classList.contains('stopshake')) {
                input.classList.add("shake");
            }
        }
    }
}

for (let i = 0; i < inputs.length; i++) {
    input = inputs[i];

    input.addEventListener('focus', (event) => {
        el = event.explicitOriginalTarget;
        if (!el.classList.contains('stopshake')) {
            el.classList.add("stopshake");
        }
    });
}

    setInterval("shake()", 1000);
