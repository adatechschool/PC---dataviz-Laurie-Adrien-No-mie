var listPrenoms = [];

  fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&q=&rows=20&sort=annee&facet=annee&facet=prenoms&facet=nombre&facet=nombre_total_cumule') 
        .then(function(response){
             listPrenoms = response.json();
             console.log(listPrenoms);
             return listPrenoms;  
        })
        .then(listPrenoms =>{
          console.log(listPrenoms.records[0]);
          for(i=0; i<listPrenoms.records.length; i++){
            console.log(listPrenoms.records[i]);
          }
        })
        .catch((error) => {
            console.log('rejected',error);
        });



        