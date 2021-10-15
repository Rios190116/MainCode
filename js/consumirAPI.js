function consumir(){
    const http = new XMLHttpRequest();
    var url = "https://licorne.mx/prueba/api.php";

    http.open( "GET", url, false ); // false for synchronous request
    http.send( null );

    //var cont = document.getElementById('mostrar_compra');
    //cont.innerHTML = http.responseText;
    var data = JSON.parse(http.responseText);
    genera_tabla(data);
}

function genera_tabla(data) {
    // Obtener la referencia del elemento body
    var body = document.getElementById("contenido");
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.setAttribute("id",'tabla');
    var tblBody = document.createElement("tbody");

    //ENCABEZADO
    var tblHead = document.createElement("thead");
    var headRow = document.createElement("tr");

    var th = document.createElement("th");
    th.innerHTML = "ID";
    headRow.appendChild(th);

    var th = document.createElement("th");
    th.innerHTML = "NOMBRE";
    headRow.appendChild(th);

    var th = document.createElement("th");
    th.innerHTML = "PRECIO";
    headRow.appendChild(th);

    var th = document.createElement("th");
    th.innerHTML = "IMAGEN";
    headRow.appendChild(th);

    tblHead.appendChild(headRow);


    // Crea las celdas
    for (var i = 0; i < 4; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");

  
      for (var j = 0; j < data.length; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        //
        switch(j){
            case 0:
            var textoCelda = document.createTextNode(data[i]['id']);
            break;
            case 1:
            var textoCelda = document.createTextNode(data[i]['nombre']);
            break;
            case 2:
            var textoCelda = document.createTextNode(data[i]['precio']);
            break;
            case 3:
            var textoCelda = document.createElement('img');
            textoCelda.setAttribute('src',data[i]['imagen']);
            break;
        }
        //
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    tabla.appendChild(tblHead);
    // appends <table> into <body>
    body.appendChild(tabla);
  }