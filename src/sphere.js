
        var canvas = document.querySelector('.myCanvas');
        var width = canvas.width = window.innerWidth;
        var height = canvas.height = window.innerHeight;
        var ctx = canvas.getContext('2d');
        
        function degToRad(degrees) {
            return degrees * Math.PI / 180;
            };
        var radial = ctx.createRadialGradient(80,300,100,80,300,150);
        radial.addColorStop(0,'#F2CB05'); //Jaune
        radial.addColorStop(0.5,'#F2B705'); //Jaune
        radial.addColorStop(1, '#F29F05'); //Rouge
        
       function sun (){
        ctx.fillStyle = radial;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(100, 300, 150, degToRad(0), degToRad(360), true);
        ctx.fill();
       }

        anime({
            targets: sun(),
            translateX: 250,
            duration: 3000
          });
       
