<?php include "pages/header.php" ?>

<title>Portal de Vendas - 2º Via</title>
<script src='js/sessionControl.js'></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
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
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item d-flex align-items-center mr-1 hideable">
                            <select class="form-control form-control-user rcas" hidden>
                                <option selected>Cód. rca</option>
                            </select>    
                        </li>
                        <div class="topbar-divider d-none d-sm-block"></div>
                        <li class="nav-item dropdown no-arrow d-flex align-items-center ml-1 hideable">
                            <div class="dropdown timer">
                                <a class="btn btn-secondary dropdown-toggle" role='button' data-bs-toggle='dropdown'>
                                    <i class="fas fa-sync"></i>
                                    <span class="m-0 p-0 span-atualizacao">Tempo para atualização</span>
                                </a>
                                <div class="dropdown-menu p-3 element">
                                    <div class="mb-3">
                                        Selecione o intervalo de tempo para atualização dos dados
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" name='intervalOption' id='opt5min' type='radio' value='300000' checked>
                                        <label class="form-check-label" for='opt5min'> 5 minutos</label>
                                    </div>    
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" name='intervalOption' id='opt10min' type='radio' value='600000'>
                                        <label class="form-check-label" for='opt10min'> 10 minutos</label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" name='intervalOption' id='opt15min' type='radio' value='900000'>
                                        <label class="form-check-label" for='opt15min'> 15 minutos</label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" name='intervalOption' id='opt20min' type='radio' value='1200000'>
                                        <label class="form-check-label" for='opt20min'> 20 minutos</label>
                                    </div>
                                </div>
                            </div>
                                <!-- Counter - Messages -->
                        </li>
                        <div class="topbar-divider d-none d-sm-block"></div>
                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link d-flex dropdown-toggle" id="userDropdown" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span id="nomeUsuario" class="mr-2 d-none d-lg-inline text-gray-600 small"> </span> <!--Span com Nome do Usuario-->
                                <img class="img-profile rounded-circle" src="img/undraw_profile.svg" id='fotoPerfil'>
                            </a>
                            <!-- Dropdown - Informações e configuração do user -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in element"
                                aria-labelledby="userDropdown">
                                <div class="custom-switch d-flex justify-content-space-between ">
                                    <input class="custom-switch-input" id='theme-change' type="checkbox">
                                    <label class="mb-0 mr-2 d-flex align-items-center">Modo Escuro</label>
                                    <label class="custom-switch-label mb-0 d-flex align-items-center day" for='theme-change'>
                                        <i class="fa-solid fa-circle"></i>
                                    </label>
                                    
                                </div>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="conta">
                                    <i class="fas fa-user fa-sm fa-fw mr-2"></i>
                                    Conta
                                </a>
                                
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i>
                                    Sair
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                    <!-- End of Topbar -->

                    <!-- Begin Page Content -->
                    <div class="container-fluid element">
                        <div class='card card-body element'>
                            <div class='row align-items-center'>
                                <div class='col'>
                                    <h6 class='font-weight-bold m-0'>Emissão de 2º via</h6>
                                </div>
                                <div class='col-auto'>
                                    <button class='btn btn-outline-dark' data-bs-target='#offcanvas' data-bs-toggle='offcanvas'>
                                        <i class="fa-solid fa-filter"></i>
                                        <span>Filtros</span>
                                    </button>
                                </div>
                            </div>
                            <div class="offcanvas offcanvas-end element" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasLabel">Filtros</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <form class='form mb-2' id='formFiltros'>
                                        <div class='mb-2' id="dateFilterContainer">
                                            <label class='form-input-label' for='dataInicio'>Data de Emissão</label>
                                            <div class='d-flex flex-row align-items-center'>
                                                <input class='form-control' type="date" id='dataInicio'>
                                                <span class='mx-2'> - </span>
                                                <input class='form-control' type="date" id='dataFim'>
                                            </div>
                                            <div class='feedback-validation'></div>
                                        </div>
                                        <div class="mb-2">
                                            <label class="form-input-label" for-''>Código da Filial:</label>
                                            <div class="form-control custom-select-input element" type="button">
                                                <div class="row">
                                                    <div class="col d-flex flex-row selected-options">
                                                        <span class="placeholder-text">
                                                            Selecione as filiais que deseja filtrar
                                                        </span> 
                                                    </div>
                                                    <div class="col-auto d-flex align-items-center">
                                                        <i class="fa-solid fa-caret-down"></i>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="card custom-options element"></div>
                                            
                                        </div>
                                        <div class='mb-2' id="customerFilterContainer">
                                            <label class='form-input-label' for="cliente">Código do Cliente *</label>
                                            <input class='form-control' type="number" id='cliente' placeholder='Digite o código do cliente para filtrar'>
                                            <div class='feedback-validation'></div>
                                        </div>
                                        <div class='mb-2'>
                                            <label class='form-input-label' for="pedido">Número do Pedido</label>
                                            <input class='form-control' type="text" id='pedido' placeholder='Digite o número do pedido para filtrar'>
                                        </div>
                                        <div class='mb-2'>
                                            <label class='form-input-label' for="nfe">Número da Nota</label>
                                            <input class='form-control' type="text" id='nfe' placeholder='Digite o número da nota para filtrar'>
                                        </div>
                                    </form>
                                    <button class='btn btn-block btn-success' id='filtrarDados'>Aplicar Filtros</button>
                                </div>
                            </div>
                            <hr class='my-3'>
                            <div class='list element' id='gridPedidos' name='gridPedidos'></div>
                            <nav>
                                <ul class="pagination mt-3 d-flex justify-content-center element invisible" id='controlePaginacao'>
                                    <li class='page-item prev'>
                                        <a class="page-link prev element">&laquo;</a>    
                                    </li>
                                    <li class='page-item d-flex inline numbers' id='paginas'>
                                        
                                    </li>
                                    <li class='page-item next'>
                                        <a class='page-link next element'>&raquo;</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            </div>
            <!-- Footer -->
            <?php include "pages/footer.php" ?>
            <!-- End of Footer -->
        </div>
    </div>

    <!-- Logout Modal-->
    <?php include "pages/logout.php" ?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src='js/lib.js'></script>
    <script src='js/menuControl.js'></script>
    <script src='js/themeControl.js'></script>
    <script src='js/pagesControl.js'></script>
    <script src="js/sb-admin-2.min.js"></script>
    <script src="js/skeletonControl.js"></script>
    <script src='js/paginationControl.js'></script>
    <script src='js/mainSegundaVia.js'></script>
    <script src='js/custom-switch.js'></script>
    <script src='js/mainLogout.js'></script>
</body>

</html>