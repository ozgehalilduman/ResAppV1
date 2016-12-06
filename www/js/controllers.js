angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
//orjinaller yukarısı
//benim değiştirdiklerim
.controller('kategorilerCtrl', function($scope, $stateParams,Servisler) {
  $scope.tekbilgi="TEK BİLGİ";
  $scope.coklubilgi=[
    {ad:'osman',soyad:'AYAZ',okulno:'2007'},
    {ad:'murat',soyad:'AKALAN',okulno:'2011'}
  ];
  $scope.menuKategori =Servisler.MenuKategoriGetir($scope);
})
.controller('anasayfaCtrl', function($scope, Servisler) {
  $scope.options = {
      autoplay:true,
      pagination: '.slider_nav',
      loop: true,
      effect: 'fade',
      speed: 1500,
    }
  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });
  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    // note: the indexes are 0-based
    $scope.activeIndex = data.slider.activeIndex;
    $scope.previousIndex = data.slider.previousIndex;
    console.info(data.slider);
  });

  $scope.resimler=Servisler.SlideResimGetir();
})
.controller('gununmenusuCtrl', function($scope, Servisler) {
  $scope.yemeklistesi=Servisler.YemekListesiGetir($scope);
})
.controller('yemeklistesiCtrl', function($scope, Servisler,$stateParams,$ionicModal) {
  $scope.yemeklistesi=Servisler.YemekListesiGetir($scope); 
  $scope.filtrele={'kategori':$stateParams.kategori};
  $scope.siparis=false;
  $scope.siparisVer=function(yemek){
    yemek.siparis=!yemek.siparis;
  }
  //modal kısmı
  $ionicModal.fromTemplateUrl('templates/yemekbilgimodal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.yemekbilgiModalGoster=function(yemek){
     $scope.secilenYemek=yemek;
     $scope.modal.show();
  }
  $scope.YemekBilgiModalKapat=function(){
     $scope.modal.hide();
  }
})

//son kısımda orjinal
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
