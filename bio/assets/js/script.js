const elemen = ['Halo', 'Welcome', 'Selamat Datang'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function kata(){

    if (count == elemen.length){
        count = 0;
    }

    currentTxt = elemen[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.opening').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }
    setTimeout(kata, 600);


})();