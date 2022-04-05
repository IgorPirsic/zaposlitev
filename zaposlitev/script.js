let odgovori = [
    'Rad se učim in odkrivam nove stvari. Všeč sta mi programiranje in spletni razvoj, ker lahko ustvarjam nove stvari in uresničujem svoje zamisli.',
    'WordPress sem na svojem sedanjem delovnem mestu uporabljal za enostavne stvari, kot je dodajanje ali spreminjanje besedil na naši spletni strani. WooCommerce nisem uporabljal.',
    'Dobro obvladam uporabo jezikov HTML in CSS.',
    'Osnovno poznavanje sintakse SQL. Za delo s podatkovnimi bazami sem večinoma uporabljal phpMyAdmin.',
    'Dobro poznavanje osnov PHP. Vem, kako obdelati podatke, ki jih dobimo iz kontaktnega obrazca. PHP znam uporabljati za komunikacijo s podatkovno bazo.',
    'Dobro poznavanje jezika JavaScript. Poznam jQuery, vendar ga nisem veliko uporabljal.',
    'Poznam osnovna načela objektno usmerjenega programiranja, vendar nimam veliko izkušenj na tem področju.',
    'Nimam veliko izkušenj z framework-i, kot so Vue, Angular ali React, v prihodnosti se bom zagotovo naučil več o Reactu, ker mi je bil najbolj všeč.',
    'Osnovno poznavanje GIT.',
    'Imel sem izkušnje s SASS, imam osnovno predstavo, kako ga uporabljati.',
    'Linuxa še nisem uporabljal, samo Windows in MacOS']
let buttons = Array.from(document.getElementsByClassName('btn'));
buttons.forEach((button, index) => {
    function myFunction() {
        tekst.innerHTML = "<p>" + odgovori[index] + "</p>";
    }
    button.addEventListener('click', myFunction);
});