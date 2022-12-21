var app = angular.module('calcularSalarioApp', []);

app.controller('calcularSalarioCtrl', 
function($scope) {
  
  // Función 
  $scope.CalcularSalarioTotal = function() {
      // Sueldo básico
      $scope.sueldoBase = $scope.horasT * $scope.tarifaH;
      if ($scope.sueldoBase < 500) {
            $scope.descuento = 0;
        } 
        else if ($scope.sueldoBase >= 500 && $scope.sueldoBase <= 1000) 
        {
            $scope.descuento = $scope.sueldoBase * 0.02;
        } 
        else if ($scope.sueldoBase > 1000 && $scope.sueldoBase <= 4000) {
            $scope.descuento = $scope.sueldoBase * 0.08;
        } 
        else if ($scope.sueldoBase > 4000 && $scope.sueldoBase <= 8000) {
            $scope.descuento = $scope.sueldoBase * 0.15;
        } 
        else if ($scope.sueldoBase > 8000 && $scope.sueldoBase <= 10000) {
            $scope.descuento = $scope.sueldoBase * 0.21;
        }else {
            $scope.descuento = $scope.sueldoBase * 0.3;
      }

      // Calculamos el salario neto
      $scope.salarioNeto = $scope.sueldoBase - $scope.descuento;
    
  }
});
