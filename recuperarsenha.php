<?php include "pages/header.php" ?>
    <title>Portal de Vendas - Recuperar Senha</title>
</head>

<body class="bg-gradient-primary body">

    <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-8">
                <div class="card card-body shadow-lg my-5 p-5">
                    <!-- Nested Row within Card Body -->
                    <div class='d-flex justify-content-center'>
                        <img id='logoLogin' src="img/logo-macrolub-m.png" alt="">
                    </div>
                    <section>
                        <h3 class="text-gray-900 mb-2">Esqueceu a Senha?</h3>
                        <p class="mb-3">Nós entedemos, Imprevistos acontecem. Digite o seu e-mail abaixo que nós iremos enviar um link para você resetar sua senha!</p>
                    </section>
                    <form class="user">
                        <div class="form-group mb-3">
                            <input type="email" class="form-control required"
                                id="email" placeholder="Digite seu E-mail aqui...">
                        </div>
                        <div class='row justify-content-between align-items-center'>
                            <div class='col-auto mb-2'>
                                <a class="" href="login">Já Possui uma conta? Acesse!</a>
                            </div>
                            <div class='col-auto mb-2'>
                                <button type='button' class="btn btn-primary" id='btn-recuperar-senha'>
                                    Resetar Senha
                                </button>
                            </div>
                        </div>
                    </form>
                    <hr>
                    <div class="text-center">
                        <span>Ainda não possui cadastro?</span>
                        <a class="" href="register">Crie sua conta agora!</a>
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
    <script src="./js/mainRecuperaSenha.js"></script>
    
</body>

</html>