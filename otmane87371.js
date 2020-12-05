/* <script> */
var inputs = document.querySelectorAll(".form-group input, .single-submit"), input, el;

// function r(f) { /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f() }

function shake() {
    for (let i = 0; i < inputs.length; i++) {
        input = inputs[i];
        if (input.classList.contains('shake')) {
            input.classList.remove("shake");
        } else {
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

// use like
// r(function () {
    setInterval("shake()", 1000);
// });
// </script>