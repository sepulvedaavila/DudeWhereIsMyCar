window.addEventListener('load',inicializar, true);
        
        function inicializar(){
            boton = document.getElementById('boton');
            anchuraBoton = boton.offsetWidth;
            boton.style.height = anchuraBoton + "px"; 
        }
        
        function estacionar(){
            navigator.geolocation.getCurrentPosition(localizacion);
        }
        
        function localizacion(pos){
            long = pos.coords.longitude;
            lat = pos.coords.latitude;
            grados = pos.coords.heading;
            localStorage.setItem('long', long);
            localStorage.setItem('lat', lat);
            localStorage.setItem('grados', grados);
        }