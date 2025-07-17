const skeleton = new Skeleton

/* function enviarNota(chave, email, cliente) {
  Swal.fire({
    icon: "question",
    html: `Confirmar o Envio da Nota Fiscal para o E-mail: <br><strong>${email}</strong>?`,
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: 'Não',
    showConfirmButton: true,
    confirmButtonText: 'Sim, Enviar!',
    preConfirm: () => {
      reqAjax('enviaremailnfe', { chave, email, cliente }, )
    }
  }).then((res) => {
    if (res.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'NF-e Enviada com Sucesso!',
        timerProgressBar: true,
        timer: 2000,
        didOpen: () => {
          timer = setInterval(() => {
            Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timer)
        }
      })
    } 
  })
} */

function baixarNfe(numtransvenda, numnota, e) {
  const btnTrigger = e.currentTarget
  html.removerClass(btnTrigger.lastElementChild,'hidden')
  $.ajax({
    type: "post",
    url: `${url}/api/downloadnf`,
    data: { numtransvenda },
    xhrFields: {
      responseType: 'blob',
      withCredentials: true
    },
    success: (data) => {
      html.addClass(btnTrigger.lastElementChild,'hidden')
      let a = document.createElement('a');
      let url = window.URL.createObjectURL(data);
      a.href = url;
      a.download = `NF-${numnota}.pdf`;
      document.body.append(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
  })
}

function consultaPrest(numtransvenda){
  Swal.fire({
    title:'Consultando Prestações',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: ()=>{
      Swal.showLoading()
      newReqAjax('post','consultatitulos','json',{numtransvenda},
        (res)=>{
          let prestacoes = JSON.parse(res)
          let divContainer = document.createElement('div')
          divContainer.setAttribute('class','col-lg mb-2')
          divContainer.setAttribute('id','containerPrest')
  
          prestacoes.map((prest, index)=>{

            let divCheckPrest = document.createElement('div')
            divCheckPrest.setAttribute('class','col-auto form-check')

            let checkPrest = document.createElement('input')
            checkPrest.className = 'form-check-input-prest mt-0 ml-0'
            checkPrest.style.position = 'relative'
            checkPrest.type = 'checkbox'
            checkPrest.id = `checkPrest${index}`
            checkPrest.value = prest.PREST

            //Criando Botão para gerar boleto
/*             let btnPrest = document.createElement('a')
            btnPrest.setAttribute('type','button')
            btnPrest.setAttribute('class','btn btn-primary w-100 mb-2')
            btnPrest.setAttribute('onclick',`gerarBoleto(${numtransvenda},${prest.PREST})`) */
  
            //Div que contem os dados da prestação, fica dentro do botão
            let divRowDados = document.createElement('div')
            divRowDados.setAttribute('class','row mb-3 p-2 align-items-center border rounded')
            
            //Coluna contendo o numero da prestação
            let divColPrest = document.createElement('div')
            divColPrest.setAttribute('class','col-auto')
            divColPrest.innerHTML = `Prest: ${prest.PREST}`
            
  
            //Coluna contendo data de vencimento
            let divColVencimento = document.createElement('div')
            divColVencimento.setAttribute('class','col-auto')
            divColVencimento.innerHTML = `Dt. Vencimento: ${prest.DTVENC}`
            

            //Coluna contendo valor da prestação
            let divColValor = document.createElement('div')
            divColValor.setAttribute('class','col-auto')
            divColValor.innerHTML = `Valor: ${prest.VALOR}`
            
  
            divCheckPrest.appendChild(checkPrest)
            divRowDados.appendChild(divCheckPrest)
            divRowDados.appendChild(divColPrest)
            divRowDados.appendChild(divColVencimento)
            divRowDados.appendChild(divColValor)
            divContainer.appendChild(divRowDados)  
          })
          Swal.fire({
            title: 'Selecione a prestação',
            width: '45em',
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: 'Imprimir selecionados',
            html: divContainer,
            preConfirm: ()=>{
              let checks = Array.prototype.slice.call(document.querySelectorAll('.form-check-input-prest'))
              let checkValues = []
              checks.map((elem)=>{
                if(elem.checked){
                  checkValues.push(elem.value)
                }
              })
              if(checkValues.length > 0){
                checkValues = checkValues.toString()
                gerarBoleto(numtransvenda, checkValues)
              } else {
                Swal.showValidationMessage(
                  'Selecione a prest que deseja imprimir.'
                )
              } 
            }
          })
        }
      ),
      (err)=>{
        Swal.fire({
          title: 'Não foi possivel localizar as pretações para essa Nota',
          icon: 'error'
        })
      }
    }
  })
}

function gerarBoleto(numeroTransacao, prest){
  Swal.fire({
    title: 'Gerando Boleto...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: ()=>{
      Swal.showLoading()
      newReqAjax('post','gerarboleto',undefined,{numeroTransacao,prest},
        (ret)=>{
          Swal.close()
          let a = document.createElement('a');
          let url = window.URL.createObjectURL(ret);
          a.href = url;
          a.download = `Boleto.pdf`;
          document.body.append(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
        },
        (err)=>{
          Swal.fire({
            title:"Não foi possível Gerar o Boleto",
            html: err
          })
        },undefined,undefined,undefined,'blob'
      )
    }
  })
}

//Função para validar se o filtro de período de tempo é igual ou menor que 7 dias
function validateDateFilter(date1,date2) {
  date1 = Date.parse(date1);
  date2 = Date.parse(date2);
  
  dateDiff = Math.floor((date2 - date1) / (24*3600*1000))

  if(dateDiff <= 7){
      return true;
  } else {
      return false;
  }
}

function validateCustomerFilter(customerId) {
  return !!customerId;
}

//Função responsável por carregar os dados na tela assim que a página carrega
function getNotas(customerId, dateInput1, dateInput2){
  let filial, codigoCliente, numeroPedido, numeroNota, rca = sessionStorage.getItem('rca')
      
      ArraySelectedfilial = getAllSelectedOptions()
      filial = ArraySelectedfilial.toString()
      codigoCliente = html.get('#cliente').value ? html.get('#cliente').value : '';
      numeroPedido = html.get('#pedido').value ? html.get('#pedido').value : '';
      numeroNota = html.get('#nfe').value ? html.get('#nfe').value : '';
      const feedback = html.get('#customerFilterContainer .feedback-validation');
      if(validateCustomerFilter(customerId.value) || customerId.value === 'all'){
        feedback.classList.remove('invalid-feedback')
        html.get('.btn-close[data-bs-dismiss="offcanvas"]').click()
        skeleton.generateSkeleton(html.get('#gridPedidos'),5,['small','textH6','small','text'],'icon','icon')
        newReqAjax('post','consultanotas','json',{dtinicio: dateInput1.value, dtfim: dateInput2.value, filial, codcli: codigoCliente, pedido: numeroPedido, numnota: numeroNota, rca: rca},
        (suc)=>{
            const container = html.get('#gridPedidos')
            container.replaceChildren();
            containerElem = container
            buttonsContainer = html.get('.numbers')
            data = suc
            state.totalPages = Math.ceil(suc.length / state.perPage)
            method = (nota)=>{
                let elem = html.create('div',`mb-2 border-bottom`);
                let rowPrest = html.create('div',`mt-2 border-top px-2 nota-${nota.NUMNOTA}`)
                let row = html.create('div','row align-items-center');
                let rowCol = html.create('div','col mb-3')
                    let rowColSmallDataEmissao = html.create('small','',`Data de Emissão: ${nota.DTSAIDA}`)
                    let rowColH6Cliente = html.create('h6','m-0',`Cliente: ${nota.CLIENTE}`)
                    let rowColRow = html.create('div','row justify-content-start')
                        let rowColRowColFilial = html.create('div','col-auto')
                            let rowColRowColFilialSmall = html.create('small','',`Cód. Filial: ${nota.CODFILIAL}`)
                        let rowColRowColNumped = html.create('div','col-auto px-0')
                            let rowColRowColNumpedSmall = html.create('small','',`Numped: ${nota.PEDIDO}`)
                    let rowColSpanNumnota = html.create('span','',`NF-e: ${nota.NUMNOTA}`)
                let rowColAuto = html.create('div','col-auto')
                    let rowColAutoBtnDanfe = html.create('a','btn btn-primary text-decoration-none m-1 btn-danfe')
                    rowColAutoBtnDanfe.addEventListener('click',(e)=>{baixarNfe(nota.NUMTRANSVENDA,nota.NUMNOTA,e)})
                        let rowColAutoBtnDanfeIcon = html.create('i', 'fas fa-file-download fa-2x inner-label')
                        let rowColAutoDanfeLoadIcon = html.create('i','fa-solid fa-spinner fa-2x loading-icon hidden')
                    if(nota.TITULOSEMABERTO > 0){
                        rowColAutoBtnPrest = html.create('a','btn btn-primary text-decoration-none btn-prestacoes')
                        rowColAutoBtnPrest.addEventListener('click',()=>{consultaPrest(nota.NUMTRANSVENDA)})
                            rowColAutoBtnPrestIcon = html.create('i','fa-solid fa-file-invoice-dollar fa-2x inner-label')
                            rowColAutoPrestLoadIcon = html.create('i','fa-solid fa-spinner fa-2x loading-icon hidden')
                    }else{
                        rowColAutoBtnPrest = html.create('a','btn btn-secondary text-decoration-none btn-prestacoes disabled')
                            rowColAutoBtnPrestIcon = html.create('i','fa-solid fa-file-invoice-dollar fa-2x')
                    }

                rowCol.appendChild(rowColSmallDataEmissao)
                rowCol.appendChild(rowColH6Cliente)
                rowCol.appendChild(rowColRow)
                    rowColRow.appendChild(rowColRowColFilial)
                        rowColRowColFilial.appendChild(rowColRowColFilialSmall)
                    rowColRow.appendChild(rowColRowColNumped)
                        rowColRowColNumped.appendChild(rowColRowColNumpedSmall)
                    rowColRow.appendChild(rowColSpanNumnota)

                rowColAuto.appendChild(rowColAutoBtnDanfe)
                    rowColAutoBtnDanfe.appendChild(rowColAutoBtnDanfeIcon)
                    rowColAutoBtnDanfe.appendChild(rowColAutoDanfeLoadIcon)
                rowColAuto.appendChild(rowColAutoBtnPrest)
                    rowColAutoBtnPrest.appendChild(rowColAutoBtnPrestIcon)
                    try {
                      rowColAutoBtnPrest.appendChild(rowColAutoPrestLoadIcon)
                    } catch (error) {
                      false
                    }

                row.appendChild(rowCol)
                row.appendChild(rowColAuto)
                
                elem.appendChild(row);
                elem.appendChild(rowPrest)
                container.appendChild(elem);
            }
            //Funções que controlam a paginação dos items 
            update();
            init();

        },   
        (err)=>{
            console.log(err)
        })
      }else{
          html.addClass(feedback,'invalid-feedback')
      }
}

document.addEventListener('DOMContentLoaded',e=>{
  /* skeleton.generateSkeleton(html.get('#gridPedidos'),3,['small','textH6','small','text'],'icon','icon') */
  const dateInput1 = html.get('#dataInicio')
  const dateInput2 = html.get('#dataFim')
  let date = new Date();
  
  dateInput2.value = date.toLocaleDateString('sv');
  dateInput1.value = date.toLocaleDateString('sv')

  newReqAjax('get','filiais','json',null,
    (suc)=>{
      suc.map((filial)=>{
          let option = html.create('div')
          option.setAttribute('class','option p-2')
          option.innerText = `${filial.CODIGO} - ${filial.RAZAOSOCIAL}`
          option.setAttribute('value',filial.CODIGO)
          option.setAttribute('type','button')
          option.addEventListener('click',()=>{
              selectOption(option)
          })
          options.appendChild(option)
      })
    }
  )
  
  const customerIdDOM = html.get('#cliente');
  html.get('#filtrarDados').addEventListener('click',e=>{
    getNotas(customerIdDOM, dateInput1, dateInput2)
  })

  getNotas({value: 'all'}, dateInput1,dateInput2)
})