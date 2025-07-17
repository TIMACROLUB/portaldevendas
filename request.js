var form = new FormData();
form.append("rca", "349");
form.append("cnpjCliente", "46.326.436/0001-76");
form.append("razaoSocialCliente", "JOSE TAIRONE MORAIS 05679712440");
form.append("fantasiaCliente", "JT.I");
form.append("inscricaoEstadualCliente", "ISENTO");
form.append("ramoAtividadeCliente", "Treinamento em Informatica");
form.append("bandeiraCombustivelCliente", "''");
form.append("cpfSocio0", "''");
form.append("nomeSocio0", "");
form.append("cpfSocio1", "");
form.append("nomeSocio1", "");
form.append("cepCliente", "59067400");
form.append("logradouro", "AVENIDA DOS CAIAPOS");
form.append("numero", "3005");
form.append("complemento", "BLOCO ROMA APT 102");
form.append("bairro", "PITIMBU");
form.append("cidadeEndereco", "NATAL");
form.append("estadoEndereco", "RN");
form.append("instalacoes", "P");
form.append("sedePropria", "S");
form.append("possuiFiliais", "N");
form.append("quantidadeFiliais", "0");
form.append("pertenceRede", "N");
form.append("nomeRede", "");
form.append("atendimentoManha", "S");
form.append("atendimentoTarde", "S");
form.append("emailNfe", "jtaironemorais@hotmail.com");
form.append("telefone", "(84)99661-8181");
form.append("celular", "(84)99661-8181");
form.append("nomeComprador", "Flavio");
form.append("emailComprador", "redenovageracao@outlook.com.br");
form.append("telefoneComprador", "(33)9962-6063");
form.append("celularComprador", "(33)8839-6876");
form.append("nomeFornecedor", "");
form.append("telefoneFornecedor", "");
form.append("observacoes", "otimo cliente");
form.append("creditoSugerido", "1500");
form.append("files", fileInput.files[0], "/C:/anexosprecad/DOCS_TESTE/CNH_COMPRADOR.pdf");
form.append("files", fileInput.files[0], "/C:/anexosprecad/DOCS_TESTE/CNH_PROPRIETARIO.pdf");

var settings = {
  "url": "http://portalvendas.macrolub.com.br:3031/api/cadastrarPreCadCli",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});