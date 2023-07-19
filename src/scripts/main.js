document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroAletorio = Math.random() * numeroMax;
        numeroAletorio = Math.floor(numeroAletorio + 1);
        
        document.getElementById('resultado-valor').innerText = numeroAletorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})