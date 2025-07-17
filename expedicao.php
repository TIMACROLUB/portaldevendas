<?php include 'pages/header.php' ?>
<title>Portal de Vendas - Expedicao</title>
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
                    <!-- Topbar Navbar -->
                    <?php include "pages/menuSuperior.php" ?>
                </nav>
                <!-- End of Topbar -->
                <!-- Begin Page Content -->
                <div class="container-fluid element" id='viewContainer'>
                    <div class="row">
                        <div class="col-lg-6 d-flex align-items-center">
                            <h5 class="font-weight-bold text-primary fraseMeta">
                                    Enviar para nossos clientes no mesmo dia todos os pedidos liberados até as 14:00 horas
                            </h5>
                        </div>
                        <div class="col">
                            <div class="row d-flex justify-content-end mt-3">
                                <div class="col-auto mb-4">
                                    <div class="row d-flex align-items-center">
                                        <div class="col-auto">
                                            <label class='m-0' for="filial">Filial:</label>
                                        </div>
                                        <div class="col-auto">
                                            <select name="filial" id="filial" class="form-select form-control">
                                                <option value="ES" class='select-option'selected>ES</option>
                                                <option value="MG" class='select-option'>MG</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto mb-4">
                                    <div class='row d-flex align-items-center'>
                                        <div class="col-auto">
                                            <label class='m-0' for='horarioCorte'>Hora Atual:</label>
                                        </div>
                                        <div class="col-auto">
                                            <label class='form-control form-user-control m-0' id='horaAtual' Readonly></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto mb-4">
                                    <div class='row d-flex align-items-center'>
                                        <div class="col-auto">
                                            <label class='m-0' for='horarioCorte'>Horário de Corte:</label>
                                        </div>
                                        <div class="col-auto">
                                            <input type='time' class='form-control form-user-control horaCorte' id='horarioCorte' value='14:00'>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto mb-4">
                                    <a class="btn btn-outline-dark element" onclick="openFullscreen()">
                                        <i class="fa-solid fa-up-right-and-down-left-from-center" id='fullScreen'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Content Row -->
                    <div class="row" id='rowIndicador'>
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 mb-4" id='colPedSeparar'>
                            <div class="card border-left-primary shadow h-100 py-2 element">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <span class="text-xs font-weight-bold text-primary text-uppercase"> Pedidos a Separar </span>
                                            <h5 class="font-weight-bold aSeparar skeleton skeleton-text"></h5>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa-solid fa-cart-flatbed fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 mb-4" id='colPedFaturar'>
                            <div class="card border-left-success shadow h-100 py-2 element">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <span class="text-xs font-weight-bold text-success text-uppercase"> Pedidos a Faturar </span>
                                            <h5 class="font-weight-bold aFaturar skeleton skeleton-text"></h5>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa-solid fa-file-invoice-dollar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 mb-4" id="colMetaMes">
                            <div class="card border-left-info shadow h-100 py-2 element">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <span class="text-xs font-weight-bold text-info text-uppercase"> % Realizado da Meta - Vendas (Mês) </span>
                                            <h5 class="font-weight-bold metaMes skeleton skeleton-text"></h5>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa-solid fa-bullseye fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Pending Requests Card Example -->
                        <div class="col-xl-3 mb-4" id="colMetaOntem">
                            <div class="card border-left-warning shadow h-100 py-2 element">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <span class="text-xs font-weight-bold text-warning text-uppercase"> % Realizado da Meta - Vendas (Ontem) </span>
                                            <h5 class="font-weight-bold metaOntem skeleton skeleton-text"></h5>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" id='rowRanking'>
                        <div class="col">
                            <div class="card shadow mb-4 element" >
                                <div class="card-header py-3 element">
                                    <h6 class="m-0 font-weight-bold text-primary">Ranking Separação</h6>
                                </div>
                                <div class="card-body skeleton skeleton-card py-2">
                                    <table class="table table-striped table-borderless invisible fut-invisible element">
                                        <thead class='thead text-center'>
                                            <tr>
                                                <th scope="col" class='text-left'>
                                                    <i class="fa-solid fa-user-tag"></i>
                                                    <span> Separador </span>    
                                                </th>
                                                <th scope="col">
                                                    <i class="fa-solid fa-box-open"></i>
                                                    <span> Qt. Itens Separados </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class='tbody text-center tableSeparacao skeleton-body'></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow mb-4 element" id="rankingConferencia">
                                <div class="card-header py-3 element">
                                    <h6 class="m-0 font-weight-bold text-primary">Ranking Conferência</h6>
                                </div>
                                <div class="card-body py-2 skeleton skeleton-card">
                                    <table class="table table-striped table-borderless invisible fut-invisible element">
                                        <thead class='thead text-center'>
                                            <tr>
                                                <th scope="col" class='text-left'>
                                                    <i class="fa-solid fa-user-tag"></i>
                                                    <span> Conferente </span>
                                                </th>
                                                <th scope="col">
                                                    <i class="fa-solid fa-box-open"></i>
                                                    <span> Qt. Itens Conferidos </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class='tbody text-center tableConferencia skeleton-body'></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!--Area para gráfico de Mercadorias despachadas no prazo-->
                        <div class="col" id='colGrafo'>   
                            <div class="card shadow  mb-3 element" id='grafoNotas '>
                                <div class="card-header py-3 element">
                                    <h6 class="m-0 font-weight-bold text-primary ">% Notas Despachadas</h6>
                                </div>
                                <div class="card-body skeleton skeleton-card">
                                    <div class="row d-flex align-items-center">
                                        <div class="col">
                                            <div class="chart-pie pt-4 pb-2">
                                                <canvas class='fut-invisible' id="myPieChart"></canvas>
                                            </div>
                                        </div>
                                        <div class="col d-flex flex-column align-items-center m-2">
                                            <h8 class="font-weight-bold invisible fut-invisible">% Despachado</h8>
                                            <h8 class="font-weight-bold text-center m-0  skeleton-text percNaoDespachado"></h8>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php include "pages/footer.php" ?>
        </div>

        <!-- Logout Modal-->
        <?php include "pages/logout.php" ?>
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="vendor/chart.js/Chart.min.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>
        <script>
            const getHours = () => {
                const clock = document.getElementById('horaAtual')
                const date = new Date() 
                const hours = date.getHours() 
                const minutes = date.getMinutes() 
                const hour = hours < 10 ? `0${hours}` : hours
                const minute = minutes < 10 ? `0${minutes}` : minutes
                clock.innerHTML = `${hour}:${minute} &nbsp; <i class="fa-regular fa-clock fa-sm"></i>`
            }
            setInterval(() => {
                getHours()
            }, 1000)
        </script>

        <script>
        /* Get the element you want displayed in fullscreen */ 
        var elem = document.getElementById("viewContainer");
        let iconFullScreen = document.getElementById('fullScreen')    
        /* Function to open fullscreen mode */
        function openFullscreen() {
            if(!document.fullscreenElement){
                elem.requestFullscreen();
                iconFullScreen.setAttribute('class','fa-solid fa-down-left-and-up-right-to-center')
            }else{
                document.exitFullscreen();
                iconFullScreen.setAttribute('class','fa-solid fa-up-right-and-down-left-from-center')
            }
            
        }
        </script>
        <script src="js/lib.js"></script>
        <script src="/js/sb-admin-2.min.js"></script>
        <script src='js/menuControl.js'></script>
        <script src="/js/skeletonControl.js"></script>
        <script src="/js/mainExpedicao.js"></script>
        <script src="js/acessControl.js"></script>
        <script src="js/themeControl.js"></script>
        <script src='js/mainLogout.js'></script>
</body>

</html>