app.controller('loginController', function ($scope, $http, $location, $rootScope) {

   $scope.home = function(username, password){
       $http.get('http://localhost:9000/api/usuarios?usuario='+username+'&contrasena='+password).then(data =>{
           console.log(data.data);
           if(data.data!==null){
               localStorage.setItem('usuario', data.data.usuario);
               localStorage.setItem('idUsuario', data.data._id);
                $location.path('/home');
                //console.log(data)
               
           }else{
               alert('Datos incorrectos');

           }
       })
   }
});