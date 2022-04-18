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
        });
    }

 });