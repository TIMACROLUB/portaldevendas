let perfil = sessionStorage.getItem('tipoPerfil')
let menuLateral = document.getElementById('accordionSidebar').children
let btnInicio = document.getElementById('btnInicio')

if(perfil == 'G'){
    btnInicio.setAttribute('href','index')
}
if(perfil == 'V' || perfil == 'S'){
    btnInicio.setAttribute('href','index')
    menuLateral.compras.style = 'display: none'
    menuLateral.expedicao.style = 'display: none'
    menuLateral.importadados.style = 'display: none'
}
if(perfil == 'F'){
    menuLateral.logo.setAttribute('href','2via')
    btnInicio.setAttribute('href','2via')
    menuLateral.econocargo.style = 'display: none'
    menuLateral.cadatrarCliente.style = 'display: none'
    menuLateral.importadados.style = 'display: none'
}
if(perfil == 'C'){
    menuLateral.logo.setAttribute('href','compras')
    btnInicio.setAttribute('href','compras')
    menuLateral.econocargo.style = 'display: none'
    menuLateral.cadatrarCliente.style = 'display: none'
    menuLateral.segundaVia.style = 'display: none'
}
if(perfil == 'E'){
    menuLateral.logo.setAttribute('href','expedicao')
    btnInicio.setAttribute('href','expedicao')
    menuLateral.econocargo.style = 'display: none'
    menuLateral.cadatrarCliente.style = 'display: none'
    menuLateral.segundaVia.style = 'display: none'
    menuLateral.importadados.style = 'display: none'
}
