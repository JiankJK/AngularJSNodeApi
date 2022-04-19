app.controller('compradosController', function ($scope, $http, $location) {

    $scope.data = [];

    var userLocal = localStorage.getItem('usuario');
    $scope.user = localStorage.getItem('usuario');
    console.log($scope.userIdLocal);
	//console.log(userLocal);
    if(!userLocal) {
		//localStorage.removeItem('usuario');
		$location.path('/login');
   	}else{
        $location.path('/reporteComprados');
    }

    getVendidos();



    function getVendidos() {
        $http({
        url: URL + '/reporte2',
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
        

            
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: $scope.labels,
                datasets: [{
                    label: 'Marcas mas compradas',
                    data: $scope.data2,
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },options: {
                scales: {
                    r: {
                        beginAtZero: true
                    }
                }
            }
        });

        });
    }

 });