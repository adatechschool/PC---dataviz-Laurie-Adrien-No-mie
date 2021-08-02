var listPrenoms = [];

  fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&q=&rows=20&sort=annee&facet=annee&facet=prenoms&facet=nombre&facet=nombre_total_cumule') 
        .then(function(response){
             listPrenoms = response.json();
             console.log(listPrenoms);
             return listPrenoms;  
        })
        .then(listPrenoms =>{
          for(let i=0; i<listPrenoms.records.length; i++){
            //console.log(listPrenoms.records[i].fields.prenoms);
            let prenoms = listPrenoms.records[i].fields.prenoms;
            document.write(prenoms + "<br>");
          }
          for(let i=0; i<listPrenoms.records.length; i++){
            //console.log(listPrenoms.records[i].fields.nombre);
            let nombre = listPrenoms.records[i].fields.nombre;
            document.write(nombre + "<br>");
          }
        })
        .catch((error) => {
            console.log('rejected',error);
        });



        