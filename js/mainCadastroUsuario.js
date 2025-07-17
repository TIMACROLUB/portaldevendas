function tipoPerfil(tipoPerfil) {
  const rca = html.get('#rca')
  //Tipos disponiveis de perfil para acesso
  const perfis = [
    {codigoPerfil: 'V', msgPerfil: 'Código Rca'},
    {codigoPerfil: 'S', msgPerfil: 'Código Supervisor'},
    {codigoPerfil: 'F', msgPerfil: 'Mátricula'},
    {codigoPerfil: 'E', msgPerfil: 'Mátricula'},
    {codigoPerfil: 'G', msgPerfil: 'Mátricula'},
    {codigoPerfil: 'C', msgPerfil: 'Código Comprador'},
    {codigoPerfil: 'Default', msgPerfil: 'Para desbloquear esse campo, favor selecionar o perfil de acesso'}
  ]
  
  //Selecionando o tipo de perfil que é igual ao selecionado no DOM
  perfis.map(perfil=>{
    //Se no DOM for selecionado Default o campo será desabilitado e o label voltará a ser Código Rca
    if(tipoPerfil.value === 'Default'){
      rca.setAttribute('readonly','readonly')
      rca.setAttribute('placeholder',`${perfil.msgPerfil}`)
      rca.previousElementSibling.innerText = 'Código Rca'
    }else if(tipoPerfil.value === perfil.codigoPerfil){ //Caso o perfil selecionado no DOM não for Default é validado se corresponde a algum dos perfis disponiveis
      //O Atributo somente leitura é removido e o label é alterado para o tipo de perfil correspondente
      rca.removeAttribute('readonly')
      rca.setAttribute('placeholder',`${perfil.msgPerfil}`)
      rca.previousElementSibling.innerText = `${perfil.msgPerfil}`
    }
  })
}

function salvarCadastro() {
  const formulario = html.get('#formCadastro')
  const formData = new FormData(formulario)
  if(validarCampos(formulario)){
    Swal.fire({
      title:'Validando dados informados...',
      didOpen: ()=>{
        Swal.showLoading()
        newReqAjax('post','validarusuario','json',{'codigorca': formData.get('rca'), 'tipoPerfil': formData.get('tipoPerfil')},
        (suc)=>{
          Swal.fire({
            title: "Salvando Cadastro!",
            html: "Esse processo pode demorar um pouco...<br> Pegue um café enquanto aguarda.<br><i class='fas fa-mug-hot'></i>",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading()
              newReqAjax('post','cadastrarusuario',undefined,formData, 
                (suc)=>{
                  formulario.reset()
                  Swal.fire({
                    title: 'Cadastro Realizado!',
                    html:'Agora é só logar com o seu Usuário e Senha e conferir seu desempenho!',
                    icon:'success',
                    didDestroy: ()=>{                
                        window.location.href = "login";
                    }
                  })
                },
                (err)=>{
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: `Algo deu Errado! <br> Motivo: ${err.responseText}`
                    })
                },false,false
              )
            }
          })
        }, 
        (err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O rca informado já está cadastrado.'
          })
        })
      }
    })  
  }
}


const tipoPerfilElem = html.get('#tipoPerfil')
tipoPerfilElem.addEventListener('change',e=>{ //Listener para quando o usuario selecionar outro perfil no DOM
  tipoPerfil(tipoPerfilElem)
})

const form = Array.from(html.get(`form#formCadastro`))
form.map(input=>{
  input.addEventListener('blur',e=>{
    validarCampo(input)
  })
})

html.get('#btn-gravar').addEventListener('click',e=>{
  salvarCadastro()
})