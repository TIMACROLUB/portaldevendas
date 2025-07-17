<?php include 'pages/header.php' ?>
    <title>Portal de Vendas - Compras</title>
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
            <div id="content">

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
                <div class="container-fluid">
                    <div class = "row text-center">
                        <div class="col-xl-3 mb-2">
                            <div class="card border-left-primary" id='cardGerencial' data-toggle="tooltip" data-placement='bottom' title="Quantidade de itens, com estoque físico zerado. (Ou seja, não consta estoque disponível, bloqueado, ou avariado no sistema.">
                                <div class='row d-flex align-items-center'>
                                    <div class="col-8"> 
                                        <h5 class="card-title mt-4">
                                            Qt. Sem Estoque
                                        </h5>
                                        <h3 class="card-body" id="gerencialZerado">0</h3>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fa-solid fa-box-open fa-3x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 mb-2">
                            <div class="card border-left-primary" id='cardAvaria' data-toggle="tooltip" data-placement='bottom' title="Quantidade de itens, com estoque em AVARIA no sistema. ">
                                <div class='row d-flex align-items-center'>
                                    <div class="col-8">  
                                        <h5 class="card-title mt-4">
                                            Qt. Em Avaria
                                        </h5>
                                        <h3 class="card-body" id="avaria">0</h3>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fa-solid fa-triangle-exclamation fa-3x"></i>
                                    </div> 
                                </div>    
                            </div>
                        </div>
                        <div class="col-xl-3 mb-2">
                            <div class="card border-left-primary" id='cardBloqueados' data-toggle="tooltip" data-placement='bottom' title="Quantidade de itens, com estoque BLOQUEADO. Seja esse estoque avariado, em conferência no recebimento ou simplesmente consta estoque bloqueado no sistema. ">
                                <div class='row d-flex align-items-center'>
                                    <div class="col-8">
                                        <h5 class="card-title mt-4">
                                            Qt. Bloqueados
                                        </h5>
                                        <h3 class="card-body" id="bloqueados" >
                                            0
                                        </h3>
                                    </div> 
                                    <div class='col-auto'>
                                        <i class="fa-solid fa-lock fa-3x"></i>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 mb-2">
                            <div class="card border-left-primary" id='cardIndisponivel' data-toggle="tooltip" data-placement='bottom' title="Quantidade de itens, com estoque físico zerado + os itens ativos com estoque TOTAL bloqueado/avariado."  >
                                <div class='row d-flex align-items-center'>
                                    <div class="col-8">  
                                        <h5 class="card-title mt-4">
                                                Qt. Indisponivel
                                        </h5>      
                                        <h3 class="card-body" id="indisponivelVenda">0</h3>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fa-solid fa-shop-lock fa-3x"></i>
                                    <div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div class='row text-left invisible' id='gridCompradores'>
                <div class='col-lg-12 mt-4'>
                    <h4>Demais Compradores</h4>
                </div>
                <div class='col'>
                    <div class='row'>
                        <div class='col mt-2'>
                            <div class='card'>
                                <div class='card-body pt-2 pb-2'>
                                    <div class='row'>
                                        <!-- <span class='mr-5'>Comprador 1</span>
                                            <div class='col-4 d-flex justify-content-center align-items-center align-content-center'>
                                                    <h5 class='h3 d-flex justify-content-center align-items-center align-content-center'>0</span>
                                                    <i class="fa-solid fa-box-open fa-2x ml-3"></i>
                                            </div>
                                            <div class='col-4 d-flex justify-content-center align-items-center align-content-center'>
                                                <i class="fa-solid fa-triangle-exclamation fa-2x"></i>
                                            </div>
                                            <div class='col-auto'>
                                                \<i class="fa-solid fa-lock fa-2x"></i>
                                            </div>
                                            <div class='col-auto'>
                                                <i class="fa-solid fa-shop-lock fa-2x"></i>
                                            </div> -->
                                            <table class="table table-striped table-borderless">
                                            <thead class='thead text-center'>
                                                <tr>
                                                <th scope="col" class='text-left'>
                                                    <i class="fa-solid fa-user-tag"></i>
                                                    Comprador
                                                </th>
                                                <th scope="col">
                                                    <i class="fa-solid fa-box-open"></i>
                                                    Qt. Sem Estoque
                                                </th>
                                                <th scope="col">
                                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                                    Qt. Em Avaria
                                                </th>
                                                <th scope="col">
                                                    <i class="fa-solid fa-lock"></i>
                                                    Qt. Bloqueados
                                                </th>
                                                <th scope="col">
                                                    <i class="fa-solid fa-shop-lock"></i>
                                                    Qt. Indisponivel
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody class='tbody text-center' id='tbCompradores'>
                                            </tbody>
                                            </table>    
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <?php include "pages/footer.php" ?>
    <!-- End of Footer -->
    
    <!-- Logout Modal-->
    <?php include "pages/logout.php"?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src='js/lib.js'></script>
    <script src="js/sb-admin-2.min.js"></script>
    <script src='js/menuControl.js'></script>
    <script src="js/sessionControl.js"></script>
    <script src="js/mainCompras.js"></script>
    <script src='js/mainLogout.js'></script>
</body>

</html>