<?php include 'pages/header.php' ?>
    <title>Portal de Vendas - Ranking</title>
    <script src='js/sessionControl.js'></script>
</head>

<body id="page-top">
    <!-- <body id="page-top"> -->

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php include "pages/menu.php" ?>
        <!-- End of Sidebar -->
        <audio id="bell">
            <source src="public/Sirene.mp3" type="audio/mpeg"/>
        </audio>
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
                <div class="container-fluid mb-3 element">
                    <div class="row">
                        <div class='col-xl-4 mb-3'>
                            <div class='card card-body element'>
                                <h6 class='font-weight-bold text-primary'>Meta Geral</h6>
                                <div class='row'>
                                    <div class='col text-left'>
                                        <span class="metaDia">Realizado Diário</span>
                                        <h4 class="skeleton-text font-weight-bold"></h4>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fa-solid fa-gauge-high fa-2x"></i>
                                    </div>
                                </div>
                                <hr class='my-3'>
                                <div class='row'>
                                    <div class='col text-left'>
                                        <span class="metaMes">Realizado Acumulado</span>
                                        <h4 class="skeleton-text font-weight-bold"></h4>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fa-solid fa-chart-simple fa-2x"></i>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class='col-xl-4 mb-3'>
                            <div class='card card-body element'>
                                <div class='row'>
                                    <div class='col'>
                                        <h6 class='font-weight-bold text-primary'>Prazo Médio (Dias)</h6>
                                    </div>    
                                    <div class='col-auto'>
                                        <h6 class='font-weight-bold text-alert' id='meta-prazo'>Limite: 35</h6>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='col text-left'>
                                        <span class="prazopagamentodiario">Diario</span>
                                        <h4 class="skeleton-text font-weight-bold"></h4>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fas fa-clipboard-list fa-2x"></i>
                                    </div>
                                </div> 
                                <hr class='my-3'>
                                <div class='row'>
                                    <div class='col text-left'>
                                        <span class="prazopagamentoacumulado">Até hoje</span>
                                        <h4 class="skeleton-text font-weight-bold"></h4>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fa-regular fa-calendar-days fa-2x"></i>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        <div class='col-xl-4 mb-3'>
                            <div class='card card-body element'>
                                <h6 class='font-weight-bold text-primary'>Auto Gestão</h6>
                                <div class='row'>
                                    <div class='col text-left'>
                                        <span class="autogestaodiario">Diario</span>
                                        <h4 class="skeleton-text font-weight-bold"></h4>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fa-solid fa-chart-line fa-2x"></i>
                                    </div>
                                </div> 
                                <hr class='my-3'>
                                <div class='row'>
                                    <div class='col text-left'>
                                        <span class="autogestaoacumulado">Até hoje</span>
                                        <h4 class="skeleton-text font-weight-bold"></h4>
                                    </div>
                                    <div class='col-auto'>
                                        <i class="fa-solid fa-arrow-up-right-dots fa-2x"></i>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <div class='row justify-content-center'>
                        <div class='col-lg shadow px-4 py-3 mx-2 border rounded mb-3 ranking-geral'>
                            <div class='row justify-content-between align-items-center mb-2'>
                                <div class='col-auto'>
                                    <h6 class='m-0 media-h6'>Destaque de Vendas - Geral</h6>
                                </div>
                                <div class='col-auto'>
                                    <div class='switch-mode ranking-geral'>
                                        <div class='switch-option left active'>
                                            <small>Diário</small>
                                        </div>
                                        <div class='switch-option right'>
                                            <small>Mensal</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='content ranking-geral' id='rankingGeral'></div>
                        </div>
                        <div class='col-lg shadow px-4 py-3 mx-2 border rounded mb-3 ranking-palhetas'>
                        <div class='row justify-content-between align-items-center mb-2'>
                                <div>
                                    <h6 class='m-0 media-h6'>Destaque de Vendas - Palhetas</h6>
                                </div>
                                <div class='col-auto'>
                                    <div class='switch-mode ranking-palhetas'>
                                        <div class='switch-option left active'>
                                            <small>Diário</small>
                                        </div>
                                        <div class='switch-option right'>
                                            <small>Mensal</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='content ranking-palhetas' id='rankingPalhetas'></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <?php include "pages/footer.php" ?>
            <!-- End of Footer -->
        </div>
    </div>
    
    <!-- Logout Modal-->
    <?php include "pages/logout.php"?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src='js/lib.js'></script>
    <script src='js/custom-switch.js'></script>
    <script src="js/themeControl.js"></script>
    <script src='js/menuControl.js'></script>
    <script src="js/skeletonControl.js"></script>
    <script src="js/sb-admin-2.min.js"></script>
    <script src='js/mainRanking.js'></script>
    <script src='js/mainLogout.js'></script>
</body>

</html>