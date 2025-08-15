<?php include "pages/header.php" ?>
    <title>Portal de Vendas - DashBoard</title>
    <script src='js/sessionControl.js'></script>
</head>

<body id="page-top">
    <!-- <body id="page-top"> -->

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php include "pages/menu.php"; ?>
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

                    <!-- Topbar Navbar -->
                <?php include 'pages/menuSuperior.php'?>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->

                <div class="container-fluid element">

                    <!-- Content Row -->
                    <div class="row justify-content-center" id='autoGestaoSupervisor' hidden>
                        <div class="col-xl-6 mb-4">
                            <div class="card card-body shadow element">
                                <h6 class='font-weight-bold text-primary'>Auto Gestão diaria - Supervisores</h6>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <span class="text-xs font-weight-bold text-uppercase mb-1"> Hoje</span>
                                        <h5 class="mb-0 font-weight-bold skeleton-text skeleton" id='gestaoHoje'></h5> <!--Label Valor em Aberto no Contas a Receber-->
                                    </div>
                                    <div class="col-auto">
                                        <i class="fa-solid fa-calendar-day fa-2x"></i>
                                    </div>
                                </div>
                                <hr class='my-3 w-100'>
                                <div class="row align-items-center">
                                    <div class="col">
                                    <span class="text-xs font-weight-bold text-uppercase mb-1"> Ontem </span>
                                        <h5 id="gestaoDiaAnterior" class="h5 mb-0 font-weight-bold skeleton-text skeleton"></h5>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fa-solid fa-calendar-day fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 mb-4">
                            <div class="card card-body shadow element">
                                <h6 class="font-weight-bold text-primary">Auto Gestão mensal - Supervisores</h6>
                                    <div class="row alignt-items-center">
                                        <div class="col">
                                         <span class="text-xs font-weight-bold text-uppercase mb-1"> Mes Atual</span>
                                         <h5 class="mb-0 font-weight-bold skeleton-text skeleton" id='gestaoMesAtual'></h5> <!--Label Valor em Aberto no Contas a Receber-->
                                     </div>
                                     <div class="col-auto">
                                        <i class="fa-solid fa-calendar-days fa-2x"></i>
                                     </div>
                                 </div>
                                 <hr class='my-3 w-100'>
                                <div class="row align-items-center">
                                    <div class="col">
                                    <span class="text-xs font-weight-bold text-uppercase mb-1"> Mes passado </span>
                                        <h5 id="gestaoMesPassado" class="h5 mb-0 font-weight-bold skeleton-text skeleton"></h5>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fa-solid fa-calendar-days fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div hidden class="row justify-content-center" id="row-grafico-pedidos-dia">
                        <div class='col mb-4'>
                            <div class='content card card-body shadow element'>
                                <h6 class="font-weight-bold text-primary">Pedidos gerados por dia (Antes e Depois de 12horas)</h6>
                                <div id="col">
                                    <canvas id="pedidos-gerados"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-4 mb-4">
                            <div class="card card-body shadow element">
                                <h6 class='font-weight-bold text-primary'>Meta</h6>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <span class="text-xs font-weight-bold text-uppercase mb-1"> % Realizado - Diario </span>
                                        <h5 class="mb-0 font-weight-bold skeleton-text skeleton" id='valorMetaDia'></h5> <!--Label Valor em Aberto no Contas a Receber-->
                                    </div>
                                    <div class="col-auto">
                                        <i class="fa-solid fa-gauge-high fa-2x"></i>
                                    </div>
                                </div>
                                    <hr class='my-3 w-100'>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <span class="text-xs font-weight-bold text-uppercase mb-1"> % Realizado - Acumulado </span>
                                        <h5 id="metaacumulada" class="h5 mb-0 font-weight-bold skeleton-text skeleton"></h5> <!--Label Valor em Aberto no Contas a Receber-->
                                    </div>
                                    <div class="col-auto">
                                        <i class="fa-solid fa-chart-simple fa-2x"></i>
                                    </div>
                                </div>
                                    <hr class='my-3 w-100'>
                                <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <span class="text-xs font-weight-bold text-uppercase mb-1"> % Realizado - Mensal </span>
                                            <h5 id="percentualMeta" class="mb-0 font-weight-bold skeleton-text skeleton"></h5> <!--Label Valor em Aberto no Contas a Receber-->
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa-solid fa-bullseye fa-2x"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-xl-4 mb-4">
                            <div class="card card-body shadow element">
                                <h6 class='font-weight-bold text-primary'>Auto Gestão</h6>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <span class="text-xs font-weight-bold text-uppercase mb-1"> Desempenho Mensal </span>
                                        <h5 id="desempenhoMes" class="mb-0 font-weight-bold skeleton-text skeleton"></h5> <!--Label Desempenho Mês-->
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-calendar fa-2x"></i>
                                    </div>
                                </div>
                                <hr class='my-3 w-100'>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <span class="text-xs font-weight-bold text-uppercase mb-1"> Desempenho Hoje </span>
                                        <h5 id="desempenhoHoje" class="mb-0 font-weight-bold skeleton-text skeleton"></h5> <!--Label Desempenho Hoje-->
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-chart-line fa-2x"></i>
                                    </div>
                                </div>
                                <hr class='my-3 w-100'>
                                <div class="row no-gutters align-items-center">
                                        <div class="col mr-3">
                                            <div class='row'>
                                                <div class='col'>
                                                    <span class="text-xs font-weight-bold text-uppercase mb-1">Prazo Medio</span>
                                                </div>
                                                <div class='col-auto'>
                                                    <span class='text-xs font-weight-bold text-uppercase text-alert mb-1'>Limite: 35 dias</span>
                                                </div>
                                            </div>
                                            <h5 id="prazoMedioDias" class="mb-0 font-weight-bold skeleton-text skeleton"></h5> 
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x"></i>
                                        </div>
                                    </div>
                                     
                            </div>
                        </div>

                        <div class="col-xl-4 mb-4">
                            <div class="card card-body shadow element">
                                <h6 class='font-weight-bold text-primary'>Clientes</h6>
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <span class="text-xs font-weight-bold text-uppercase mb-1">
                                            Valor Em Aberto - Titulos Vencidos
                                        </span>
                                        <h5 id="valorEmAberto" class="mb-0 font-weight-bold skeleton-text skeleton"></h5> 
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-dollar-sign fa-2x"></i>
                                    </div>
                                </div>
                                <hr class='my-3 w-100'>
                                <div class="row no-gutters align-items-center">
                                    <div class="col">
                                        <span class="text-xs font-weight-bold text-uppercase mb-1"> Positivação - Ultimos 90 Dias </span>
                                        <h5 class="mb-0 font-weight-bold qtClientePositivado skeleton-text skeleton"></h5> <!--Label Valor em Aberto no Contas a Receber-->
                                    </div>
                                    <div class="col-auto">
                                        <i class="fa-solid fa-users fa-2x"></i>
                                    </div>
                                </div>
                                <hr class='my-3 w-100'>
                                <div class="row justify-content-start align-items-center mb-2">
                                    <div class="col-auto">
                                        <span class="text-xs font-weight-bold text-uppercase mb1">
                                            Comissão do Mês:
                                        </span>
                                    </div>
                                    <div class="col">
                                        <input type="month" class="form-control form-control-sm" id='mesComissao'>
                                    </div>
                                </div>
                                <div class ="row no-gutters align-items-center">
                                    <div class="col">
                                        <span class="text-xs font-weight-bold text-uppercase mb-1"> Comissão </span>
                                        <h5 class="mb-0 font-weight-bold vlComissao skeleton-text skeleton"></h5> 
                                    </div>
                                    <div class="col-auto">
                                            <i class="fa-solid fa-money-bills fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Content Row -->
                    <div class="row">
                        <div class="col-xl-6 mb-4">
                            <div class="content card card-body shadow element">
                                <h6 class='font-weight-bold text-primary'>Orçamentos Ultimos 7 dias</h6>
                                <div class="orcamento7Dias text-center element" id='orcamentos'></div>
                            </div>
                        </div>
                        <div class='col-xl-6 mb-4'>
                            <div class="content card card-body shadow element">
                                <h6 class="font-weight-bold text-primary">Valor em Aberto por Cliente</h6>
                                <div class='clientes' id='tableInadimplencia'></div>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-xl-6 mb-4'>
                            <div class="content card card-body shadow element">
                                <h6 class='font-weight-bold text-primary'>Devoluções Comerciais - Mês atual</h6>
                                <div class="devolucoes text-center" id='devolucoesComerciais'></div>
                            </div> 
                        </div>
                        <div class='col-xl-6 mb-4'>
                            <div class='content card card-body shadow element'>
                                <h6 class="font-weight-bold text-primary">Clientes que ficarão inativos em 60 dias</h6>
                                <div class='clientes-inativos-prox-60-dias text-center' id='inativosPrevistos'></div>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-xl-6 mb-4'>
                            <div class='card card-body shadow element'>
                                <div class='row justify-content-between align-items-center mb-4'>
                                    <div class='col-auto'>
                                        <h6 class='font-weight-bold text-primary'>Orçamentos</h6>
                                    </div>
                                    <div class='col-auto'>
                                        <ul class='nav nav-pills' role='tablist'>
                                            <li class='nav-alternate-view shadow-sm left-button'>
                                                <a class='nav-link active' data-toggle='pill' data-target='#consultaDesempenho' type='button' role='tab'>Desempenho</a>
                                            </li>
                                            <li class='nav-alternate-view shadow-sm right-button'>
                                                <a class='nav-link' data-toggle='pill' data-target='#consultaCliente' type='button' role='tab'>Cliente</a>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div class="tab-content" id='tab-conteudo'>
                                    <div class="tab-pane fade show active" id='consultaDesempenho' role='tabpanel'>
                                        <div class="h5 mb-4 font-weight-bold text-gray-800">
                                            <form class="form-inline">
                                                <div class="form-group mx-sm-1 mb-2">
                                                    <input type="text" class="form-control element" id="inputOrcamento" placeholder="Numero Orcamento">
                                                </div>
                                                <button type="button" class="btn btn-primary mb-2 btn-consulta-orcamento" >Buscar</button>
                                            </form>
                                        </div>
                                        <div class='element' id="desempenhoProdutos">
                                            <div class="col h-100 d-flex align-items-center justify-content-center flex-column text-center">
                                                <i class="fa-solid fa-arrow-up-right-dots fa-8x mb-3"></i>
                                                <h4 class="h4">Digite o número do orçamento para consultar seu desempenho</h4>    
                                            </div>
                                        </div>                                    
                                        <div class='row' id="h4DesempenhoOrcamento" hidden>
                                            <div class="col-auto h5 my-3 font-weight-bold">Desempenho do Orçamento:</div>
                                            <div class="col-auto h5 my-3 font-weight-bold" id="desempenhoOrcamento"></div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id='consultaCliente' role='tabpanel'>
                                        <div class="h5 mb-4 font-weight-bold text-gray-800">
                                            <form class="form-inline">
                                                <div class="form-group mx-sm-1 mb-2">
                                                    <input type="text" class="form-control element" id="inputCliente" placeholder="Codigo do cliente">
                                                </div>
                                                <button type="button" class="btn btn-primary mb-2 btn-consulta-cliente" >Buscar</button>
                                            </form>
                                        </div>
                                        <div class='element' id="orcamentos-cliente">
                                            <div class="col h-100 d-flex align-items-center justify-content-center flex-column text-center">
                                                <i class="fa-solid fa-person-chalkboard fa-8x mb-3"></i>
                                                <h4 class="h4">Digite o código do cliente para consultar seus orçamentos</h4>    
                                            </div>
                                        </div>   
                                        <div class='row' id="h4DataUltimaCompra" hidden>
                                            <div class="col-auto h5 m-0 font-weight-bold">
                                                Data da ultima compra:
                                            </div>
                                            <div class="col-auto h5 m-0 font-weight-bold" id="dataUltimaCompra"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-xl-6 mb-4'>
                            <div class='content card card-body shadow element'>
                                <h6 class="font-weight-bold text-primary">Consultar Status do pedido</h6>
                                <div class='filtro-pedidos text-center' id='filtro-pedidos'>
                                    <form class="form-inline">
                                        <div class="form-group mx-sm-1 mb-2">
                                            <input type="text" class="form-control element" id="input-order" placeholder="Numero do Pedido">
                                        </div>
                                        <button type="button" class="btn btn-primary mb-2" id="btn-consulta-pedido" >Buscar</button>
                                    </form>
                                </div>
                                <div id="pedidos"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php include "pages/footer.php" ?>
        </div>
    </div>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-to w-100p">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <?php include "pages/logout.php" ?>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src='js/lib.js'></script>
    <script src='js/menuControl.js'></script>
    <script src='js/themeControl.js'></script>
    <script src="js/skeletonControl.js"></script>
    <script src="js/sb-admin-2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <script src="js/chart.js"></script>
    <script src='js/mainAutoGestao.js'></script>
    <script src="js/consultarStatusPedido.js"></script>
    <script src='js/mainLogout.js'></script>
</body>

</html>