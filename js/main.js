function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep+"/json/";
    console.log(url);
    $.ajax({
        url: url,
        type:"GET",
        success: function(response) {
            console.log(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            $("#logradouro").html(response.logradouro);//utilizando jQuery: pego o id
            // e passo para o html o que eu quero que ele mostre
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("localidade").innerHTML = response.localidade;
        }
    });
}