let jumlahKartu = 5;
let kartuPertama = 0;
let kartuKedua = 0;

function buatAngka() {
    let angkaBerurut = [];

    for (let i = 1; i <= jumlahKartu; i++) {
        angkaBerurut.push(i, i);
    }
    return angkaBerurut;
}

function acakAngka(angkaBerurut2) {
    let angkaAcak = angkaBerurut2.sort(function() {
        return 0.5 - Math.random();
    });
    return angkaAcak;
}

function persiapanKartu(angkaAcak) {
    let str = '';
    angkaAcak.forEach(function(i) {
        str += '<div class="kartu" nilai="' + i + '" >' +
            '<div class="belakang">' + i + '</div>' +
            '<div class="depan">' + 'amal' + '</div>' +
            '</div>'
    });

    $('#game').append(str);
}

function controller() {
    $('.kartu').on('click', function() {
        $(this).addClass('buka');

        if (kartuPertama == 0) {
            kartuPertama = $(this).attr('nilai');
        } else {
            kartuKedua = $(this).attr('nilai');

            if (kartuPertama == kartuKedua) {
                $('.buka').addClass('betul');
                $('.betul').removeClass('buka');
                kartuPertama = kartuKedua = 0;
            } else {
                kartuPertama = kartuKedua = 0;
                $(this).one('transitionend', function() {
                    $('.kartu').removeClass('buka');
                });
            }
        }
    });
}

$(document).ready(function() {
    let angkaBerurut = buatAngka();
    let angkaAcak = acakAngka(angkaBerurut);

    persiapanKartu(angkaAcak);

    controller();

    console.log('Angka berurut: ' + buatAngka());
    console.log('Angka acak: ' + angkaAcak);

});