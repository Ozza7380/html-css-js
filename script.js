const tombol = document.getElementById('tombol-sakelar');
const rumah = document.getElementById('rumah')
tombol.addEventListener('click', function(){
    // alert('Bel Pintu Berbbunyi! Javascript berfungsi.')
    if (rumah.style.backgroundColor === 'white') {
        rumah.style.backgroundColor = '#333';
        rumah.style.color = 'white';
        tombol.textContent = 'Nyalakan Lampu'; 
    } else {
        rumah.style.backgroundColor = 'white';
        rumah.style.color = 'black';
        tombol.textContent = 'Matikan Lampu'
    }
})
