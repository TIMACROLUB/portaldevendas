<?php include "pages/header.php" ?>
    <title>Portal de Vendas - Atualizar senha</title>
</head>

<body class="bg-gradient-primary body">

    <div class="container" id="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Resetar Senha</h1>
                            </div>
                            <form class="user" id="formCadastro" name="formCadastro">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user"
                                            id="senha" name="senha" placeholder="Senha">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user"
                                            id="confirmasenha" placeholder="Digite novamente a Senha">
                                    </div>
                                </div>
                                <a class="btn btn-primary btn-user btn-block btn-atualizar-senha">
                                    Atualizar Senha
                                </a>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="/js/sb-admin-2.min.js"></script>
    <script src="./js/lib.js"></script>
    <script src="js/validarsenha.js"></script>
    <script src="js/mainRecuperarSenha.js"></script>
</body>

</html>