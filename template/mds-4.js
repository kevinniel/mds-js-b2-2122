let form = document.querySelector('#search');
form.addEventListener(
    // Param 1 : Evènement qu'il faut écouter
    'submit',
    // Param 2 : Action à réaliser
    function(event)
    {
        event.preventDefault();
        let mail = this.querySelector('.email').value;
        console.log(mail);
    }
);


function toto(event) {
    event.preventDefault();
    let mail = this.querySelector('.email').value;
    console.log(mail);
}

form.addEventListener(
    // Param 1 : Evènement qu'il faut écouter
    'submit',
    // Param 2 : Action à réaliser
    toto(event) 
);