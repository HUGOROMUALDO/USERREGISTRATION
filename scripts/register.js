//arreglo vacio
let alumnos=[]; 

//variables globales
  /*    let inputNombre=document.getElementById("txtNombre");
        let inputCorreo=document.getElementById("txtCorreo");
        let inputGenero=document.getElementById("txtGenero");
        let inputCampus=document.getElementById("SelCampus");
        let inputCalA=document.getElementById("numCalA");
        let inputCalB=document.getElementById("numCalB");*/

    let contador=0;

//crear constructor

    function Estudiante(nombreP, correoP, generoP, campusP, calAP, calBP){
        this.nombre=nombreP;
        this.correo=correoP;
        this.genero=generoP;
        this.campus=campusP;
        this.calA=calAP;
        this.calB=calBP;
        this.id=contador++;
    }
       

   
    function validacion(alumno){
        inputNombre=document.getElementById("txtNombre");
        inputCampus=document.getElementById("SelCampus");
        inputCalA=document.getElementById("numCalA");
        inputCalB=document.getElementById("numCalB");

        let valida=true;

    //remover valores de las variables
        inputNombre.classList.remove("error");
        inputCampus.classList.remove("error");
        inputCalA.classList.remove("error");
        inputCalB.classList.remove("error");
        

        if(alumno.nombre==""){
            //alert("Ingresa el nombre");
            inputNombre.className=("alert alert-danger");
            valida=false;
        }
        if(alumno.campus==""){
            inputCampus.className=("alert alert-danger");
            valida=false;
        }
        if(alumno.calA==""){
            inputCalA.className=("alert alert-danger");
            valida=false;
        }
        if(alumno.calA==""){
            inputCalB.className=("alert alert-danger");
            valida=false;
        }
        return valida;

    }


//crear funcion registrar

    function registro(){
        console.log("Registrando nuevo alumno");
        let inputNombre=document.getElementById("txtNombre").value;
        let inputCorreo=document.getElementById("txtCorreo").value;
        let inputGenero=document.getElementById("txtGenero").value;
        let inputCampus=document.getElementById("SelCampus").value;
        let inputCalA=document.getElementById("numCalA").value;
        let inputCalB=document.getElementById("numCalB").value;

    //crear el objeto nuevoAlumno
    let newalumno=new Estudiante(inputNombre,inputCorreo,inputGenero,inputCampus,inputCalA,inputCalB);
    if(validacion(newalumno)==true){
        
    //desplegar en consola el nuevo alumno
    console.log(newalumno);
    alumnos.push(newalumno);

    //mostrar registros
   // displayCards();
     imprimirAlumnos();

    //limpiar formulario
   // limpiarform();
   limpiar();
    
    }
}
    function imprimirAlumnos(){
        let row="";
        for(let i=0; i<alumnos.length;i++){
            let alumno = alumnos[i];

            let promedio = (Number(alumno.calA)+Number(alumno.calB))/2;

            row+=`
            <tr id="${alumno.id}">
                    <td> ${alumno.nombre}</td>
                    <td> ${alumno.correo}</td>
                    <td> ${alumno.genero}</td>
                    <td> ${alumno.campus}</td>
                    <td> ${alumno.calA}</td>
                    <td> ${alumno.calB}</td>
                    <td>${promedio}</td>
                    <td><button class="btn btn-danger" onclick="borrarAlumno(${alumno.id})";>Borrar</button></td> 
            </tr>

            `;
        }
        document.getElementById("alumnosTabla").innerHTML=row;
    }

   
    //Limpiar formulario
   /* function limpiarform(){
        inputNombre.value="";
        inputCorreo.value="";
        inputGenero.value="";
        inputCampus.value="";
        inputCalA.value="";
        inputCalB.value="";
    
    }*/

    function limpiar(){
        
         inputNombre=document.getElementById("txtNombre").value="";
         inputCorreo=document.getElementById("txtCorreo").value="";
         inputGenero=document.getElementById("txtGenero").value="";
         inputCampus=document.getElementById("SelCampus").value="";
         inputCalA=document.getElementById("numCalA").value="";
         inputCalB=document.getElementById("numCalB").value="";
         
        
    }

    function borrarAlumno(identificador){
        console.log("Borrando...");
        document.getElementById(identificador).remove();
        alumnos.splice(identificador,1);

    }

//crear funcion init
    function init(){
        console.log("Register");
        let alumno = new Estudiante("Hugo","hgromualdo11@gmail.com","M","Mexicali",90,90);
        let alumno2=new Estudiante("Andres","andres@gmail.com", "M","Tijuana",95,80);
        let alumno3 = new Estudiante("Pedro", "pedro@gmail.com","M","Mexicali",90,98)
        console.log(alumno, alumno2,alumno3);
        alumnos.push(alumno,alumno2,alumno3);
        imprimirAlumnos();
       //displayCards();
       

    }

//ejecutar funcion init
    window.onload = init; //ejecucion cuando renderiza el  HTML