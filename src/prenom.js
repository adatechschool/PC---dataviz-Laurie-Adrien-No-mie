var listPrenoms = [];
var prenoms = [];
<<<<<<< HEAD
var nombre =[];
var resultat = [];
=======
var nombre = [];

>>>>>>> 7137e2e1ca4af5b5113b2fab4bf90c0e466bea0c

  fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&q=&rows=20&sort=annee&facet=annee&facet=prenoms&facet=nombre&facet=nombre_total_cumule') 
        .then(function(response){
             listPrenoms = response.json();
<<<<<<< HEAD
             return listPrenoms;  
        })
        .then(listPrenoms =>{
            for(let i=0; i<listPrenoms.records.length; i++){
              prenoms[i] = listPrenoms.records[i].fields.prenoms;
              nombre[i] =  listPrenoms.records[i].fields.nombre;
              console.log(prenoms);
              console.log(nombre);
              document.getElementById("print1").innerHTML = prenoms[5]; 
              document.getElementById("print1b").innerHTML = nombre[5]; 
              document.getElementById("print2").innerHTML = prenoms[10];
              document.getElementById("print2b").innerHTML = nombre[10];
              document.getElementById("print3").innerHTML = prenoms[0];
              document.getElementById("print3b").innerHTML = nombre[0];
              document.getElementById("print4").innerHTML = prenoms[19];
              document.getElementById("print4b").innerHTML = nombre[19];
              document.getElementById("print5").innerHTML = prenoms[1];
              document.getElementById("print5b").innerHTML = nombre[1];
              document.getElementById("print6").innerHTML = prenoms[15];
              document.getElementById("print6b").innerHTML = nombre[15];
              document.getElementById("print7").innerHTML = prenoms[6];
              document.getElementById("print7b").innerHTML = nombre[6];
              document.getElementById("print8").innerHTML = prenoms[16];
              document.getElementById("print8b").innerHTML = nombre[16];
              document.getElementById("print9").innerHTML = prenoms[11];
              document.getElementById("print9b").innerHTML = nombre[11];
              document.getElementById("print10").innerHTML = prenoms[2];
              document.getElementById("print10b").innerHTML = nombre[2];
              document.getElementById("print11").innerHTML = prenoms[7];
              document.getElementById("print11b").innerHTML = nombre[7];
              document.getElementById("print12").innerHTML = prenoms[12];
              document.getElementById("print12b").innerHTML = nombre[12];
              document.getElementById("print13").innerHTML = prenoms[17];
              document.getElementById("print13b").innerHTML = nombre[17];
              document.getElementById("print14").innerHTML = prenoms[3];
              document.getElementById("print14b").innerHTML = nombre[3];
              document.getElementById("print15").innerHTML = prenoms[8];
              document.getElementById("print15b").innerHTML = nombre[8];
              document.getElementById("print16").innerHTML = prenoms[13];
              document.getElementById("print16b").innerHTML = nombre[13];
              document.getElementById("print17").innerHTML = prenoms[18];
              document.getElementById("print17b").innerHTML = nombre[18];
              document.getElementById("print18").innerHTML = prenoms[4];
              document.getElementById("print18b").innerHTML = nombre[4];
              document.getElementById("print19").innerHTML = prenoms[9];
              document.getElementById("print19b").innerHTML = nombre[9];
              document.getElementById("print20").innerHTML = prenoms[14];
              document.getElementById("print20b").innerHTML = nombre[14];
              }
            })
=======
<<<<<<< HEAD
             return listPrenoms;  
        })
        .then(listPrenoms =>{
            for(let i=0; i<listPrenoms.records.length; i++){
              prenoms[i]= listPrenoms.records[i].fields.prenoms;
             document.getElementById("prenoms").innerHTML = prenoms;
              nombre[i] =  listPrenoms.records[i].fields.nombre;
             document.getElementById("nombre").innerHTML = nombre;
            }
          })
=======
             //console.log(listPrenoms);
             return listPrenoms;  
        })
        .then(listPrenoms =>{
          for(let i=0; i<listPrenoms.records.length; i++){
            //console.log(listPrenoms.records[i].fields.prenoms);
            prenoms = [listPrenoms.records[i].fields.prenoms];
            prenoms.toString();            
            document.write(prenoms + "<br>");
            let nombre = [listPrenoms.records[i].fields.nombre];
            document.write(nombre + "<br>");
            console.log(prenoms, nombre)
          }
        })
>>>>>>> 6f327e4a9a0e0c5d3f25cfcd84b08f37dffb51fd
>>>>>>> 7137e2e1ca4af5b5113b2fab4bf90c0e466bea0c
        .catch((error) => {
            console.log('rejected',error);
        });

