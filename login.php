<?php include "pages/header.php" ?>
    <title>Portal de Vendas - Login</title>
</head>

<body class="bg-gradient-primary body">

    <div class="container">
        
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-8"> 
                    <div class="card card-body shadow-lg p-5">
                        <!-- Nested Row within Card Body -->
                        <form class="user px-5" id="formLogin" name="formLogin">
                            <div class='d-flex justify-content-center'>
                                <img id='logoLogin' src="img/logo-macrolub-m.png" alt="">
                            </div>
                            <section>
                                <h2 class="text-gray-900 mb-1">Login</h2>
                                <p class='text-gray-900 mb-3'>Para acessar preencha os campos abaixo com o e-mail e senha cadastrado.</p>
                            </section>
                            <div class="form-group mb-2">
                                <label class='m-0' for="email">E-mail</label>
                                <input type="email" class="form-control required"
                                    id="email" name="email" placeholder="Email">
                            </div>
                            <div class="form-group mb-2">
                                <label class='m-0' for="senha">Senha</label>
                                <input type="password" class="form-control required"
                                    id="senha" name="senha" placeholder="Senha">
                            </div>
                            <div class="text-right mb-3">
                                <a class="" href="recuperarsenha">Esqueceu a senha?</a>
                            </div>
                            <button class="btn btn-block btn-primary" type='button' name='btn-signin' id='btnSignin'>
                                <span class='inner-label'>Entrar</span>
                                <i class='fa-solid fa-spinner fa-2x loading-icon hidden'></i>
                            </button>
                        </form>
                        <hr>
                        <div class="row text-center justify-content-center">
                            <div class="text-center">
                                <span>Novo por aqui?</span>
                                <a class="" href="register">Cadastre-se agora!</a>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>
    <!-- Link para Botoes Alert Bonitos-->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- Custom Scripts -->
    <script src="js/lib.js"></script>
    <script src="js/mainLogin.js"></script>

</body>

</html>