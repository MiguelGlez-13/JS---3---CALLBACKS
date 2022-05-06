const loader = document .getElementById ('lds-spinner')

let promesa3 = new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve ("OK");
}, 3000);
});


loader.style.display = 'block';
promesa3
    .then((data) => {
        console .log(data);
})
    .catch((err) => console .log(err.message ))
    .finally (function () {
    })


//loader.style.display = 'none';