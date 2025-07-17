let logado = sessionStorage.getItem('logado');
    if(!logado){
            window.stop()
            window.location.href = 'login';
    }else{
    document.addEventListener('DOMContentLoaded', event=>{
            let nome = sessionStorage.getItem('nome');
            let fotoPerfil = sessionStorage.getItem('foto');
            document.getElementById('nomeUsuario').innerHTML =  nome;
            document.getElementById('fotoPerfil').src = fotoPerfil != '' ?`${url}/img/${fotoPerfil}` : "img/undraw_profile.svg";
    })
}
