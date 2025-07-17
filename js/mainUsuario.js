html.get('.form-group #fotoPerfil').src = `${url}/img/${usuario.foto}`
let form = document.getElementById('formAtualizaCadastro');
html.get('#nomeUsuario').innerText =  usuario.nome;
form.nome.value = usuario.nome;
form.email.value = usuario.email;
form.rca.value = usuario.rca;
form.perfil.value = usuario.perfil;

function fotoPreview(preview){
  let reader = new FileReader();
  reader.onload = (f)=>{
      html.get('.form-group #fotoPerfil').src = f.target.result;
  }

  reader.readAsDataURL(preview.target.files[0]);
}

html.get('#foto').addEventListener('change', fotoPreview)

function toogleDisabled(){
  const disabledInputs = Array.from(html.getAll('#formAtualizaCadastro input'))
  disabledInputs.map(disabledInput=>{
    disabledInput.toggleAttribute('disabled')
  })
}

html.get('#btnAtualizaCadastro').addEventListener('click',event=>{
  let id = sessionStorage.getItem("id")
  let form = document.getElementById('formAtualizaCadastro')
  const formData = new FormData(form)
  formData.append('id', id)

  Swal.fire({
    title: 'Confirma atualização do Cadastro?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, Enviar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Salvando Cadastro!",
        html: "Esse processo pode demorar um pouco...<br> Pegue um café enquanto aguarda.<br><i class='fas fa-mug-hot'></i>",
        didOpen: () => {
          Swal.showLoading()
          /* alteraFoto() */
          newReqAjax('post','atualizarusuario',undefined,formData,
            (ret)=>{
              sessionStorage.setItem('nome', form.nome.value)
              sessionStorage.setItem('email', form.email.value)
              Swal.fire({
                title: 'Cadastro Atualizado!',
                icon: 'success'
              }).then((result) => {
                if (result.isConfirmed) {
                  location.reload()
                }
              })
            },
            (err)=>{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu Errado!'
              })
            },false,false
          )
        },
        allowOutsideClick: false,
      })
    }
  }) 
})

html.get('#btnEditar').addEventListener('click',e=>{
  toogleDisabled()
})

html.get('#btnCancelaEdicao').addEventListener('click',e=>{
  toogleDisabled()
})
