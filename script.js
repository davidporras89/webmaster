var app=angular.module("app",[]);


app.controller("MiController",["$scope",function($scope) {



  const socket = new WebSocket("wss://echo.websocket.org");

  // Abre la conexión
  socket.addEventListener('open', function (event) {
      socket.send('Hola Servidor!');
      console.log(socket.readyState);

  });

  // Escucha por mensajes
  socket.addEventListener('message', function (event) {
      console.log('Mensaje del servidor', event.data);

  });

  socket.addEventListener('CLOSED	', function (event) {
      alert("Cerrado");

  });


  $scope.enviar=function(){
    socket.send('Hola Servidor!');
  }

  $scope.cerrar=function(){
    socket.close();
    console.log(socket.readyState);


  }


/*  socket.onmessage(function(event) {
       var data = JSON.parse(event.data);
      console.log(data);
   });
      socket.send({
          dato:"David",
      });*/
}]);
/*
app.factory('socket', [function() {
    var stack = ['1'];
    var onmessageDefer="mensaje";
    var socket = {
        ws: new WebSocket("wss://echo.websocket.org"),
        send: function(data) {
            dat = JSON.stringify(data);
            if (socket.ws.readyState == 1) {
                socket.ws.send(dat);
                console.log(dat);
            } else {
                stack.push(dat);

                console.log(socket.ws.readyState+ '  '+dat);
            }
        },
        onmessage: function(callback) {
            if (socket.ws.readyState == 1) {
                socket.ws.onmessage = callback;
                console.log(socket.ws.onmessage);
            } else {
                onmessageDefer = callback;
            }
        }
    };

    socket.ws.onopen = function(event) {
        for (i in stack) {
            socket.ws.send(stack[i]);
            console.log(socket.ws.readyState);
        }
        stack = [];
        if (onmessageDefer) {
            socket.ws.onmessage = onmessageDefer;
            onmessageDefer = null;
        }
    };
    return socket;
}]);
/*
function connect(){

    try{

      	var socket;
      	var host = "wss://echo.websocket.org";
        var socket = new WebSocket(host);


        socket.onopen = function(){
       		 console.log('Socket Status: '+socket.readyState+' (open)');
        };

        socket.onmessage = function(msg){
       		 console.log('Received: '+msg.data);
        };

        socket.onclose = function(){
       		 console.log('Socket Status: '+socket.readyState+' (Closed)');
        };

    } catch(exception){
   		 console.log('Error'+exception);
    }
};*/
