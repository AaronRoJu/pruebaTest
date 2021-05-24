function crear(data2){
    //http://127.0.0.1:5500/index.html
    
   
    var col = 3;
    var filas = 20;
    var tabla="<table border=5>";
    for(var i=0;i<filas;i++){
        tabla+="<tr>";
        for(var j=0;j<col;j++){
            //es para columna de super nombre
            if(j==0){
                
                tabla+="<td>"+"<p>" + data2[i][j][1] + "<\p>" + "</td>";
            }
            //es para colmna de editorial
            if(j==1){
                
                tabla+="<td>"+"<p>" + data2[i][j][1] + "<\p>" + "</td>";
            }
            //este if es para columna de nombre
            if(j==2){
                
                tabla+="<td>"+"<p>" + data2[i][j][1] + "<\p>" + "</td>";
            }
        }
        tabla+="</tr>";
    }
  
tabla+="</table>";
    document.getElementById("root").innerHTML=tabla;//se inserta en la pagina la tabla con el id=root
}

function crear2(){
            //utilizamos fetch para traer los datos tipo JSON
            fetch("./superheroes.json")
            .then(respuesta=>respuesta.json())
            .then(respuesta=>{
                //con respuesta.map() recorro cada elemento del array de objetos, un valor por cada elemento del array
                //con object.entries() obtienes un array con la clave y valor de cada elemento
                const arr=respuesta.map(elemento => Object.entries(elemento));
                //console.log(arr);
                crear(arr)
            })

            
            
           
}

