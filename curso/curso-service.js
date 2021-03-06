angular.module("app").factory("CursoService", CursoService);
CursoService.$inject = ["$http"]
    function CursoService($http){

        const REST ='http://localhost:3000/clientes'
        var service = {


            exec_GET: function(){
                return $http.get(REST).then(tratarRespota, tratarErro);
            },
            exec_GET_ID: function(id){
                return $http.get(REST+ '/' + id).then(tratarRespota, tratarErro);
            },
            exec_DEL: function(id){
                return $http.delete(REST + '/' + id).then(tratarRespota, tratarErro);
            },
            exec_POST: function(cliente){
                return $http.post(REST, cliente).then(tratarRespota, tratarErro);    
            },
            exec_PUT: function(cliente){
                return $http.put('http://localhost:3000/clientes'+ '/' +cliente.id, cliente).then(tratarRespota, tratarErro);    
            }
            
        }
        function tratarRespota(response){
            return response.data;
        }
        function tratarErro(error){
            return error.data;
        }
        return service;
    }