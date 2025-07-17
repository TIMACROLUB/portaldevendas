const form = html.get('#formLogin')

form.email.addEventListener('keyup',e=>{
  e.key === 'Enter' ? form.senha.focus() : false
})

form.senha.addEventListener('keyup',e => {
  e.key === 'Enter'? html.get('#btnSignin').click() : false
  }
)
const btnSignin = html.get('#btnSignin')
btnSignin.addEventListener('click',event=>{
  if(validarCampos(form)){
      html.get('.loading-icon').classList.toggle('hidden')
      btnSignin.setAttribute('disabled','disabled')
      newReqAjax('post','login','json',{'email': form.email.value, 'senha': form.senha.value},
        (ret)=>{
          sessionStorage.setItem('logado', true)
          sessionStorage.setItem('id', ret.id)
          sessionStorage.setItem('nome', ret.nome)
          sessionStorage.setItem('sobrenome', ret.sobrenome)
          sessionStorage.setItem('email', ret.email)
          sessionStorage.setItem('rca', ret.rca)
          sessionStorage.setItem('tipoPerfil', ret.tipoperfil)
          sessionStorage.setItem('foto', ret.foto)
          sessionStorage.setItem('salt',ret.salt)
          const usuario = new Usuario
          usuario.rota()
        },
        (err)=>{
          Swal.fire({
            icon: 'error',
            title: 'E-mail ou senha incorretos!',
            html: 'Verifique se o E-mail e Senha digitados estão corretos e tente novamente.',
            didDestroy: ()=>{
              btnSignin.removeAttribute('disabled')
              html.get('.loading-icon').classList.toggle('hidden')
            }
          })
        }
      )
    }
  }
)
  
