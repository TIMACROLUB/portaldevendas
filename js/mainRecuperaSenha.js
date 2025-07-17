let i = 0
let arr = []
let userId = null
let indice = 0

const email = html.get('#email')
function recuperarSenha() {
  if(validarCampo(email)){
    newReqAjax('post','recuperarsenha','json',{'email': email.value},
      (suc)=>{
        Swal.fire({
          icon: "success",
          title: "Instruções para reset de senha Enviadas com Sucesso",
          html: "Siga as intruções recebidas para realiza o reset da sua senha."
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./login"
          }
        })
      },
      (err)=>{
        Swal.fire({
          icon: "error",
          title: "Não foi possível concluir o Envio.",
          html: `Favor encaminhar erro ao setor de TI para correção <br> ${err}`
        })
      }
    )
  }
}

const form = Array.from(html.get('form.user'))
form.map(input=>{
  input.addEventListener('blur',e=>{
    validarCampo(input)
  })
})

html.get('#btn-recuperar-senha').addEventListener('click',recuperarSenha)





