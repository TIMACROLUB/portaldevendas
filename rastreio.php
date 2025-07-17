<?php include 'pages/header.php' ?>
    <title>Portal de Vendas - Econocargo</title>
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
                <div id="embed-tms" class="container-fluid">
                        <div class=" skeleton embed-responsive embed-responsive-16by9 h-10">
                            <iframe class="embed-responsive-item" src="https://embarcador.tmstech.com.br/acompanhamentoEntrega?removerLogo=true" heigth=500px width=100%></iframe>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Logout Modal-->
    <?php include "pages/logout.php"?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src='js/lib.js'></script>
    <script src='js/menuControl.js'></script>
    <script src='js/themeControl.js'></script>
    <script src='js/pagesControl.js'></script>
    <script src="js/sb-admin-2.min.js"></script>
    <script src='js/sessionControl.js'></script>
    
</body>

</html>