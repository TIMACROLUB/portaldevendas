<?php include "pages/header.php" ?>
<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>
<script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>

<link href="/css/cadastro.css" rel="stylesheet">
<title>Portal de Vendas - Cadastro de Cliente</title>
<script src='js/sessionControl.js'></script>
</head>

<body id="page-top">
    <!-- <body id="page-top"> -->

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php include "pages/menu.php" ?>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div class='element' id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>



                    <!-- Topbar Navbar -->
                    <?php include "pages/menuSuperior.php"?>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid element">
                    <div class="row justify-content-center mt-0">
                        <div class="col text-center p-0 mt-3 mb-2 ml-5 mr-5">
                            <div class="card px-0 pt-4 pb-0 mt-3 mb-3 element">
                                <h2><strong>Cadastrar Novo Cliente</strong></h2>
                                <p>Preencha todos os dados e clique em 'Avançar'</p>
                                <div class="row">
                                    <div class="col-md-12 mx-0">
                                        <form id="msform" name="msform">
                                            <input type="text" name="rca" id="rca" hidden/>
                                            <!-- progressbar -->
                                            <div class="row">
                                                <div class="col">
                                                    <ul class="list-inline " id="progressbar">
                                                        <li class="list-item active" id="dadosPessoais"></li>
                                                        <li class="list-item" id="endereco"></li>
                                                        <li class="list-item" id="dadosContato"></li>
                                                        <li class="list-item" id="dadosComprador"></li>
                                                        <li class='list-item' id='documentos'></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <!-- fieldsets -->
                                            <fieldset class='form-fieldset'>
                                                <div class="form-card mx-4 element dados-cliente" id='dados-cliente'>
                                                    <h2 class="fs-title mb-3 element">Dados Pessoais</h2>
                                                    <div class="form-container row align-items-end">
                                                        <div class="form-group m-0 col-auto text-left">
                                                            <label class='m-0'for="cnpjCliente"><small>CNPJ</small></label>
                                                            <input type="text" class="form-control form-control-user element required mb-1"
                                                                id="cnpjCliente" name="cnpjCliente" placeholder="99.999.999/0001-99" 
                                                                onkeypress="mascaraCnpj(this,cpfCnpj)" maxlength = '18'>
                                                        </div>
                                                        <div class="col-auto">
                                                            <button type="button" class="btn btn-primary btn-busca-cnpj mb-1">Buscar</button>
                                                        </div>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0 ' for="razaoSocialCliente"><small>Razão Social</small></label>
                                                        <input type="text" class="form-control form-control-user element required"
                                                            id="razaoSocialCliente" name="razaoSocialCliente"
                                                            placeholder="Razao Social">
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0 ' for="fantasiaCliente"><small>Nome Fantasia</small></label>
                                                        <input type="text" class="form-control form-control-user element required"
                                                            id="fantasiaCliente" name="fantasiaCliente"
                                                            placeholder="Fantasia">
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0 ' for="inscricaoEstadualCliente"><small>Inscrição Estadual</small></label>
                                                        <input type="text" class="form-control form-control-user element required"
                                                            id="inscricaoEstadualCliente" name="inscricaoEstadualCliente"
                                                            placeholder="Inscrição Estadual">
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0 ' for="ramoAtividadeCliente"><small>Ramo de Atividade</small></label>
                                                        <input type="text"
                                                            class="form-control form-control-user element required"
                                                            id="ramoAtividadeCliente" name="ramoAtividadeCliente"
                                                            placeholder="Ramo de Atividade">
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0 ' for="bandeiraCombustivelCliente"><small>Bandeira de Combustível (Opcional)</small></label>
                                                        <input type="text" class="form-control form-control-user element"
                                                            id="bandeiraCombustivelCliente" name="bandeiraCombustivelCliente"
                                                            placeholder="Bandeira de Combustível">
                                                    </div>
                                                    <h2 class="fs-title mt-3 mb-3 element">Sócios</h2>
                                                    <div class="form-group element" id="socios"></div>
                                                </div>
                                                <input type="button" name="next" id='avancarCnpj' class="next action-button"
                                                    value="Avançar" />
                                            </fieldset>
                                            <fieldset class='form-fieldset'>
                                                <div class="form-card mx-4 endereco-cliente" id='endereco-cliente'>
                                                    <h2 class="fs-title mb-3 element">Endereço</h2>
                                                    <div class="form-container row align-items-end">
                                                        <div class="form-group m-0 col-auto text-left">
                                                            <label class='m-0' for="cepCliente"><small>CEP</small></label>
                                                            <input type="text" class="form-control form-control-user element required mb-1" 
                                                                    id="cepCliente" name="cepCliente" placeholder="99999-999" 
                                                                    onkeypress="mascaraCep(this,cep)" maxlength='9'>
                                                        </div>
                                                        <div class="col-auto">
                                                            <button type="button" class="btn btn-primary btn-busca-cep mb-1">Buscar</button>    
                                                        </div>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="lograudoroCliente"><small>Logradouro</small></label>
                                                        <input type="text" class="form-control form-control-user required element" id="lograudoroCliente"
                                                            name="logradouro" placeholder="Logradouro">    
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="numeroEndereco"><small>Número</small></label>
                                                        <input type="text" class="form-control form-control-user required element" id="numeroEndereco" 
                                                            name="numero" placeholder="Numero" maxlength='9'>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="complementoEndereco"><small>Complemento (Opcional)</small></label>
                                                        <input type="text" class="form-control form-control-user element" id="complementoEndereco"
                                                            name="complemento" placeholder="Complemento">
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="bairroEndereco"><small>Bairro</small></label>
                                                        <input type="text" class="form-control form-control-user required element" id="bairroEndereco"
                                                            name="bairro" placeholder="Bairro">
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="cidadeEndereco"><small>Cidade</small></label>
                                                        <input type="text" class="form-control form-control-user required element"
                                                            id="cidadeEndereco" name="cidadeEndereco" placeholder="Cidade">    
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="estadoEndereco"><small>Estado</small></label>
                                                        <input type="text" class="form-control form-control-user required element"
                                                            id="estadoEndereco" name="estadoEndereco" placeholder="Estado" maxlength='2'>
                                                    </div>
                                                    <h2 class="fs-title mt-3 mb-3 element">Instalações do Cliente</h2>
                                                    <div class="form-group text-left border-bottom" id='instalacoes'>
                                                        <small class="text-sm font-light-bold mb-1 ">
                                                            Tamanho das Instalações:
                                                        </small>
                                                        <div class='form-check my-2'>
                                                            <input class='form-input-check form-radio-input required' type="radio" id='inst-P' name='form-radio-input-instalacoes' value='P'>
                                                            <label class='form-radio-label' for="inst-P">Pequena</label>    
                                                        </div>
                                                        <div class='form-check my-2'>
                                                            <input class='form-input-check form-radio-input required' type="radio" id='inst-M' name='form-radio-input-instalacoes' value='M'>
                                                            <label class='form-radio-label' for="inst-M">Média</label>    
                                                        </div>
                                                        <div class='form-check my-2'>
                                                            <input class='form-input-check form-radio-input required' type="radio" id='inst-MG' name='form-radio-input-instalacoes' value='MG'>
                                                            <label class='form-radio-label' for="inst-MG">Média/Grande</label>    
                                                        </div>
                                                        <div class='form-check my-2'>
                                                            <input class='form-input-check form-radio-input required' type="radio" id='inst-G' name='form-radio-input-instalacoes' value='G'>
                                                            <label class='form-radio-label' for="inst-G">Grande</label>    
                                                        </div>
                                                    </div>    
                                                    <div class="form-group text-left border-bottom mb-3">
                                                        <small class="text-sm font-light-bold mb-1">
                                                            Possui prédio próprio?
                                                        </small>
                                                        <div class='form-check-switch my-2'>
                                                            <label class='form-switch' for='inst-propria'>
                                                                <input class='form-switch-input' type="checkbox" id='inst-propria'>
                                                                <label class='form-switch-slider' for="inst-propria"></label>
                                                            </label>
                                                            <label class='form-switch-label'for="inst-propria"></label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="quantidadeFiliais"><small>Quantidade de Filiais (Se não houver preencher como 0)</small></label>
                                                        <input type="number" class="form-control form-control-user number-input w-25"
                                                            placeholder="Quantas?" id="quantidadeFiliais" name="quantidadeFiliais">
                                                    </div>
                                                    <div class="form-group text-left border-bottom">
                                                        <label class='m-0' for="nomeRede"><small>Nome da Rede (Somente se o cliente for Rede)</small></label>
                                                        <input type="text" class="form-control form-control-user mb-3"
                                                            placeholder="Nome da Rede" id="nomeRede" name="nomeRede">
                                                    </div>
                                                    <div class="form-group text-left" id='horario-atendimento'>
                                                        <small class="text-sm font-light-bold mb-1 ">
                                                            Horário para Atendimento
                                                        </small>
                                                        <div class="form-check my-2">
                                                            <input class='form-input-check' type="checkbox" id='check-manha' value='M'>
                                                            <label class='m-0' for="check-manha">Manhã</label>
                                                        </div>
                                                        <div class="form-check my-2">
                                                            <input class='form-input-check' type="checkbox" id='check-tarde' value='T'>
                                                            <label class='m-0' for="check-tarde">Tarde</label>
                                                        </div>
                                                        <div class="form-check my-2">
                                                            <input class='form-input-check' type="checkbox" id='check-noite' value='N'>
                                                            <label class='m-0' for="check-noite">Noite</label>                                                        
                                                        </div>                                                                        
                                                    </div>     
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Voltar"/>
                                                <input type="button" name="next" class="next action-button" value="Avançar"/>
                                            </fieldset>
                                            <fieldset class='form-fieldset'>
                                                <div class="form-card mx-4 contato-cliente" id='contato-cliente'>
                                                    <h2 class="fs-title element">Dados de Contato</h2>
                                                    <div class="form-group text-left">
                                                        <label class='m-0'for="emailNfe"><small>E-mail NF-e</small></label>
                                                        <input class="form-control form-control-user element required" type="email" name= "emailNfe" placeholder="E-mail NFE" id="emailNfe"/>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="telefon"><small>Telefone</small></label>
                                                        <input class="form-control form-control-user phone element required" type="text" name= "telefone" placeholder="Telefone" id="telefone" maxlength="15"/>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="celular"><small>Celular</small></label>
                                                        <input class="form-control form-control-user element required" type="text" name= "celular" placeholder="Celular" id="celular" maxlength="15"/>
                                                    </div>                                                            
                                                    <h2 class="fs-title element">
                                                        Dados do Comprador
                                                    </h2>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="nomeComprador"><small>Nome do Comprador</small></label>
                                                        <input class="form-control form-control-user element required" type="text" name= "nomeComprador" placeholder="Nome" id="nomeComprador"/>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="emailComprador"><small>Email do Comprador</small></label>
                                                        <input class="form-control form-control-user element required" type="email" name= "emailComprador" placeholder="E-mail" id="emailComprador"/>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="telefoneComprador"><small>Telefone do Comprador</small></label>
                                                        <input class="form-control form-control-user element required" type="text" name= "telefoneComprador" placeholder="Telefone" id="telefoneComprador" maxlength="15"/>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <label class='m-0' for="celularComprador"><small>Celular do Comprador</small></label>
                                                        <input class="form-control form-control-user element required" type="text" name= "celularComprador" placeholder="Celular" id="celularComprador" maxlength="15"/>
                                                    </div>                                                            
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Voltar"/>
                                                <input type="button" name="next" class="next action-button" value="Avançar"/>
                                            </fieldset>
                                            <fieldset class='form-fieldset'>
                                                <div class="form-card mx-4 condicoes-comerciais-cliente" id='condicoes-comerciais-cliente'>
                                                    <h2 class="fs-title element">Condicoes Comerciais</h2>
                                                    <div class="form-group text-left" id="formFornecedores">
                                                        <small class="text-sm font-light-bold mb-1 ">
                                                            Fornecedores
                                                        </small>
                                                        <div class="row mb-4">
                                                            <div class="col lg-5">
                                                                <input type="text" class="form-control form-control-user mb-3 element" id="fornecedor" name="nomeFornecedor" placeholder="Fornecedor (Opcional) "/>
                                                                <input type="text" class="form-control form-control-user element" id="telefonefornecedor" name="telefoneFornecedor" placeholder="Telefone (Opcional)" maxlength="15"/>
                                                            </div>

                                                            <div class="col-auto mt-4">
                                                                <a class="btn btn-light btn-add-fornecedor" role="button">
                                                                    <i class="fas fa-plus"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group text-left">
                                                        <small class="text-sm font-light-bold mb-1 ">
                                                            Observações
                                                        </small>
                                                        <textarea class="form-control form-control-user mb-3 element" id="observacoes" name="observacoes" placeholder="Obsevações" rows="5"></textarea>
                                                    </div>
                                                    <div class='form-group text-left'>
                                                        <label class='m-0' for="creditoSugerido"><small>Limite de crédito sugerido (Preencher com 0 se não houver)</small></label>
                                                        <input type="number" class="form-control form-control-user element required" id="creditoSugerido" name="creditoSugerido" placeholder="Limite de Crédito Sugerido" maxlength="16"/>
                                                    </div>
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Voltar"/>
                                                <input type="button" name="next" class="next action-button" value="Avançar"/>
                                            </fieldset>
                                            <fieldset>
                                                <div class='form-card mx-4 text-left'>
                                                    <h2 class='fs-title mb-2'>Anexos</h2>
                                                    <h6 class='m-1'>Termo de consentimento para tratamento de dados:</h6>
                                                    <div class='form-group px-3 mb-3'>
                                                        <input class="form-control form-control-file element" name='TERMO-CONSENTIMENTO' type="file">
                                                    </div>
                                                    <h6 class='m-1'>Documentos de identificação do proprietário ou sócios (CNH ou RG):</h6>
                                                    <div class='form-group px-3 mb-3'>
                                                        <input class="form-control form-control-file element" name='CNH-RG-SOCIO' type="file">
                                                    </div>
                                                    <h6 class='m-1'>Documento de identificação do comprador (CNH ou RG):</h6>
                                                    <div class='form-group px-3 mb-3'>
                                                        <input class="form-control form-control-file element" name='CNH-RG-COMPRADOR' type="file">
                                                    </div>
                                                    <h6 class='m-1'>Comprovante de endereço da empresa:</h6>
                                                    <div class='form-group px-3 mb-3'>
                                                        <input class="form-control form-control-file element" name='COMPROVANTE-ENDERECO' type="file">
                                                    </div>
                                                    <h6 class='m-1'>Contrato de aluguel vigente (Se houver):</h6>
                                                    <div class='form-group px-3 mb-3'>
                                                        <input class="form-control form-control-file element" name='CONTRATO-ALUGUEL' type="file">
                                                    </div>
                                                    <h6 class='m-1'>Foto da fachada da empresa:</h6>
                                                    <div class='form-group px-3 mb-3 '>
                                                        <input class="form-control form-control-file element" name='FOTO-FACHADA' type="file">
                                                    </div>
                                                </div>
                                                <input type="button" name="previous" class="previous action-button-previous" value="Voltar"/>
                                                <input type="button" name="Submit" class="submit save-button btn-gravar-cliente" value="Salvar"/>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Main Content -->

                <!-- Footer -->
                <?php include "pages/footer.php" ?>
                <!-- End of Footer -->

            </div>
            <!-- End of Content Wrapper -->

        </div>
        <!-- End of Page Wrapper -->

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

        <!-- Logout Modal-->
        <?php include 'pages/logout.php' ?>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src='js/lib.js'></script>
        <script src='js/menuControl.js'></script>
        <script src='js/themeControl.js'></script>
        <script src='js/pagesControl.js'></script>
        <script src="js/sb-admin-2.min.js"></script>
        <script src='js/mainCadastroCliente.js'></script>
        <script type="text/javascript" src="/js/demo/fichaCadastral.js"></script>
        <script type="text/javascript" src="/js/mascaras.js"></script>
        <script src='js/mainLogout.js'></script>
</body>

</html>