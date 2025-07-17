let i = 0

html.get('.btn-add-fornecedor').addEventListener('click', event => {
  if (i < 3) {
    i = i + 1
    let divForm = document.getElementById('formFornecedores')
    //Gera campos para cadastro de Fornecedor
    let divLinha = document.createElement('div')
    let divColunaDados = document.createElement('div')
    let divColunaBotao = document.createElement('div')
    let inputNome = document.createElement('input')
    let inputTelefone = document.createElement('input')
    let botaoAdicionar = document.createElement('a')
    let iconeBotao = document.createElement('i')

    //Atributos de DivLinha
    divLinha.setAttribute('class', 'row mb-4');
    divLinha.setAttribute('id', 'linhaFornecedor' + i)

    //Atributos de DivColunaDados
    divColunaDados.setAttribute('class', 'col lg-5')

    //Atributos de DivColunaBotao
    divColunaBotao.setAttribute('class', 'col-auto mt-4')

    //Atributos de InputNome
    inputNome.setAttribute('type', 'text')
    inputNome.setAttribute('class', 'form-control form-control-user mb-3')
    inputNome.setAttribute('placeholder', 'Nome')
    inputNome.setAttribute('name', 'nomeFornecedor' + i)
    inputNome.setAttribute('id', 'fornecedor' + i)

    //Atributos de InputTelefone
    inputTelefone.setAttribute('type', 'text')
    inputTelefone.setAttribute('class', 'form-control form-control-user')
    inputTelefone.setAttribute('placeholder', 'Telefone')
    inputTelefone.setAttribute('name', 'telefoneFornecedor' + i)
    inputTelefone.setAttribute('id', 'telefone' + i)
    inputTelefone.setAttribute('maxlength', '15')

    //Atributos de BotaoAdicionar
    botaoAdicionar.setAttribute('class', 'btn btn-danger')
    botaoAdicionar.setAttribute('role', 'button')
    botaoAdicionar.setAttribute('onclick', `removeFornecedor(${i})`)

    //Atributos de IconeBotao
    iconeBotao.setAttribute('class', 'fas fa-minus')

    divColunaDados.appendChild(inputNome)
    divColunaDados.appendChild(inputTelefone)

    divColunaBotao.appendChild(botaoAdicionar)
    botaoAdicionar.appendChild(iconeBotao)

    divLinha.appendChild(divColunaDados)
    divLinha.appendChild(divColunaBotao)

    divForm.appendChild(divLinha)


  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Não é possível adicionar mais que 4 fornecedores!',
    })
  }
})

function removeFornecedor(v) {
  i -= 1
  let linha = document.getElementById('linhaFornecedor' + v)
  linha.remove()
}

html.get('.btn-busca-cnpj').addEventListener('click', event => {
  Swal.fire({
    title: 'Consultando CNPJ...',
    html: 'Por favor, aguarde',
    didOpen: ()=>{
      Swal.showLoading()
      let btnAvancar = document.getElementById('avancarCnpj')
      let divSocios = document.getElementById("socios")
      divSocios.replaceChildren()
      let cnpj = document.getElementById("cnpjCliente").value;
      cnpj = cnpj.replace(/\D/g, "");
      if (cnpj.length == 14) {
        newReqAjax('post','validaCadCli',undefined,{ documento: cnpj },
          (ret) => {
            let retorno = JSON.parse(ret)
            if (retorno.length > 0) {
              cnpj.value = ''
              Swal.fire({
                icon: 'error',
                title: 'Cliente já cadastrado!',
                html: `<div class="container text-left font-bold">
                      <div class="col">Codigo cliente: ${retorno[0].CODIGOCLIENTE}</div>
                      <div class="col ">Cliente: ${retorno[0].CLIENTE}</div>
                      <div class="col">RCA: ${retorno[0].RCA} - ${retorno[0].NOMERCA} </div>
                      <div class="col">Data da Ultima Compra: ${retorno[0].ULTIMACOMPRA}</div>
                      </div>
                      `
              })
            } else {
              newReqAjax('post','validaPreCadCli',undefined, { documento: cnpj },
                (ret) => {
                  let retorno = JSON.parse(ret)
                  if (retorno.length == 0) {
                    $.ajax({
                      type: "get",
                      url: "https://publica.cnpj.ws/cnpj/" + cnpj,
                      dataType: 'json'
                    }).always((ret) => {
                      Swal.close()
                      let nomeFantasia = ret.estabelecimento.nome_fantasia == null ? ret.razao_social : ret.estabelecimento.nome_fantasia

                      document.getElementById("razaoSocialCliente").value = ret.razao_social
                      document.getElementById("fantasiaCliente").value = nomeFantasia
                      document.getElementById("inscricaoEstadualCliente").value = ret.estabelecimento.inscricoes_estaduais[0].inscricao_estadual
                      document.getElementById("ramoAtividadeCliente").value = ret.estabelecimento.atividade_principal.descricao

                      let socios = ret.socios
                      socios.slice(0, 4).map((itens, indice) => {

                        //Gerar campos Socios
                        let divLinha = document.createElement("div")
                        //Atributos Div Linha
                        divLinha.setAttribute("class", "row")
                        let divColunaNome = document.createElement("div")
                        //Atributos Div Coluna Nome
                        divColunaNome.setAttribute("class", "col")
                          let inputNome = document.createElement("input")
                          inputNome.value = itens.nome
                          //Atributos Input Nome
                          inputNome.setAttribute("type", "text")
                          inputNome.setAttribute("class", "form-control form-control-user mb-3")
                          inputNome.setAttribute("readonly", "readonly")
                          inputNome.setAttribute("name", "nomeSocio" + indice)
                        let divColunaCpf = document.createElement("div")
                        //Atributos Div Coluna CPF
                        divColunaCpf.setAttribute("class", "col")
                        let inputCpf = document.createElement("input")
                          inputCpf.value = itens.cpf_cnpj_socio
                          //Atributos Input CPF
                          inputCpf.setAttribute("type", "text")
                          inputCpf.setAttribute("class", "form-control form-control-user mb-3")
                          inputCpf.setAttribute("readonly", "readonly")
                          inputCpf.setAttribute("name", "cpfSocio" + indice)

                        divColunaNome.appendChild(inputNome)
                        divColunaCpf.appendChild(inputCpf)
                        divLinha.appendChild(divColunaCpf)
                        divLinha.appendChild(divColunaNome)
                        divSocios.appendChild(divLinha)
                      })

                      const fieldsets = Array.from(html.getAll('.form-fieldset'))
                      const current_fieldset = fieldsets.filter(fs => (window.getComputedStyle(fs).getPropertyValue('display') == 'block'))
                      validarCampos(current_fieldset[0].firstElementChild)
                    })
                  } else {
                    Swal.close()
                    cnpj.value = ''
                    Swal.fire({
                      icon: 'error',
                      title: 'Cliente já possui Pré-cadastro!',
                      html: 'O CNPJ informado já está pré-cadastrado.'
                    })
                  }
                }
              )
            }
          }
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Numero Invalido!',
          html: 'Verifique o CNPJ digitado e pesquise novamente.'
        })
      }
    }
  })
    
})

html.get('.btn-busca-cep').addEventListener('click', event => {
  Swal.fire({
    title: 'Consultando CEP...',
    html: 'Por favor, aguarde',
    didOpen: ()=>{
      Swal.showLoading()
      let cep = document.getElementById("cepCliente").value
      cep = cep.replace(/\D/g, "")
      if (cep.length == '8') {
        $.ajax({
          type: "get",
          url: "https://viacep.com.br/ws/" + cep + "/json/",
          dataType: "json"
        }).always((ret) => {
          if (!ret.erro) {
            Swal.close()
            document.getElementById("lograudoroCliente").value = ret.logradouro
            document.getElementById("bairroEndereco").value = ret.bairro
            document.getElementById("cidadeEndereco").value = ret.localidade
            document.getElementById("estadoEndereco").value = ret.uf
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops... Cep não localizado!',
              html: 'Verifique o Cep digitado e pesquise novamente.'
            })
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Numero Invalido!',
          html: 'Verifique o Cep digitado e pesquise novamente.'
        })
      }
    }
  })
})

html.get('.btn-gravar-cliente').addEventListener('click', event => {
  let formulario = document.getElementById('msform')
  let formData = new FormData();
  let inputs = Array.from(html.getAll('input.form-control-user'))
  inputs.map(input=>{
    formData.append(input.name,input.value)
  }) 

  let textareas = Array.from(html.getAll('textarea.form-control-user'))
  textareas.map(textarea=>{
    formData.append(textarea.name, textarea.value)
  })

  let radioInput = html.get('.form-radio-input:checked')
  formData.append('instalacoes', radioInput.value)

  let switchInput = html.get('.form-switch-input')
  switchInput.checked ? formData.append('sedePropria','S') : formData.append('sedePropria','N')

  let fileInputs = Array.from(html.getAll('.form-control-file'))
  fileInputs.map(input=>{
    input.files[0] ? formData.append(input.name ,input.files[0]) : false;
  })
  formData.append('rca',sessionStorage.getItem('rca'))
  formData.append('codgrupofilial','1')
    Swal.fire({
      title: 'Salvando Pré-cadastro',
      html: "Esse processo pode demorar um pouco...<br> Pegue um café enquanto aguarda.<br><i class='fas fa-mug-hot'></i>",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading()
        document.getElementById("rca").value = sessionStorage.getItem('rca')
        /* let form = $('#msform').serialize(formulario.); */

        newReqAjax('post', 'cadastrarPreCadCli', undefined, formData,
          (suc) => {
            Swal.fire({
              title: 'Pré-cadastro salvo com sucesso!',
              html: `O código do pré-cadastro é ${suc.ID}`,
              didDestroy: ()=>{
                window.location.reload()
              }
            })
            
            
          },
          (err) => {
            console.log('Erro!')
          }, false, false)
      }
    })
})
