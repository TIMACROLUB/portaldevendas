<?php include "pages/header.php" ?>

    <title>Portal de Vendas - DashBoard</title>
    <script src='js/sessionControl.js'></script>
</head>

<disabled id="page-top">
    <!-- <disabled id="page-top"> -->

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php include "pages/menu.php" ?>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>
                <?php include "pages/menuSuperior.php" ?>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid h-100">
                    <div class='card card-body'>
                        <form class="user p-3" id="formAtualizaCadastro" name="formAtualizaCadastro">
                            <div class='row justify-content-between align-items-center my-3'>
                                <div class='col'>
                                    <h5>Dados cadastrais</h5>
                                </div>
                                <div class='col-auto'>
                                    <a class='text-dark text-decoration-none d-flex align-items-center' id='btnEditar'>
                                        <label class='m-0 mx-2' for="btnEditar">Editar</label>
                                        <i class='fa-solid fa-pen-to-square fa-2x'></i>
                                    </a>
                                </div>
                            </div>
                            <div class="form-group mb-2">
                                <label class='form-label mb-1' for="nome">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" disabled>
                            </div>
                            <div class="form-group mb-2">
                                <label class='form-label mb-1' for="email">E-mail</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Email" disabled>
                            </div>
                            <div class="form-group mb-2">
                                <label class='form-label mb-1' for="rca">Codigo Rca</label>
                                <input type="number" class="form-control" id="rca" name="rca" placeholder="Codigo Rca" disabled>
                            </div>
                            <div class='form-group mb-2'>
                                <label class='form-label mb-1' for="perfil">Perfil de acesso</label>
                                <input type="text" class="form-control" id="perfil" name="perfil" placeholder="Perfil Usuario" disabled>
                            </div>
                            <div class='form-group mb-2'>
                                <label class='form-label mb-1' for="senha">Senha</label>
                                <input type="password" class="form-control" id="senha" name="senha" placeholder="Nova Senha" disabled>
                            </div>
                            <div class='form-group row align-items-center mb-3'>
                                <div class='col-auto'>
                                    <img class='img-thumbnail' src='img/DOG.jpg' id='fotoPerfil'>
                                </div>
                                <div class='col'>
                                    <label class='form-label mb-1' for="foto">Foto de Perfil</label>
                                    <input class='form-control-file' name='foto' type="file" id='foto' disabled>
                                </div>
                            </div>
                            <div class='form-group row justify-content-end' id='btn-edicao'>
                                <div class='col-auto'>
                                    <a class="btn btn-danger btn-block" id='btnCancelaEdicao'>
                                            Cancelar
                                    </a>
                                </div>
                                <div class='col-auto'>
                                    <a class="btn btn-success btn-block" id='btnAtualizaCadastro'>
                                            Atualizar
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Logout Modal-->
    <?php include "pages/logout.php" ?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src='./js/sb-admin-2.min.js'></script>
    <script src='js/lib.js'></script>
    <script src='js/menuControl.js'></script>
    <script src="js/mainUsuario.js"></script>
    <script src='js/mainLogout.js'></script>
</disabled>

</html>