var listPrenoms = [];
var prenoms = [];
var nombre = [];

  fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&q=&rows=20&sort=annee&facet=annee&facet=prenoms&facet=nombre&facet=nombre_total_cumule') 
        .then(function(response){
             listPrenoms = response.json();
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
        .catch((error) => {
            console.log('rejected',error);
        });



        