var inputs = document.querySelectorAll(".form-group input, .single-submit"), input, el;

setInterval("shake()", 1000);

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

$("input[type=text]").on('focus', function(){
    $(this).addClass('stopshake');
});