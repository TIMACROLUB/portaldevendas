document.addEventListener("DOMContentLoaded", function(event) {
    let logado = sessionStorage.getItem('logado');
    let perfil = sessionStorage.getItem('tipoPerfil')
    let pagina = location.pathname
    
    if(!logado){
        window.stop;
        window.location.href = 'login';  
    }else{
        let nome = sessionStorage.getItem('nome');
        let sobrenome = sessionStorage.getItem('sobrenome');
        let fotoPerfil = sessionStorage.getItem('foto')
        console.log(fotoPerfil)
        document.getElementById('nomeUsuario').innerHTML =  nome; 
        document.getElementById('fotoPerfil').src = fotoPerfil != 'null' ?`${url}/img/${fotoPerfil}` : "img/undraw_profile.svg";
        if(pagina == '/conta'){
            document.getElementById('thumbnail').src = fotoPerfil != 'null' ?`${url}/img/${fotoPerfil}` : "img/images.png";
        }
    }
    if(perfil == 'F'){
        if(pagina == '/compras' || pagina == '/econocargo' || pagina == '/cadastroCliente' || pagina == '/importardados'){
                window.location.href='2via'
        }
    }
    if(perfil == 'C'){
        if(pagina == '/index' || pagina == '/econocargo' || pagina == '/cadastroCliente' || pagina == '/2via'){
                window.location.href='compras'
        }
    }
    if(perfil == 'V'){
        if(pagina == '/compras' || pagina == '/importardados'){
                window.location.href='index'
        }
    }
    if(perfil == 'E'){
        if(pagina == '/compras' || pagina == '/index' || pagina == '/econocargo' || pagina == '/cadastroCliente' || pagina == '/2via' || pagina == '/importardados'){
            window.location.href= 'expedicao'
        }
    }
})

