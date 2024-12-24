const form = document.getElementById('form_validar');
const incorreto = document.querySelector('.error');

function validadorMaior(x, y) {

    if (x < y) {
        return 1;
    } else{
        return 0;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroA = +document.getElementById('numero_a').value;
    const numeroB = +document.getElementById('numero_b').value;
    const sucesso = `O número B: <div class='destaque'>${numeroB}</div> é maior que o número A: <div class='destaque'>${numeroA}</div>`

    const condicao = validadorMaior(numeroA, numeroB);
    console.log(condicao);

    if (condicao === 1) {
    const correto = document.querySelector('.success_message');
    correto.innerHTML = sucesso;
    correto.style.display = 'block';

    incorreto.style.display = 'none';
    document.getElementById('numero_a').style.border = '';

    document.getElementById('numero_a').value = ''
    document.getElementById('numero_b').value = ''
    } else{
        incorreto.style.display = 'block';
        document.getElementById('numero_a').style.border = '2px solid crimson';
    }

});

document.getElementById('numero_a').addEventListener('input', function() {
    this.style.border = '';
    incorreto.style.display = 'none';
});
