//Função macara colocar no cnpj
function mascaraCnpj(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
  }
  
  function execmascara(){
    v_obj.value=v_fun(v_obj.value)
  }
  
  function cpfCnpj(v){
    if(v.length <= 20){
        //Remove tudo o que não é dígito
        v=v.replace(/\D/g,"")
        //Coloca ponto entre o segundo e o terceiro dígitos
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")
        //Coloca ponto entre o quinto e o sexto dígitos
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
        //Coloca uma barra entre o oitavo e o nono dígitos
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
        //Coloca um hífen depois do bloco de quatro dígitos
        v=v.replace(/(\d{4})(\d)/,"$1-$2")
    }
    return v
  }
//fim da mascara

//Função mascara colocar no cep
function mascaraCep(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
  }
  
  function execmascara(){
    v_obj.value=v_fun(v_obj.value)
  }
  
  function cep(v){
    if(v.length <= 9){
        //Remove tudo o que não é dígito
        v=v.replace(/\D/g,"")
       //Coloca um hífen depois do bloco de quatro dígitos
        v=v.replace(/(\d{5})(\d)/,"$1-$2")
    }
    return v
  }
//fim da mascara cep

//inicio mascaratelefone
function mascaraTelefone( campo ) {		
  function trata( valor,  isOnBlur ) {
    if(valor.length < 14){
    valor = valor.replace(/\D/g,"");             			
    valor = valor.replace(/^(\d{2})(\d)/g,"($1)$2"); 		
    if( isOnBlur ) {
      valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");   
    } else {
      valor = valor.replace(/(\d)(\d{3})$/,"$1-$2"); 
    }
    }
    return valor;
  }
  campo.onkeypress = function (evt) {
    var code = (window.event)? window.event.keyCode : evt.which;	
    var valor = this.value
    if(code > 57 || (code < 48 && code != 8 ))  {
      return false;
    } else {
      this.value = trata(valor, false);
    }
  }
  campo.onblur = function() {
    var valor = this.value;
    if( valor.length < 13 ) {
      this.value = ""
    }else {		
      this.value = trata( this.value, true );
    }
  }
  campo.maxLength = 14;
}
mascaraTelefone( msform.telefone);
mascaraTelefone( msform.celular);
mascaraTelefone( msform.telefoneComprador);
mascaraTelefone( msform.celularComprador);
mascaraTelefone( msform.telefoneFornecedor);
//Fim mascara telefone