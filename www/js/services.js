angular.module('starter.services', [])

.factory('Servisler', function() {
    return{
        MenuKategoriGetir:function(){
            return [
                    { baslik: 'KAHVALTILIKLAR', id: 1,resim:"kahve.png",arkaplan:"kahvalti_bg.jpg"},                   
                    { baslik: 'ÇORBALAR', id: 2,resim:"corba.png",arkaplan:"corba_bg.jpg"},
                    { baslik: 'SALATALAR', id: 3,resim:"salata.png",arkaplan:"salata_bg.jpg" },
                    { baslik: 'TATLILAR', id: 4,resim:"tatli.png",arkaplan:"tatli_bg.jpg" }
                ];
        },
        SlideResimGetir:function(){
            return [
                {resim:"r1.jpg"},
                {resim:'r2.jpg'},
                {resim:'r3.jpg'},
                {resim:'r4.jpg'},
                {resim:'r5.jpg'}
            ];
        }
    }
});