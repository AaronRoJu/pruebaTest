
//lista a los usuarios
 fetch('http://jsonplaceholder.typicode.com/users')
 .then(function(response) {
 return response.json();   
})
.then(function(myJson) {
//var divOut = document.getElementById('txtOut');
var usuarios = myJson;
var txtOut = "Usuarios: <br/><br/>";
for (var k in usuarios) {
//txtOut += `<b> IdUser: ${usuarios[k].id}</b><br />`;
//txtOut += `nombre: ${usuarios[k].name}<br /><br/>`;
//poniendo el valor de cada usuario
if(k==0){
 var contador1=0;
 //ponemos en el div con uno el nombre antes de que se haga click
 document.getElementById('uno').innerHTML = usuarios[k].name;
 //aqui ya es cuando se hace click
 var uno = document.getElementById("uno");//encontramos el id con 1
 var elemento = uno;
 
 elemento.onclick = function(){
   
     contador1++;
     if(contador1==1){
     document.getElementById('uno').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('uno').innerHTML += `UserName: ${usuarios[0].username}<br/>`;
     document.getElementById('uno').innerHTML += `Email: ${usuarios[0].email}<br/>`;
     document.getElementById('uno').innerHTML += `telefono: ${usuarios[0].phone}<br/>`;
     //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('uno').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/1/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/1/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('uno').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('uno').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('uno').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('uno').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('uno').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('uno').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('uno').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('uno').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('uno').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('uno').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('uno').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('uno').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('uno').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('uno').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('uno').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('uno').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/1/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('uno').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('uno').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('uno').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('uno').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('uno').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('uno').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/1/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('uno').appendChild(my_form);
                document.getElementById('uno').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
         //console.log(document.myform.elements.ch);
     }//if del contador
     
 };//fin del primer onclick element


 document.getElementById('uno').innerHTML += `<br/>`;

}
else if(k==1){
 document.getElementById('dos').innerHTML = `<br/>`+usuarios[k].name;
 
  //aqui ya es cuando se hace click
 var dos = document.getElementById("dos");//encontramos el id con 1
 var elemento = dos;
 var contador2=0;
 elemento.onclick = function(){
    
     contador2++;
     if(contador2==1){
         document.getElementById('dos').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('dos').innerHTML += `UserName: ${usuarios[1].username}<br/>`;
     document.getElementById('dos').innerHTML += `Email: ${usuarios[1].email}<br/>`;
     document.getElementById('dos').innerHTML += `telefono: ${usuarios[1].phone}<br/>`;
     

     //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('dos').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/2/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/2/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('dos').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('dos').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('dos').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('dos').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('dos').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('dos').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('dos').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('dos').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('dos').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('dos').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('dos').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('dos').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('dos').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('dos').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('dos').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('dos').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/2/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('dos').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('dos').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('dos').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('dos').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('dos').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('dos').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/2/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('dos').appendChild(my_form);
                document.getElementById('dos').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
        }
     
 };
 document.getElementById('dos').innerHTML += `<br/>`;
}
else if(k==2){
 document.getElementById('tres').innerHTML = `<br/>`+usuarios[k].name;
 var contador3=0;
  //aqui ya es cuando se hace click
  var tres = document.getElementById("tres");//encontramos el id con 1
 var elemento = tres;
 elemento.onclick = function(){
    
     contador3++;
     if(contador3==1){
    document.getElementById('tres').innerHTML += `<b>informacion: <br/>`;
    document.getElementById('tres').innerHTML += `UserName: ${usuarios[2].username}<br/>`;
    document.getElementById('tres').innerHTML += `Email: ${usuarios[2].email}<br/>`;
    document.getElementById('tres').innerHTML += `telefono: ${usuarios[2].phone}<br/>`;
//************************************************************************ */
      //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('tres').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/3/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/3/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('tres').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('tres').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('tres').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('tres').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('tres').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('tres').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('tres').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('tres').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('tres').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('tres').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('tres').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('tres').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('tres').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('tres').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('tres').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('tres').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/3/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('tres').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('tres').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('tres').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('tres').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('tres').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('tres').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/3/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('tres').appendChild(my_form);
                document.getElementById('tres').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
//********************************************************************************************** */

     }
     
     
 };
 document.getElementById('tres').innerHTML += `<br/>`;
}
else if(k==3){
 document.getElementById('cuatro').innerHTML = `<br/>`+usuarios[k].name;
 var contador4=0;
  //aqui ya es cuando se hace click
 var cuatro= document.getElementById("cuatro");//encontramos el id con 1
 var elemento = cuatro;
 elemento.onclick = function(){
     
     contador4++;
     if(contador4==1){ 
     document.getElementById('cuatro').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('cuatro').innerHTML += `UserName: ${usuarios[3].username}<br/>`;
     document.getElementById('cuatro').innerHTML += `Email: ${usuarios[3].email}<br/>`;
     document.getElementById('cuatro').innerHTML += `telefono: ${usuarios[3].phone}<br/>`;

    //************************************************************************ */
      //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('cuatro').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/4/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/4/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('cuatro').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('cuatro').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('cuatro').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('cuatro').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('cuatro').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('cuatro').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('cuatro').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('cuatro').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('cuatro').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('cuatro').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('cuatro').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('cuatro').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('cuatro').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('cuatro').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('cuatro').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('cuatro').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/4/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('cuatro').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('cuatro').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('cuatro').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('cuatro').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('cuatro').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('cuatro').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/4/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('cuatro').appendChild(my_form);
                document.getElementById('cuatro').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
//********************************************************************************************** */

 }
    
 };
 document.getElementById('cuatro').innerHTML += `<br/>`;
}
else if(k==4){
 document.getElementById('cinco').innerHTML = `<br/>`+usuarios[k].name;
 var contador5=0;
   //aqui ya es cuando se hace click
   var cinco= document.getElementById("cinco");//encontramos el id con 1
 var elemento = cinco;
 elemento.onclick = function(){
     
     contador5++;
     if(contador5==1){
         document.getElementById('cinco').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('cinco').innerHTML += `UserName: ${usuarios[4].username}<br/>`;
     document.getElementById('cinco').innerHTML += `Email: ${usuarios[4].email}<br/>`;
     document.getElementById('cinco').innerHTML += `telefono: ${usuarios[4].phone}<br/>`;
      //************************************************************************ */
      //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('cinco').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/5/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/5/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('cinco').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('cinco').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('cinco').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('cinco').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('cinco').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('cinco').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('cinco').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('cinco').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('cinco').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('cinco').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('cinco').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('cinco').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('cinco').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('cinco').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('cinco').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('cinco').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/5/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('cinco').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('cinco').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('cinco').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('cinco').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('cinco').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('cinco').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/5/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('cinco').appendChild(my_form);
                document.getElementById('cinco').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
//********************************************************************************************** */


     }
     
 };
 document.getElementById('cinco').innerHTML += `<br/>`;
}
else if(k==5){
 document.getElementById('seis').innerHTML = `<br/>`+usuarios[k].name;
 var contador6=0;
  //aqui ya es cuando se hace click
 var seis= document.getElementById("seis");//encontramos el id con 1
 var elemento = seis;
 elemento.onclick = function(){
     contador6++;
     if(contador6==1){
         document.getElementById('seis').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('seis').innerHTML += `UserName: ${usuarios[5].username}<br/>`;
     document.getElementById('seis').innerHTML += `Email: ${usuarios[5].email}<br/>`;
     document.getElementById('seis').innerHTML += `telefono: ${usuarios[5].phone}<br/>`;
      //************************************************************************ */
      //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('seis').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/6/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/6/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('seis').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('seis').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('seis').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('seis').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('seis').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('seis').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('seis').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('seis').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('seis').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('seis').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('seis').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('seis').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('seis').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('seis').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('seis').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('seis').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/6/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('seis').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('seis').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('seis').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('seis').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('seis').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('seis').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/6/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('seis').appendChild(my_form);
                document.getElementById('seis').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
//********************************************************************************************** */

     }
    
 };
 document.getElementById('seis').innerHTML += `<br/>`;
}
else if(k==6){
 document.getElementById('siete').innerHTML = `<br/>`+usuarios[k].name;
 var contador7=0;
  //aqui ya es cuando se hace click
 var siete= document.getElementById("siete");//encontramos el id con 1
 var elemento = siete;
 elemento.onclick = function(){
     contador7++;
     if(contador7==1){
         document.getElementById('siete').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('siete').innerHTML += `UserName: ${usuarios[6].username}<br/>`;
     document.getElementById('siete').innerHTML += `Email: ${usuarios[6].email}<br/>`;
     document.getElementById('siete').innerHTML += `telefono: ${usuarios[6].phone}<br/>`;
    
    //************************************************************************ */
      //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('siete').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/7/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/7/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('siete').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('siete').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('siete').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('siete').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('siete').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('siete').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('siete').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('siete').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('siete').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('siete').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('siete').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('siete').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('siete').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('siete').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('siete').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('siete').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/7/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('siete').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('siete').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('siete').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('siete').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('siete').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('siete').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/7/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('siete').appendChild(my_form);
                document.getElementById('siete').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
//********************************************************************************************** */

     }
   
 };
 document.getElementById('siete').innerHTML += `<br/>`;
}
else if(k==7){
 document.getElementById('ocho').innerHTML = `<br/>`+usuarios[k].name;
 var contador8=0;
              //aqui ya es cuando se hace click
 var ocho= document.getElementById("ocho");//encontramos el id con 1
 var elemento = ocho;
 elemento.onclick = function(){
     contador8++;
     if(contador8==1){
         document.getElementById('ocho').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('ocho').innerHTML += `UserName: ${usuarios[7].username}<br/>`;
     document.getElementById('ocho').innerHTML += `Email: ${usuarios[7].email}<br/>`;
     document.getElementById('ocho').innerHTML += `telefono: ${usuarios[7].phone}<br/>`;
    
    //************************************************************************ */
      //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('ocho').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/8/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/8/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('ocho').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('ocho').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('ocho').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('ocho').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('ocho').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('ocho').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('ocho').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('ocho').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('ocho').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('ocho').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('ocho').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('ocho').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('ocho').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('ocho').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('ocho').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('ocho').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/8/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('ocho').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('ocho').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('ocho').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('ocho').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('ocho').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('ocho').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/8/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('ocho').appendChild(my_form);
                document.getElementById('ocho').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
//********************************************************************************************** */

     }
    
 };
 document.getElementById('ocho').innerHTML += `<br/>`;
}   
else if(k==8){
 document.getElementById('nueve').innerHTML = `<br/>`+usuarios[k].name;
 var contador9=0;
 var nueve= document.getElementById("nueve");//encontramos el id con 1
 var elemento = nueve;
 elemento.onclick = function(){
     contador9++;
     if(contador9==1){
         document.getElementById('nueve').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('nueve').innerHTML += `UserName: ${usuarios[8].username}<br/>`;
     document.getElementById('nueve').innerHTML += `Email: ${usuarios[8].email}<br/>`;
     document.getElementById('nueve').innerHTML += `telefono: ${usuarios[8].phone}<br/>`;
    
    //************************************************************************ */
      //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('nueve').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/9/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/9/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('nueve').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('nueve').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('nueve').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('nueve').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('nueve').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('nueve').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('nueve').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('nueve').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('nueve').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('nueve').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('nueve').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('nueve').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('nueve').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('nueve').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('nueve').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('nueve').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/9/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('nueve').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('nueve').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('nueve').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('nueve').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('nueve').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('nueve').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/9/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('nueve').appendChild(my_form);
                document.getElementById('nueve').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
//********************************************************************************************** */

     }
    
 };
 document.getElementById('nueve').innerHTML += `<br/>`;
}
else if(k==9){
 document.getElementById('diez').innerHTML = `<br/>`+usuarios[k].name;
 var contador10=0;
 var diez= document.getElementById("diez");//encontramos el id con 1
 var elemento = diez;
 elemento.onclick = function(){
     contador10++;
     if(contador10==1){
         document.getElementById('diez').innerHTML += `<b>informacion: <br/>`;
     document.getElementById('diez').innerHTML += `UserName: ${usuarios[9].username}<br/>`;
     document.getElementById('diez').innerHTML += `Email: ${usuarios[9].email}<br/>`;
     document.getElementById('diez').innerHTML += `telefono: ${usuarios[9].phone}<br/>`;

    //************************************************************************ */
      //agregando botones
     //CREANDO PRIMER BOTON
     const button = document.createElement('button'); 
     button.type = 'button'; 
     button.innerText = 'POSTS'; 
     document.getElementById('diez').appendChild(button);
     //este es la funcion de cuando se le da click al botom ahora hay que poner los datos del post
     button.onclick=function(){//cuando se hace click en el boton POSTS
         //trayendo los datos de POST 
         fetch('https://jsonplaceholder.typicode.com/users/10/posts')
         .then(function(response) {
         return response.json();   
         })
         .then(function(myJson) {
            
             var usuarios = myJson;
             var longitudpost=usuarios.length;
             var txtOut = "LISTA DE POSTS: <br/><br/>";

             //aqui pondremos el otro fetch para consumir los comentarios
             //aqui pondremos la el fetch para traer los comentarios
             fetch('https://jsonplaceholder.typicode.com/post/10/comments')//trayendo los comentarios del post con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
             //var divOut = document.getElementById('txtOut');
             var comentarios = myJson2;
             var longitudcomentarios=comentarios.length;
             //for (var k in comentarios) {
                 for (var k in usuarios) {
             if(k<longitudcomentarios){
                  //inicia POSTS
             document.getElementById('diez').innerHTML += `<b> IdUser: ${usuarios[k].userId}</b><br />`;
             document.getElementById('diez').innerHTML += `<b> Id: ${usuarios[k].id}</b><br />`;
             document.getElementById('diez').innerHTML += `<b> title: ${usuarios[k].title}</b><br />`;
             document.getElementById('diez').innerHTML += `<b> body: ${usuarios[k].body}</b><br/><br/>`;
             document.getElementById('diez').innerHTML += `<b>*****COMENTARIOS*****<br/><br/>`;
             //inicia comentarios
             document.getElementById('diez').innerHTML += `<p><p><p><p><p><p><i> PostId: ${comentarios[k].postId}</b><br />`;
             document.getElementById('diez').innerHTML += `<p><p><p><p><p><p><i> Id: ${comentarios[k].id}</b><br />`;
             document.getElementById('diez').innerHTML += `<p><p><p><p><p><p><i> nombre: ${comentarios[k].name}</b><br />`;
             document.getElementById('diez').innerHTML += `<p><p><p><p><p><p> email:<i> ${comentarios[k].email}</b><br/><br/>`;
             document.getElementById('diez').innerHTML += `<p><p><p><p><p><p> body:<i> ${comentarios[k].body}</b><br/><br/>`;
             }       
                 
              //ESTE IF Y FOR ES PARA PONER AQUELLOS  POSTS EN CASO DE QUE HAYAN MAS POSTS QUE COMENTARIOS YA QUE EL ANTERIOR FOR SOLO LLEGA HASTA EL INDICE
                 if(longitudpost>longitudcomentarios){//si es mayor quiere decir que hay que agregar los posts que no tienes comentarios asociados abajo de los que si tienen
                     if(k==longitudcomentarios-1){
                     let i=0;
                               for (i=longitudcomentarios; i < longitudpost; i++) {
                                     document.getElementById('diez').innerHTML += `<b> IdUser: ${usuarios[i].userId}</b><br />`;
                                     document.getElementById('diez').innerHTML += `<b> Id: ${usuarios[i].id}</b><br />`;
                                     document.getElementById('diez').innerHTML += `<b> title: ${usuarios[i].title}</b><br />`;
                                     document.getElementById('diez').innerHTML += `<b> body: ${usuarios[i].body}</b><br/><br/>`;
                                 }
                             }
                     }          
             }  //finaliza el for primero   
            
             //}  
             });//aqui finaliza el bucle de los comentarios 
           
         });
         //AGREGANDO LA INFORMACION CUANDO SE LE DE CLICK EN EL BOTON DE POST
         document.getElementById('diez').innerHTML += `<br/>LISTA DE POSTS: <br/><br/>`;

     };
     
     const button2 = document.createElement('button'); 
     button2.type = 'button'; 
     button2.innerText = 'TODOS'; 
     document.getElementById('diez').appendChild(button2);
         button2.onclick=function(){//aqui empieza cuando le damos click al boton de TODOS
             
             //aqui pondremos la el fetch para traer las TAREAS
             fetch('https://jsonplaceholder.typicode.com/users/10/todos')//trayendo las tareas con PostId=1 
             .then(function(response) {
             return response.json();   
             })
             .then(function(myJson2) {
                 document.getElementById('diez').innerHTML += `<b><br/> Lista de Tareas:<br/>`;
                 var tareas = myJson2;
                 //document.getElementById('uno').innerHTML += `<br/>a ver entro este demsadre`;
                 for (let z=tareas.length-1; z > -1; z--) 
                         {
                                 document.getElementById('diez').innerHTML += `<b><br/> IdUser: ${tareas[z].userId}</b><br />`;
                                 document.getElementById('diez').innerHTML += `<b> Id: ${tareas[z].id}</b><br />`;
                                 document.getElementById('diez').innerHTML += `<b> title: ${tareas[z].title}</b><br />`;
                                 document.getElementById('diez').innerHTML += `<b> completed: ${tareas[z].completed}</b><br/>`;
                         }
             });
             document.getElementById('diez').innerHTML += `<br/> -------------------<h3>formulario<br/> Ingresar nueva tarea<h3/>`;
             //**********aqui se pondra el codigo del formulario
                var my_form = document.createElement('form');
                my_form.name='myForm';
                my_form.method='POST';
                my_form.action='https://jsonplaceholder.typicode.com/users/10/todos';
                //AGREGANDO EL TITULO EN UN CUADRO DE TEXTO
                my_tb=document.createElement('INPUT');
                my_tb.type='TEXT';
                my_tb.placeholder='ingresa titulo de tarea';
                my_tb.name='myInput';
                //my_tb.value='Values of my Input';
                my_form.appendChild(my_tb);

                //AGREGANDO CHECKBOX
                check=document.createElement('INPUT');
                check.type='checkbox';
                check.name='completado';
                check.value=true;
                my_form.appendChild(check);
                //agregando boton
                button3=document.createElement('input');
                button3.type = 'submit'; 
                button3.value = 'guardar'; 
                my_form.appendChild(button3);

                document.getElementById('diez').appendChild(my_form);
                document.getElementById('diez').innerHTML += `---------------------`;
             
         }//termina el cierre de las llaves del boton2
//********************************************************************************************** */

     }
     
 };
 document.getElementById('diez').innerHTML += `<br/>`;
}
}
divOut.innerHTML = txtOut;

});

//ponemos la funcion para que muestre o cierre lo que necesitemos
function mostrar() {
 div = document.getElementById('flotante');
 div.style.display = '';
}

function cerrar() {
 div = document.getElementById('flotante');
 div.style.display = 'none';
}
function ocultar(){
document.getElementById('obj2').style.display = 'none';
}
function mostrar(){
document.getElementById('obj2').style.display = 'block';
}

function ocultar2(){
document.getElementById('obj1').style.display = 'none';
}
function mostrar2(){

document.getElementById('obj1').style.display = 'block';
}

function ocultar3(){
document.getElementById('obj3').style.display = 'none';
}
function mostrar3(){

document.getElementById('obj3').style.display = 'block';
}

