angular.module('starter.services', [])

.factory('Servisler', function($http) {
    return{
        MenuKategoriGetir:function(scope){
            var $promise=$http.get("data/menuKategori.json");
            $promise.then(function(msg){scope.menuKategori=msg.data;});
        },
        SlideResimGetir:function(){
            return [
                {resim:"r1.jpg"},
                {resim:'r2.jpg'},
                {resim:'r3.jpg'},
                {resim:'r4.jpg'},
                {resim:'r5.jpg'}
            ];
        },
        YemekListesiGetir:function(scope){
            var $promise=$http.get("data/yemekler.json");
            $promise.then(function(msg){scope.yemeklistesi=msg.data;});
        }
    }
});