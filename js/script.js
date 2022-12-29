function tabuada() {

    var num = document.getElementById('numero');
    var tabela = document.getElementById('tabuada');

    if(num.value.length == 0){
        window.alert("Por favor insira um número!");
    } else {
        var n = Number(num.value);
        tabela.innerHTML = "";

        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tab${n}`
            tabela.appendChild(item);
        }
    }
}