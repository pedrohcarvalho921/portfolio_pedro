function calcular(i) {
    const num1 = Number(document.getElementById('num-one').value);
    const num2 = Number(document.getElementById('num-two').value);
    let total = 0;


    document.getElementById('calcular').addEventListener('click', function() {
        switch(i) {
            case '+':
                total = num1 + num2;
                break;
            case '-':
                total = num1 - num2;
                break;
            case '*':
                total = num1 * num2;
                break;
            case '/':
                total = num1 / num2;
                break;
            default:
                total = 'Operação inválida';
        }

        document.getElementById('resultArea').innerHTML = `Resultado: ${total}`;
    });
}










document.getElementById('soma').addEventListener('click', function() {
    calcular('+');
});
document.getElementById('subtracao').addEventListener('click', function() {
    calcular('-');
});
document.getElementById('multiplicacao').addEventListener('click', function() {
    calcular('*');
});
document.getElementById('divisao').addEventListener('click', function() {
    calcular('/');
});