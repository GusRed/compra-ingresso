function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeCompra = document.getElementById("qtd").value;
    let quantidadeDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);

    if (isNaN(quantidadeCompra) || quantidadeCompra <= 0){
        alert("Insira um valor válido para quantidade.");
        return;
    }

    if (quantidadeCompra > quantidadeDisponivel){
        alert(`Quantidade desejada para compra do seu tipo de ingresso indisponível.`);
        return;
    } else {
        alert("Compra realizada com sucesso!");
        quantidadeDisponivel = quantidadeDisponivel - quantidadeCompra;
    }

    document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeDisponivel;
    document.getElementById("qtd").value = "";
    document.getElementById("qtd").placeholder = "00"; 
}