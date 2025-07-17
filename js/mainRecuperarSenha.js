document.addEventListener("DOMContentLoaded", function(event) {
    let urlParams = new URLSearchParams(window.location.search)
    let salt = urlParams.get("validar")
    $.ajax({
        type:"post",
        url: `${url}/api/validarsalt`,
        dataType:"json",
        data: {salt},
        error: (err)=>{
            document.getElementById('container').replaceChildren()
            Swal.fire({
                icon:"error",
                title:"Link Expirado!",
                html:"Solicite um novo reset.",
                allowOutsideClick: false
            }).then((res)=>{
                if(res.isConfirmed){
                    window.location.href="./login"
                }
            })
        }
    })

    function atualizarSenha(){
        let urlParams = new URLSearchParams(window.location.search)
        let salt = urlParams.get("validar")
        let senha = document.getElementById('senha').value

        if(senha){
        $.ajax({
            type:"post",
            url: `${url}/api/alterarsenha`,
            dataType:'json',
            data: {
                senha,
                salt
            },
            success: (suc)=>{
                document.querySelector('#container').replaceChildren()
                Swal.fire({
                    icon:'success',
                    title:'Senha Atualizada',
                    html: "Agora é só acessar sua conta e conferir seu desempenho!",
                    allowOutsideClick: false
                }).then((res)=>{
                    if(res.isConfirmed){
                        window.location.href="./login"
                    }
                })
            },
            error: (err)=>{
                Swal.fire({
                    icon:'danger',
                    title:'Ops...Algo deu Errado!',
                    html:`Favor encaminhar erro ao setor de TI para correção <br> ${err.responseText}`
                })
            }
        })}else{
            Swal.fire({
                icon:"warning",
                title:"A senha não pode estar em branco!",
                html:"O campo senha precisa ser preenchido antes de realizar o Envio. <br> Digite a nova senha e tente novamente."
            })
        }
    }

    document.querySelector('.btn-atualizar-senha').addEventListener('click',(event)=>{        
        atualizarSenha()
    })
})
