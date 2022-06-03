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

/* ### EXECUÇÃO PELO TECLADO ### */
document.addEventListener("keydown", (event) => {
    const array = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 
        'a', 's', 'd', 'f', 'g', 'h', 'j', 
        'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    var key = event.key;
    var audio = document.getElementById(key);

    if (array.includes(key)) {
        playFX(audio);
        setTrackNumber(key);
        setTrackTitle(key);
    }

});

/* ### EXECUÇÃO PELO MOUSE/TOUCH ### */
const button_q = document.getElementById('button_q');
const button_w = document.getElementById('button_w');
const button_e = document.getElementById('button_e');
const button_r = document.getElementById('button_r');
const button_t = document.getElementById('button_t');
const button_y = document.getElementById('button_y');
const button_u = document.getElementById('button_u');
const button_a = document.getElementById('button_a');
const button_s = document.getElementById('button_s');
const button_d = document.getElementById('button_d');
const button_f = document.getElementById('button_f');
const button_g = document.getElementById('button_g');
const button_h = document.getElementById('button_h');
const button_j = document.getElementById('button_j');
const button_z = document.getElementById('button_z');
const button_x = document.getElementById('button_x');
const button_c = document.getElementById('button_c');
const button_v = document.getElementById('button_v');
const button_b = document.getElementById('button_b');
const button_n = document.getElementById('button_n');
const button_m = document.getElementById('button_m');

button_q.addEventListener("click", function() {
    var key = 'q';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_w.addEventListener("click", function() {
    var key = 'w';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_e.addEventListener("click", function() {
    var key = 'e';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_r.addEventListener("click", function() {
    var key = 'r';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_t.addEventListener("click", function() {
    var key = 't';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_y.addEventListener("click", function() {
    var key = 'y';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_u.addEventListener("click", function() {
    var key = 'u';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_a.addEventListener("click", function() {
    var key = 'a';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_s.addEventListener("click", function() {
    var key = 's';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_d.addEventListener("click", function() {
    var key = 'd';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_f.addEventListener("click", function() {
    var key = 'f';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_g.addEventListener("click", function() {
    var key = 'g';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_h.addEventListener("click", function() {
    var key = 'h';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_j.addEventListener("click", function() {
    var key = 'j';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_z.addEventListener("click", function() {
    var key = 'z';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_x.addEventListener("click", function() {
    var key = 'x';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_c.addEventListener("click", function() {
    var key = 'c';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_v.addEventListener("click", function() {
    var key = 'v';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_b.addEventListener("click", function() {
    var key = 'b';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_n.addEventListener("click", function() {
    var key = 'n';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});

button_m.addEventListener("click", function() {
    var key = 'm';
    var audio = document.getElementById(key);

    playFX(audio);
    setTrackNumber(key);
    setTrackTitle(key);

});
