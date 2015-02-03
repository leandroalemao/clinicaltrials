ctApp.factory('User', ['$http', function($http){

  function User(data){
    for(attr in data){
      this[attr] = data[attr];
    }
  }

  User.query = function(){
    return $http.get("/users.json").then(function(result){
      var users = [];
      for(var i=0; i<result.data.length; i++){
        users.push(new User(result.data[i]))
      }
      return users;
    });
  }

  return User;
}]);
