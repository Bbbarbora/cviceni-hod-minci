

const result = document.querySelector('.vysledek');
const coin = document.querySelector('.mince');

const padlOrel = Math.random() < 0.5;

if (padlOrel) {
    result.textContent = 'Padl Orel';
    coin.classList.add('mince-panna')

} else {
    result.textContent = 'Panna';
}



