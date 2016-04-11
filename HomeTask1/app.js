var LodShop = angular.module('LodShop', []);

/*Services*/
LodShop.service('JSONService', [function () {
  var _json = '[{"productName":"TV","productSpecifications":[{"name":"Black","price":7840,"piecesInStock":5},{"name":"Green","price":8000,"piecesInStock":6},{"name":"Blue","price":7600,"piecesInStock":0}]},{"productName":"Nokia 3310","productSpecifications":[{"name":"Titan","price":9999,"piecesInStock":1},{"name":"Chrome","price":9998,"piecesInStock":2}]},{"productName":"Laptop","productSpecifications":[{"name":"HDD 500GB","price":4368.32,"piecesInStock":1},{"name":"SSD 240GB","price":6000.12,"piecesInStock":7},{"name":"SSD 120GB","price":3000,"piecesInStock":0}]},{"productName":"LOD Bean Bag","productSpecifications":[{"name":"small","price":1900.32,"piecesInStock":2},{"name":"medium","price":2300.12,"piecesInStock":1},{"name":"big","price":3000,"piecesInStock":0}]},{"productName":"Vitalya","productSpecifications":[{"name":"slave","price":19,"piecesInStock":1},{"name":"husband/wife for an hour","price":7,"piecesInStock":1},{"name":"killer","price":3,"piecesInStock":1}]}]';

  this.getProductsJSON = function () {
    return _json;
  };
}]);

//Редактировать ниже
LodShop.service('ProductsService', ['JSONService', function (JSONService) {
    var productsJSON = JSONService.getProductsJSON();

    this.SerializeProducts = function () {
        var serializedproducts ;
        return serializedproducts = JSON.parse(productsJSON) ;
    }

}]);


/*Controllers*/
LodShop.controller('ProductsController', ['$scope','ProductsService', function ($scope, ProductsService) {
     $scope.products = ProductsService.SerializeProducts();
     $scope.filter = function(specification){
         if (specification.piecesInStock >0)
         {inNotSold=true;}
     };
}]);


