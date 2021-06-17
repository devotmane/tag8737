if (window.location.pathname.match('checkout/thankyou')) {
    window.addEventListener('load', function () {
        var singleOrder = document.getElementsByClassName("single-order"),trTotal = document.getElementsByClassName("tr-total");
        if(singleOrder.length && trTotal.length) {
            singleOrder[0].innerHTML = trTotal[0].innerHTML;
        }
    })
}