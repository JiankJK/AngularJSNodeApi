var URL = "http://localhost:9000/api/";
app.controller('reportController', function ($scope, $http, $location) {

    $scope.data = [];

    var userLocal = localStorage.getItem('usuario');
    $scope.user = localStorage.getItem('usuario');
	//console.log(userLocal);
    if(!userLocal) {
		//localStorage.removeItem('usuario');
		$location.path('/login');
   	}else{
        $location.path('/reporteVendidos');
    }

    getVendidos();



    function getVendidos() {
        $http({
        url: URL + '/reporte1',
        method: 'GET'
        }).then(function (res) {
        $scope.data = res.data;
        console.log(res);
        $scope.labels = [];
        $scope.series = [];
        $scope.data2=[];
        

        for (newData of res.data) {
            $scope.data2.push(newData.total);    
            $scope.labels.push(newData.descMarca[0].descripcion);           
        }
          console.log($scope.data2);
          console.log($scope.labels);
        });
       

    }





 });