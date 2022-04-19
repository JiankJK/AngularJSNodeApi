app.controller('carosController', function ($scope, $http, $location) {

    $scope.data = [];

    var userLocal = localStorage.getItem('usuario');
    $scope.user = localStorage.getItem('usuario');
    console.log($scope.userIdLocal);
	//console.log(userLocal);
    if(!userLocal) {
		//localStorage.removeItem('usuario');
		$location.path('/login');
   	}else{
        $location.path('/reporteCaros');
    }

    getCaros();



    function getCaros() {
        $http({
        url: URL + '/reporte3',
        method: 'GET'
        }).then(function (res) {
        $scope.data = res.data;
        console.log(res);

        $scope.labels = [];
        $scope.series = [];
        $scope.data2=[];

        for (newData of res.data) {
            $scope.data2.push(newData.costo);    
            $scope.labels.push(newData.idMarca.descripcion);           
        }
          console.log($scope.data2);
          console.log($scope.labels);

          $scope.type = 'polarArea';

          $scope.toggle = function () {
            $scope.type = $scope.type === 'polarArea' ?
              'pie' : 'polarArea';
          };
        
        });
    }

 });