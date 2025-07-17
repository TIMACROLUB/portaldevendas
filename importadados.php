<?php include 'pages/header.php' ?>
    <title>Portal de Vendas - Importar Dados</title>
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
                    <form class="d-flex flex-column align-items-center justify-content-center vh-100" id="import-form">
                        <div class="rounded m-3">
                            <section class="card card-body d-block">
                                <input type="file" id="InputPlanilha" name="Planilha">
                            </section>
                            <!-- <label class='btn-block shadow bg-white rounded p-5 drop-area' id="drop-area" for="InputPlanilha">
                                <div class=" text-center mb-3">
                                    <i class="fa-solid fa-file-arrow-up fa-2x text-primary"></i>
                                </div>
                                <div>
                                    <p>Clique aqui ou arraste e solte para enviar seu arquivo</p>
                                </div>
                            </label> -->
                        </div>

                        <button type="submit" class="btn btn-success d-none" id="send-button">Importar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Logout Modal-->
    <?php include "pages/logout.php"?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- Custom scripts for all pages-->
    <script src='js/lib.js'></script>
    <script src='js/menuControl.js'></script>
    <script src='js/themeControl.js'></script>
    <script src='js/pagesControl.js'></script>
    <script src="js/sb-admin-2.min.js"></script>
    <script src="js/importardados.js"></script>
    <script src="js/acessControl.js"></script>    
</body>

</html>