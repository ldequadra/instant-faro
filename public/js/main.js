/* ### Loading animation ### */
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');

    loader.addEventListener('transitionEnd', () => {
        document.body.removeChild(loader);
    });
});

/* ### Play audio fx ### */
function playFX(audio) {
    audio.currentTime = 0;
    audio.play();
};

/* ### Set track number on display ### */
function setTrackNumber(key) {
    const array = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 
        'a', 's', 'd', 'f', 'g', 'h', 'j', 
        'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    var number = array.indexOf(key) + 1;
    console.log(number);
    const trackNumber = document.getElementById('trackNumber');

    if (number < 10) {
        trackNumber.textContent="0" + "0" + number;
    } else {
        trackNumber.textContent="0" + number;
    }
};

/* ### Set track title on display ### */
function setTrackTitle(key) {
    const array = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 
        'a', 's', 'd', 'f', 'g', 'h', 'j', 
        'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const titles = [
        'QUE ISSO', 'SEM GRAÇA', 'POIN', 'POM', 'TOME', 'PARE', 'UUUII',
        'AI', 'SOCO', 'DANÇA GATINHO', 'FAIL 1', 'ELE GOSTA', 'OH POTÊNCIA', 'JESUS',
        'ABRLUABRLUA', 'XIII', 'CAVALO', 'DEMAIS', 'É BRINCADEIRA', 'NÃO', 'FAIL 2'
    ];

    var position = array.indexOf(key);
    console.log(titles[position]);
    const trackTitle = document.getElementById('trackTitle');
    trackTitle.textContent = titles[position];
};


document.addEventListener("keydown",(event) => {
    var key = event.key;
    
    //var button = document.getElementById('button_' + key)
    var audio = document.getElementById(key);
    const trackNumber = document.getElementById('trackNumber');
    const trackTitle = document.getElementById('trackTitle');

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});