<?php include "pages/header.php" ?>
    <title>Portal de Vendas - Cadastro de Novo Usuario</title>
</head>

<body class="bg-gradient-primary body">

    <div class="container">
        <div class="col xl-8">
            <div class="card card-body p-5 shadow-lg my-5">
            <!-- Nested Row within Card Body -->
                <form class="user px-5" id="formCadastro" name="formCadastro">
                    <div class='d-flex justify-content-center'>
                        <img id='logoLogin' src="img/logo-macrolub-m.png" alt="">
                    </div>
                    <section>
                        <h3 class="text-gray-900 mb-1">Cadastrar Usuário</h3>
                        <p class='text-gray-900 mb-3'>Preencha os campos abaixo para se cadastrar.</p>
                    </section>
                    <div class='form-group mb-2'>
                        <label class='form-label m-1' for="tipoPerfil">Perfil de acesso</label>
                        <select class='form-control mb-2 required' name="tipoPerfil" id="tipoPerfil">
                            <option selected class='form-control' value='Default'>
                                Selecione o seu perfil de acesso
                            </option>
                            <option class="form-control "value="V">
                                Sou Vendedor
                            </option>
                            <option class="form-control "value="S">
                                Sou Supervisor de Vendas
                            </option>
                            <option class="form-control "value="G">
                                Sou Gerente Comercial
                            </option>
                            <option class="form-control" value="F">
                                Sou Administrativo
                            </option>
                            <option class='form-control' value='C'>
                                Sou Comprador
                            </option>
                            <option class='form-control' value='E'>
                                Sou Expedicao
                            </option>
                        </select>
                    </div>
                    <div class='form-group mb-2'>
                        <label class='form-label m-1' for="nomeUsuario">Nome completo</label>
                        <input class='form-control required' name='nome' id='nomeUsuario' type="text" placeholder='Nome completo'>
                    </div>
                    <div class='form-group mb-2'>
                        <label class='form-label m-1' for="emailUsuario">E-mail</label>
                        <input class='form-control required' name='email' id='emailUsuario' type="text" placeholder='email@macrolub.com.br'>
                    </div>
                    <div class='form-group mb-2'>
                        <label class='form-label m-1' for="rca">Codigo Rca</label>
                        <input type="number" class="form-control required" id="rca" name="rca" maxlength=4 placeholder='Para desbloquear esse campo, favor selecionar o perfil de acesso' readOnly>
                    </div>
                    <div class='form-group mb-2'>
                        <label class='form-label m-1'for="senha">Senha</label>
                        <input type="password" class="form-control required" id="senha" name="senha" placeholder="Senha">
                    </div>
                    <div class='form-group mb-2'>
                        <label class='form-label m-1' for="confirmasenha">Confirme a senha</label>
                        <input type="password" class="form-control required" id="confirmasenha" placeholder="Digite novamente a Senha">
                    </div>
                    <div class='form-group mb-3'>
                        <label class='form-label m-1' for="inputImagem">Foto de perfil</label>
                        <input type="file" class="form-control-file required" id='foto' name='foto' accept="image/*"> 
                    </div>
                    <div class='row justify-content-between align-items-center'>
                        <div class="col-auto mb-2">
                            <a class="" href="login">Já possui uma conta? Acesse!</a>
                        </div>
                        <div class='col-auto mb-2'>
                            <a class="btn btn-primary btn-block" id='btn-gravar'>
                                Enviar Cadastro
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>
    <!-- Link para Botoes Alert Bonitos-->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="js/lib.js"></script>
    <script src="js/mainCadastroUsuario.js"></script>
    <script src="js/validarsenha.js"></script>

</body>

</html>