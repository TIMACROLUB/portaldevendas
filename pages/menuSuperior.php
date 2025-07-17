<ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown no-arrow d-flex align-items-center mx-2">
                            <div class='dropdown only-autoGestao' id='dropdownRcas' hidden>
                                <button class='btn btn-light dropdown-toggle select-custom' data-toggle='dropdown' target=''id='selectedOption'>
                                    <i class="fa-solid fa-user-tie"></i>    
                                    <span class='span-desktop'>Selecione um RCA</span>
                                </button>
                                <div class='dropdown-menu dropdown-menu-lg p-0 px-3 options' id="menuRcas">
                                    <div class='form-group sticky-top bg-white py-3'>
                                        <label class='form-label m-0'for="filtroRca">Vendedor:</label>
                                        <input class='form-control' type="text" id='filtroRca'>
                                    </div>
                                    <hr class='my-2'>
                                    <div id='rcas'></div>
                                </div>
                            </div>    
                        </li>
                        <div class="topbar-divider d-none d-sm-block"></div>
                        <li class="nav-item dropdown no-arrow d-flex align-items-center mx-2 hideable">
                            <div class="dropdown timer">
                                <a class="btn btn-secondary dropdown-toggle" role='button' data-toggle='dropdown'>
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
                        <li class="nav-item dropdown no-arrow d-flex align-items-center mx-2">
                            <a class="nav-link dropdown-toggle" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i>
                                    Sair
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>