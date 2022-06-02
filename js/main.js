/* ### Loading animation ### */
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');
    loader.addEventListener('transitionEnd', () => {
        document.body.removeChild(loader);
    });
});

function playFX(audio) {
    audio.currentTime = 0;
    audio.play();
}

// function playBGM(bgm) {
//     counter = 0
//     if (counter == 0) {
//         counter = 1;
//         bgm.currentTime = 0;
//         bgm.loop = true;
//         bgm.play();
//     }

// }

function setTrackNumber(key) {
    array = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 
        'a', 's', 'd', 'f', 'g', 'h', 'j', 
        'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    number = array.indexOf(key) + 1;
    console.log(number);
    trackNumber = document.getElementById('trackNumber');
    if (number < 10) {
        trackNumber.textContent="0" + "0" + number;
    } else {
        trackNumber.textContent="0" + number;
    }
}

function setTrackTitle(key) {
    array = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 
        'a', 's', 'd', 'f', 'g', 'h', 'j', 
        'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    titles = [
        'QUE ISSO',
        'SEM GRAÇA',
        'POIN',
        'POM',
        'TOME',
        'PARE',
        'UUUII',
        'AI',
        'SOCO',
        'DANÇA GATINHO',
        'FAIL 1',
        'ELE GOSTA',
        'OH POTÊNCIA',
        'JESUS',
        'ABRLUABRLUA',
        'XIII',
        'CAVALO',
        'DEMAIS',
        'É BRINCADEIRA',
        'NÃO',
        'FAIL 2',
    ];

    position = array.indexOf(key);
    console.log(titles[position]);
    trackTitle = document.getElementById('trackTitle');
    trackTitle.textContent = titles[position];
}

document.addEventListener("keydown",(event) => {
    var key = event.key;
    
    audio = document.getElementById(key);
    button = document.getElementById('button_' + key)
    trackNumber = document.getElementById('trackNumber')
    trackTitle = document.getElementById('trackTitle')
    trackSubtitle = document.getElementById('trackSubtitle')

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

    // audio.addEventListener('play', () => {
    //     button.classList.add('active');
    // });

    // audio.addEventListener('ended', () => {
    //     button.classList.remove('active');
    // });


});