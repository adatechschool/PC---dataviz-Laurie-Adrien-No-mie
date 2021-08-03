var listPrenoms = [];
var prenoms = [];
var nombre = [];


  fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&q=&rows=20&sort=annee&facet=annee&facet=prenoms&facet=nombre&facet=nombre_total_cumule') 
        .then(function(response){
             listPrenoms = response.json();
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
        .catch((error) => {
            console.log('rejected',error);
        });

