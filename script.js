//Efeitos de Scroll
window.sr = ScrollReveal({ reset: true });

sr.reveal('.max-width', {
    duration: 2000
});

sr.reveal('.column', {
    duration: 3000
});
sr.reveal('.sobre', {
    duration: 3000
});

sr.reveal('.text', {
    duration: 1000
});

sr.reveal('.container-1', {
     rotate: {x:0, y:80, z:0},
     duration: 2000 });

sr.reveal('.projetos', {
    rotate: {x:0, y:80, z:0},
    duration: 2000
});

sr.reveal('.container', {duration: 5000})

sr.reveal('.card', {
    rotate: {x:0, y:80, z:0},
    duration: 3000
});
// Fim efeitos scroll


//Dark Theme início

chk = document.querySelector('#chk');

chk.addEventListener('change', ()=> {
    document.body.classList.toggle('dark')
})

//Dark Theme fim


//habilidades


   var verMais = document.querySelector('.portfolio h4');

   verMais.addEventListener('click', ()=> {

   var portfolio = document.querySelector('.portfolio p');

   if(portfolio.classList.contains('mostrar')){

    verMais.innerHTML = 'Ver mais!'
    portfolio.classList.remove('mostrar');
    

   } else {

       verMais.innerHTML = 'Ocultar'
       portfolio.classList.add('mostrar');
   }

});

// Fim Habilidades