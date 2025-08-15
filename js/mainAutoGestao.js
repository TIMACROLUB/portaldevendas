let tipoPerfil = this.sessionStorage.getItem('tipoPerfil'),
    sessionCodigoRCA = sessionStorage.getItem('rca'),
    codRcas = [];
const skeleton = new Skeleton

html.get('.only-autoGestao').removeAttribute('hidden')

class filtroRca {
  constructor(){
    this.currentRca = ''; 
  }

  getRcas(){
    const selectRcas = html.get('#rcas')
    selectRcas.replaceChildren()
    switch (tipoPerfil) {
      //Se o usuario for um supervisor de vendas, será buscado todos os RCAs vinculados a ele
      case 'S': 
        newReqAjax('post','rcasupervisor','json',{'supervisor': sessionCodigoRCA},
        rcas=>{
          codRcas = rcas
          rcas.map((rca,index)=>{
            const elem = this.renderRcas(selectRcas,rca)
            if(index === 0){
              elem.setAttribute('selected',true)
              this.currentRca = elem.id 
            }
          })
          atualizaDados()
        })
        break;
      //Para gerentes, serão buscados todos os RCAs cadastrados no sistema
      case 'G':
        newReqAjax('post','rcasgerente','json','',
        rcas=>{
          codRcas = rcas
          rcas.map((rca,index)=>{
            const elem = this.renderRcas(selectRcas,rca)
            if(index === 0){
              elem.setAttribute('selected',true) 
              this.currentRca = elem.id
            }
          })          
          atualizaDados()
        })
        break;
      default: 
        atualizaDados()
        break;
    }
  }

  renderRcas(selectRcas,rca){
    let elem = html.create('button','dropdown-item',`${rca.CODIGORCA} - ${rca.NOME}`, rca.CODIGORCA, rca.NOME.split(" ").join(""))
    elem.addEventListener('click',e=>this.selectRca(e.currentTarget))
    let hr = html.create('hr','my-1')
    selectRcas.appendChild(elem)
    selectRcas.appendChild(hr)

    return elem
  }

  getCurrentRca() {
    try{
      const actualElem = html.get(`#${this.currentRca}`)
      if(!actualElem.hasAttribute('selected')){
        actualElem.setAttribute('selected',true)
      }
      this.scrollFromCurrent()
    } catch {}
  }

  selectRca(newElem){
    const currentElem = html.get(`#${this.currentRca}`)
    try{
      currentElem.removeAttribute('selected')
    } finally {
      newElem.setAttribute('selected','selected')
      this.currentRca = newElem.id  
      atualizaDados()
    }
  }

  scrollFromCurrent(){
    const currentElem = html.get(`#${this.currentRca}[selected]`)
    currentElem.scrollIntoView({'block':'nearest',"inline":'nearest',"behavior":'smooth'})
  }

  async filtrar(dataSheet,listGroup){
    let input = html.get(`#filtroRca`)
    let arrayFiltrado = await dataSheet.filter(data=>Object.values(data).join().includes(input.value.toUpperCase()))
    listGroup.replaceChildren()
    arrayFiltrado.map(item=>this.renderRcas(listGroup,item))
    this.getCurrentRca()
  }
  /* getSelected(){
    debugger
    try{
      this.selectRca(this.currentRca)
    }finally {
      return false
    }
  }*/
}

const filtro = new filtroRca
filtro.getRcas()

function getReqRCA(tipoPerfil){
  let CodigoRCA;
  if(tipoPerfil === 'S' || tipoPerfil === 'G'){
    html.get('#rcas').removeAttribute('hidden')
    CodigoRCA = html.get('#rcas [selected]').value 
  }else{
    CodigoRCA = sessionCodigoRCA 
  }
  return CodigoRCA
}

function atualizaDados(){
  let CodigoRCA, CodigoSupervisor,
  anoMes = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`; 
  CodigoRCA = getReqRCA(tipoPerfil)

  skeleton.activeSkeleton()
  skeleton.generateSkeleton(html.get('#orcamentos'),3,['small','textH6','text'],['text'])
  skeleton.generateSkeleton(html.get('#tableInadimplencia'),4,['small','text'],['textH6'])
  skeleton.generateSkeleton(html.get('#devolucoesComerciais'),3,['small','textH6','text'],['textH6'])
  skeleton.generateSkeleton(html.get('#inativosPrevistos'),4,['small','text'],['textH6'])
  

  //Busca o resultado do mes atual da auto gestão SUPERVISOR
  if(tipoPerfil === 'S'){
    //Torna visivel o elemento contendo os dados
    html.get('#autoGestaoSupervisor').removeAttribute('hidden');
    CodigoSupervisor = sessionStorage.getItem('rca'); 
    newReqAjax('post','autogestaosupervisor','json', {'codigosupervisor': CodigoSupervisor}, 
    (autoGestaoSupervisor)=>{
      let campoMes = html.get('#gestaoMesAtual')
      skeleton.removeSkeleton(campoMes)
      campoMes.innerHTML = `${autoGestaoSupervisor.MARGEMMES} %`
      setStatusColor(campoMes,100,autoGestaoSupervisor.MARGEMMES)
  
      let campoMesAnterior = html.get('#gestaoMesPassado')
      skeleton.removeSkeleton(campoMesAnterior)
      campoMesAnterior.innerHTML = `${autoGestaoSupervisor.MARGEMMESANTERIOR} %`
      setStatusColor(campoMesAnterior,100,autoGestaoSupervisor.MARGEMMESANTERIOR)
  
      let campoDia = html.get('#gestaoHoje')
      skeleton.removeSkeleton(campoDia)
      campoDia.innerHTML = `${autoGestaoSupervisor.MARGEMDIA} %`
      setStatusColor(campoDia,100,autoGestaoSupervisor.MARGEMDIA)
  
      let campoDiaAnterior = html.get('#gestaoDiaAnterior')
      skeleton.removeSkeleton(campoDiaAnterior)
      campoDiaAnterior.innerHTML = `${autoGestaoSupervisor.MARGEMDIAANTERIOR} %`
      setStatusColor(campoDiaAnterior,100,autoGestaoSupervisor.MARGEMDIAANTERIOR)
    });

    newReqAjax('get','pedidosgerados', 'json', undefined,
        (pedidosGerados)=>{
            const graphCanvas = html.get('#pedidos-gerados');
            const datasetLabels = pedidosGerados.map(pedido=>pedido.DATA);
            const dataset = [{
                label: 'Pedidos até as 12 horas',
                data: pedidosGerados.map((pedido)=>pedido.QTPEDIDOSAM),
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255,99,132,0.9)'
            },
            {
                label: 'Pedidos após as 12 horas',
                data: pedidosGerados.map((pedido)=>pedido.QTPEDIDOSPM),
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54,162,235,0.9)'
            }];
            new chartJs(graphCanvas, 'line', dataset, datasetLabels);
            const graphContainer = html.get('#row-grafico-pedidos-dia')
            graphContainer.removeAttribute('hidden');
        },
        (err)=>{
          console.error(err);
        }
    );
  }

  //Busca resultado do Mes de Auto Gestao do RCA
  newReqAjax('post','desempenhomesrca','json',{CodigoRCA},
    (desempenhoMes)=>{
      let label = html.get('#desempenhoMes')
      skeleton.removeSkeleton(label)
      label.innerHTML = `${desempenhoMes.MARGEM} %`
      setStatusColor(label,100,desempenhoMes.MARGEM)
    }
  )    

  //Busca resultado do Dia de Hoje de Auto Gestao do RCA
  newReqAjax('post','desempenhohojerca','json',{CodigoRCA},
    (desempenhoHoje)=>{
      let label = html.get('#desempenhoHoje')
      skeleton.removeSkeleton(label)
      label.innerText = `${desempenhoHoje.MARGEM} %`
      setStatusColor(label,100,desempenhoHoje.MARGEM)
    }
  )

  newReqAjax('post','percentualmetahoje','json',{CodigoRCA},
    (percentualMeta)=>{
      let label = html.get('#valorMetaDia')
      skeleton.removeSkeleton(label)
      label.innerText = `${percentualMeta.PERCENTUALMETAHOJE} %`
      setStatusColor(label,100,percentualMeta.PERCENTUALMETAHOJE)
    }
  )

  newReqAjax('post','acumuladometa','json',{CodigoRCA},
  (percentualMeta)=>{
    let label = html.get('#metaacumulada')
    skeleton.removeSkeleton(label)
    label.innerText = `${percentualMeta.PERCENTUALMETAHOJEACUMULADO} %`
    setStatusColor(label,100,percentualMeta.PERCENTUALMETAHOJEACUMULADO)
  })

  //Busca resultado do % Realizado da Meta de Vendas
  newReqAjax('post','percentualmetames','json',{CodigoRCA},
    (percentualMeta)=>{
      let label = html.get('#percentualMeta')
      skeleton.removeSkeleton(label)
      label.innerText = `${percentualMeta.PERCENTUALMETA} %`
      setStatusColor(label,100,percentualMeta.PERCENTUALMETA)
      // `${Math.round((( percentualMeta[0].PERCENTUALMETA ) + Number.EPSILON) * 100) /100} %`
    }
  )

  //Busca resultado de Prazo Medio em Dias
  newReqAjax('post','prazomediodias','json',{CodigoRCA},
    (prazoMedio)=>{
      let label = html.get('#prazoMedioDias')
      skeleton.removeSkeleton(label)
      label.innerText = `${prazoMedio.PRAZOMEDIODIAS} Dias`
      setStatusColor(label,prazoMedio.PRAZOMEDIODIAS, 35)
    }
  )

  //Busca resultado de Valor em Aberto
  newReqAjax('post','valoremaberto','json',{CodigoRCA},(valorEmAberto)=>{
      let label = html.get('#valorEmAberto')
      skeleton.removeSkeleton(label)
      label.innerText = `R$ ${valorEmAberto.VALORARECEBER.toLocaleString('pt-br')}`
  })

  newReqAjax('post','clientespositivados','json',{CodigoRCA},(qtPositivada)=>{
      let label = html.get('.qtClientePositivado')
      skeleton.removeSkeleton(label)
      label.innerText = `${qtPositivada.CLIENTEPOSITIVADOS} Clientes`
  })
    //Busca a comissão por RCA
    html.get('#mesComissao').value = anoMes;
    newReqAjax('post', 'comissao', 'json', {'codigorca': CodigoRCA, 'anoMes': anoMes},
    (comissaoRCA) =>{
      let comissao = html.get('.vlComissao')
      skeleton.removeSkeleton(comissao)
      comissao.innerHTML = `R$ ${comissaoRCA.COMISSAO}`
    })

  newReqAjax('post','devrca','json',{'rca': CodigoRCA},(json)=>{
    let divDOMDevolucoes = html.get('.devolucoes')
    divDOMDevolucoes.replaceChildren()
    json.map((elem, index)=>{
      //Coluna que contém todos os dados e também age como divisor
      let container = html.create('div')
      if((index + 1) == json.length){
        container.setAttribute('class','')
      }else{
        container.setAttribute('class','border-bottom mb-2')
      }
        //Linha que contém os dados e auxilia na disposição deles em tela
        let containerRow = html.create('div')
        containerRow.setAttribute('class','row m-0 justify-content-between')
          //Primeira coluna da linha, serve para dividir o espaço na horizontal
          let rowColAuto = html.create('div')
          rowColAuto.setAttribute('class','col-auto p-0')
            //Primeira coluna, contem o small com o número de nota fiscal
            let colAutoColNfe = html.create('div')
            colAutoColNfe.setAttribute('class','col text-left')
              let colNfeSmall = html.create('small')
              colNfeSmall.innerHTML = `NF-e: ${elem.NUMNOTA}`
            //Segunda coluna, contem o nome do cliente
            let colAutoColCliente = html.create('div')
            colAutoColCliente.setAttribute('class','col text-left font-weight-bold m-0')
            colAutoColCliente.innerHTML = `Cliente: ${elem.CLIENTE}`
            //Terceira coluna, contem o motivo da devolução
            let colAutoColMotivo = html.create('div')
            colAutoColMotivo.setAttribute('class','col text-left mb-2')
            colAutoColMotivo.innerHTML = `Motivo: ${elem.MOTIVO}`
          //Segunda coluna da linha, serve para dividir o espaço na horizontal. Foi utilizada classe flex para alinhar os itens no centro vertical
          let rowColAutoFlex = html.create('div')
          rowColAutoFlex.setAttribute('class','col-auto d-flex align-items-center')
            //H6 contendo o valor da devolução
            let colAutoFlexH6 = html.create('h6')
            colAutoFlexH6.setAttribute('class','font-weight-bold m-0')
            colAutoFlexH6.innerHTML = `R$ ${elem.VALORDEVOLVIDO}`

      rowColAutoFlex.appendChild(colAutoFlexH6)
      colAutoColNfe.appendChild(colNfeSmall)
      rowColAuto.appendChild(colAutoColNfe)
      rowColAuto.appendChild(colAutoColCliente)
      rowColAuto.appendChild(colAutoColMotivo)
      containerRow.appendChild(rowColAuto)
      containerRow.appendChild(rowColAutoFlex)
      container.appendChild(containerRow)
      divDOMDevolucoes.appendChild(container)
    })
  },
  (err)=>{
    let divDOMDevolucoes = html.get('.devolucoes')
    divDOMDevolucoes.replaceChildren()
    let col = document.createElement('div')
    col.setAttribute('class','col h-100 d-flex align-items-center justify-content-center flex-column text-center')
    let icon = document.createElement('i')
    icon.setAttribute('class','fa-solid fa-truck-fast fa-flip-horizontal fa-8x mb-3')
    let h4 = document.createElement('h4')
    h4.setAttribute('class','h4')
    h4.innerHTML = 'Não houve devoluções esse mês'

    col.appendChild(icon)
    col.appendChild(h4)
    divDOMDevolucoes.appendChild(col)
  })

  newReqAjax('post','orcamentossetedias','json',{CodigoRCA},(orcamentos)=>{
    let divDOMOrcamentos = html.get('#orcamentos')
    divDOMOrcamentos.replaceChildren()
    orcamentos.map((orcamento,index)=>{
      let container = html.create('div')
      if((index + 1) == orcamentos.length){
        container.setAttribute('class','clickable')
      }else{
        container.setAttribute('class','border-bottom mb-2 clickable')
      }
        //Linha que contém os dados e auxilia na disposição deles em tela
        let containerRow = html.create('div')
        containerRow.setAttribute('class','row m-0 justify-content-between')
          //Primeira coluna da linha, serve para dividir o espaço na horizontal
          let rowColAuto = html.create('div')
          rowColAuto.setAttribute('class','col-auto p-0')
            //Primeira coluna, contem o small com o número de nota fiscal
            let colAutoColOrcamento = html.create('div')
            colAutoColOrcamento.setAttribute('class','col text-left')
              let colOrcamentoSmall = html.create('small')
              colOrcamentoSmall.innerHTML = `Numero do orçamento: ${orcamento.NUMERORCAMENTO}`
            //Segunda coluna, contem o nome do cliente
            let colAutoColCliente = html.create('div')
            colAutoColCliente.setAttribute('class','col text-left font-weight-bold m-0')
            colAutoColCliente.innerHTML = `Cliente: ${orcamento.CLIENTE}`
            //Terceira coluna, contem o motivo da devolução
            let colAutoColValidade = html.create('div')
            colAutoColValidade.setAttribute('class','col text-left mb-2')
            colAutoColValidade.innerHTML = `Valido até: ${orcamento.DATAVALIDADE}`
            //Segunda coluna da linha, serve para dividir o espaço na horizontal. Foi utilizada classe flex para alinhar os itens no centro vertical
            let rowColAutoFlex = html.create('div')
            rowColAutoFlex.setAttribute('class','col-auto d-flex align-items-center')
            //H6 contendo o valor da devolução
            let colAutoFlexH6 = html.create('h6')
            colAutoFlexH6.setAttribute('class','font-weight-bold m-0')
            colAutoFlexH6.innerHTML = `R$ ${orcamento.VLTOTAL}`

      rowColAutoFlex.appendChild(colAutoFlexH6)
      colAutoColOrcamento.appendChild(colOrcamentoSmall)
      rowColAuto.appendChild(colAutoColOrcamento)
      rowColAuto.appendChild(colAutoColCliente)
      rowColAuto.appendChild(colAutoColValidade)
      containerRow.appendChild(rowColAuto)
      containerRow.appendChild(rowColAutoFlex)
      container.appendChild(containerRow)
      divDOMOrcamentos.appendChild(container)

      container.addEventListener('click',()=>{
        let result
        Swal.fire({
            title: 'Calculando desempenho do orçamento',
            html: "Esse processo pode demorar um pouco...<br> Pegue um café enquanto aguarda.<br><i class='fas fa-mug-hot'></i>",
            allowOutsideClick: false,
            didOpen : ()=>{
                Swal.showLoading()
                newReqAjax('post','desempenhoitensorcamento','json',{"orcamento":orcamento.NUMERORCAMENTO},
                (res)=>{
                    let desempenhoItens = JSON.parse(res)
                    result = desempenhoItens.map((desempenhoItem,index)=>{
                        let h4 = html.create('h4')
                        let divColBarPerc = html.create('div')
                        let divColPerc = html.create('div')
                        let divColBar = html.create('div')
                        let divBar = html.create('div')
                        let divContainer = html.create('div')

                        h4.setAttribute("class", "small font-weight-bold text-left")
                        h4.innerHTML = desempenhoItem.CODPROD + " - " + desempenhoItem.PRODUTO

                        divColPerc.setAttribute("class", "col-auto")
                        divColPerc.innerHTML = desempenhoItem.DESEMPENHO + "%"

                        divColBarPerc.setAttribute('class','row align-items-center mb-3')

                        let corBarra = "bg-success"
                        if (desempenhoItem.DESEMPENHO < 100) {
                        corBarra = "bg-danger"
                        }

                        divBar.setAttribute("class", "progress-bar " + corBarra)
                        divBar.setAttribute("role", "progressbar")
                        divBar.setAttribute("style", "width:" + desempenhoItem.DESEMPENHO + "%")
                        divBar.setAttribute("aria-valuemin", "0")
                        divBar.setAttribute("aria-valuemax", "100")
                        
                        divColBar.setAttribute("class", "col p-0 progress")
                        if((index + 1) == desempenhoItens.length){
                          divContainer.setAttribute("class","last-elem")  
                        }else{
                          divContainer.setAttribute("class","divisor")
                        }
                        
                        divContainer.style = 'width: 96% !important'
                        divColBar.appendChild(divBar)
                        divColBarPerc.appendChild(divColPerc)
                        divColBarPerc.appendChild(divColBar)
                        divContainer.appendChild(h4)
                        divContainer.appendChild(divColBarPerc)

                        return divContainer.outerHTML
                    }).join('')
                    
                    newReqAjax('post','desempenhoorcamento','json',{"orcamento":orcamento.NUMERORCAMENTO}, 
                    (res)=>{
                        let desempenho = JSON.parse(res)

                        let div = html.create('div')
                        let h5 = html.create('h5')
                        let span = html.create('span')

                        h5.setAttribute('class','font-weight-bold mt-4')
                        h5.innerHTML = 'Desempenho do Orçamento: '

                        span.innerHTML = `${desempenho[0].DESEMPENHO}%`

                        h5.appendChild(span)
                        div.appendChild(h5)

                        Swal.fire({
                            html: `<div style='max-height: 35rem !important; overflow:auto;'>${result}</div><div>${div.outerHTML}</div>`, 
                            width: 'fit-container'
                        }) 
                    })
                })
            }
        })
      })
    })
  },
  (err)=>{
    let divDOMOrcamentos = html.get('#orcamentos')
    divDOMOrcamentos.replaceChildren()
    let col = document.createElement('div')
    col.setAttribute('class','col h-100 d-flex align-items-center justify-content-center flex-column text-center')
    let icon = document.createElement('i')
    icon.setAttribute('class','fa-solid fa-file-circle-question fa-8x mb-3')
    let h4 = document.createElement('h4')
    h4.setAttribute('class','h4')
    h4.innerHTML = 'Não há orcamentos para os ultimos 7 dias'

    col.appendChild(icon)
    col.appendChild(h4)
    divDOMOrcamentos.appendChild(col)
  })

  //Busca dados dos titulos em aberto do cliente
  newReqAjax('post','valoremabertoporcliente','json',{CodigoRCA},
    (inadimplencia)=>{
      let divDOMInadimplencia = html.get('#tableInadimplencia')
      divDOMInadimplencia.replaceChildren()
      inadimplencia.map((cliente,index)=>{
        let container = html.create('div')
        container.setAttribute('class','row justify-content-between align-items-center p-2')
          let colNomeCliente = html.create('div')
          colNomeCliente.setAttribute('class','col-auto d-flex flex-column')
            let smallCodCliente = html.create('small')
            smallCodCliente.innerText = `Codigo Cliente: ${cliente.CODCLI}`
            let spanNomeCliente = html.create('span')
            spanNomeCliente.innerText = `Cliente: ${cliente.CLIENTE}`
          let colValorInadimplencia = html.create('div')
          colValorInadimplencia.setAttribute('class','col-auto')
            let spanValorInadimplencia = html.create('span')
            spanValorInadimplencia.setAttribute('class','font-weight-bold')
            spanValorInadimplencia.innerText = `R$ ${cliente.VALORARECEBER.toLocaleString('pt-br')}`
      let hrDivisor = html.create('hr')
      hrDivisor.classList.add('my-1')

          colNomeCliente.appendChild(smallCodCliente)
          colNomeCliente.appendChild(spanNomeCliente)
        container.appendChild(colNomeCliente)
          colValorInadimplencia.appendChild(spanValorInadimplencia)
        container.appendChild(colValorInadimplencia)
      divDOMInadimplencia.appendChild(container)
      divDOMInadimplencia.appendChild(hrDivisor)
      })
  },
  (err)=>{
    let divDOMInadimplencia = html.get('#tableInadimplencia')
    divDOMInadimplencia.replaceChildren()
    let col = document.createElement('div')
    col.setAttribute('class','col h-100 d-flex align-items-center justify-content-center flex-column text-center')
    let icon = document.createElement('i')
    icon.setAttribute('class','fa-solid fa-award fa-8x mb-3')
    let h4 = document.createElement('h4')
    h4.setAttribute('class','h4')
    h4.innerHTML = 'Parabéns, todos os seus clientes estão em dia!'

    col.appendChild(icon)
    col.appendChild(h4)
    divDOMInadimplencia.appendChild(col)
  })

  newReqAjax('post','inativosprevisto','json',{CodigoRCA},
    (clientes)=>{
      let divDOMPrevisaoInativos = html.get('.clientes-inativos-prox-60-dias')
      divDOMPrevisaoInativos.replaceChildren()
      clientes.map((cliente,index)=>{
        let container = html.create('div')
        if((index + 1) == clientes.length){
          container.setAttribute('class','clickable')
        }else{
          container.setAttribute('class','border-bottom mb-2 clickable')
        }
          //Linha que contém os dados e auxilia na disposição deles em tela
          let containerRow = html.create('div')
          containerRow.setAttribute('class','row m-0 justify-content-between')
            //Primeira coluna da linha, serve para dividir o espaço na horizontal
            let rowColAuto = html.create('div')
            rowColAuto.setAttribute('class','col-auto p-0')
              //Primeira coluna, contem o small com o número de nota fiscal
              let colAutoColPrevisaoClientes = html.create('div')
              colAutoColPrevisaoClientes.setAttribute('class','col text-left')
                let colPrevisaoClientesSmall = html.create('small')
                colPrevisaoClientesSmall.innerHTML = `Código do Cliente: ${cliente.CODCLI}`
              //Segunda coluna, contem o nome do cliente
              let colAutoColCliente = html.create('div')
              colAutoColCliente.setAttribute('class','col text-left font-weight-bold m-0')
              colAutoColCliente.innerHTML = `Cliente: ${cliente.CLIENTE}`
              
              //Segunda coluna da linha, serve para dividir o espaço na horizontal. Foi utilizada classe flex para alinhar os itens no centro vertical
              let rowColAutoFlex = html.create('div')
              rowColAutoFlex.setAttribute('class','col-auto d-flex align-items-center')
              //H6 contendo o valor da devolução
              let colAutoFlexH6 = html.create('h6')
              colAutoFlexH6.setAttribute('class','font-weight-bold m-0')
              colAutoFlexH6.innerHTML = `Sem comprar a ${cliente.DIASSEMCOMPRA} dias`
  
        rowColAutoFlex.appendChild(colAutoFlexH6)
        colAutoColPrevisaoClientes.appendChild(colPrevisaoClientesSmall)
        rowColAuto.appendChild(colAutoColPrevisaoClientes)
        rowColAuto.appendChild(colAutoColCliente)
        containerRow.appendChild(rowColAuto)
        containerRow.appendChild(rowColAutoFlex)
        container.appendChild(containerRow)
        divDOMPrevisaoInativos.appendChild(container)
      })
    },
    (err)=>{
      let divDOMPrevisaoInativos = html.get('.clientes-inativos-prox-30-dias')
      divDOMPrevisaoInativos.replaceChildren()
      let col = document.createElement('div')
      col.setAttribute('class','col h-100 d-flex align-items-center justify-content-center flex-column text-center')
      let icon = document.createElement('i')
      icon.setAttribute('class','fa-regular fa-thumbs-up fa-8x mb-3')
      let h4 = document.createElement('h4')
      h4.setAttribute('class','h4')
      h4.innerHTML = 'Não há previsão de clientes inativos para os próximos 30 dias'
  
      col.appendChild(icon)
      col.appendChild(h4)
      divDOMPrevisaoInativos.appendChild(col)
    }
  ) 

  interval = refresh.setTimer(atualizaDados, 300000)
}


//se tentar entrar no index.html sem estar logado volta para tela login
window.addEventListener("DOMContentLoaded", function(event) {
  skeleton.generateSkeleton(html.get('#orcamentos'),3,['small','textH6','text'],['text'])
  skeleton.generateSkeleton(html.get('#tableInadimplencia'),4,['small','text'],['textH6'])
  skeleton.generateSkeleton(html.get('#devolucoesComerciais'),3,['small','textH6','text'],['textH6'])
  skeleton.generateSkeleton(html.get('#inativosPrevistos'),4,['small','text'],['textH6'])
  
  let nome = sessionStorage.getItem('nome');
  document.getElementById('nomeUsuario').innerHTML =  nome; 
  
  //Busca resultado dos orçamentos Ultimos 7 dias  
  html.get('.btn-consulta-orcamento').addEventListener('click', event=>{
    let orcamento = document.getElementById('inputOrcamento').value;
    let divProdutos = document.getElementById('desempenhoProdutos');
    let h4Desempenho = document.getElementById('h4DesempenhoOrcamento');

    if (orcamento) {
      newReqAjax('post','desempenhoitensorcamento','json',{ orcamento },
      (ret)=>{
        let desempenhoItens = JSON.parse(ret)

        divProdutos.replaceChildren();
        h4Desempenho.removeAttribute('hidden')
        
        desempenhoItens.map((elem,index)=>{

          let nomeProd = document.createElement('h4');
          let divResContainer = document.createElement('div')
          let percDesepempenho = document.createElement('div');
          let barContainer = document.createElement('div');
          let progressBar = document.createElement('div');


          nomeProd.setAttribute("class", "small font-weight-bold mr-2")
          nomeProd.innerHTML = elem.CODPROD + " - " + elem.PRODUTO

          percDesepempenho.setAttribute("class", "col-auto")
          percDesepempenho.innerHTML = elem.DESEMPENHO + "%"

          let corBarra = "bg-success"
          if (elem.DESEMPENHO < 100) {
            corBarra = "bg-danger"
          }

          progressBar.setAttribute("class", "progress-bar " + corBarra)
          progressBar.setAttribute("role", "progressbar")
          progressBar.setAttribute("style", "width:" + elem.DESEMPENHO + "%")
          progressBar.setAttribute("aria-valuemin", "0")
          progressBar.setAttribute("aria-valuemax", "100")

          barContainer.setAttribute("class", "col p-0 progress")

          if((index + 1) == desempenhoItens.length){
            divResContainer.setAttribute("class","row align-items-center mr-2 last-elem")  
          }else{
            divResContainer.setAttribute("class","row align-items-center pb-2 mb-2 mr-2 divisor")
          }

          barContainer.appendChild(progressBar)
          divResContainer.appendChild(percDesepempenho)
          divResContainer.appendChild(barContainer)
          divProdutos.appendChild(nomeProd)
          divProdutos.appendChild(divResContainer)
        }) 
      })
      newReqAjax('post','desempenhoorcamento','json',{ orcamento }, 
        (ret)=>{
          let desempenhoOrcamento = JSON.parse(ret)
          if (desempenhoOrcamento.length > 0) {
            document.getElementById('desempenhoOrcamento').innerHTML = desempenhoOrcamento[0].DESEMPENHO + "%"
          } else {
            divProdutos.replaceChildren();
            h4Desempenho.setAttribute('hidden', 'hidden')
            Swal.fire({
              icon: 'error',
              title: 'Oops... Algo deu errado!',
              html: 'Orçamento não Encontrado! <br> Verifique o numero e tente novamente.'
            })

            let col = document.createElement('div')
            col.setAttribute('class','col h-100 d-flex align-items-center justify-content-center flex-column text-center')
            let icon = document.createElement('i')
            icon.setAttribute('class','fa-solid fa-arrow-up-right-dots fa-8x mb-3')
            let h4 = document.createElement('h4')
            h4.setAttribute('class','h4')
            h4.innerHTML = 'Digite o número do orçamento para consultar seu desempenho'

            col.appendChild(icon)
            col.appendChild(h4)
            divProdutos.appendChild(col)
          }
        },
        (err)=>{
          divProdutos.replaceChildren();
          h4Desempenho.setAttribute('hidden', 'hidden')
          Swal.fire({
            icon: 'error',
            title: 'Oops... Algo deu errado!',
            html: 'O campo Orçamento não pode estar em Branco. <br> Digite o Numero do Orcamento e pesquise novamente.'
          })
        }
      )
    }
  })

  html.get('.btn-consulta-cliente').addEventListener('click',event=>{
    let inputCliente = html.get('#inputCliente')

    if(inputCliente.value){
      newReqAjax('post','orcavenda','json',{'codcli':inputCliente.value},
        (orcamentos)=>{
          let divDOMOrcamentosCliente = html.get('#orcamentos-cliente')
          let h4DataUltimaCompra = html.get('#h4DataUltimaCompra')
          let dataUltimaCompra = html.get('#dataUltimaCompra')

          divDOMOrcamentosCliente.replaceChildren()
          
          orcamentos.map((orcamento, index)=>{
            let container = html.create('div')
            if((index + 1) == orcamentos.length){
              container.setAttribute('class','clickable')
            }else{
              container.setAttribute('class','border-bottom mb-2 clickable')
            }
            //Linha que contém os dados e auxilia na disposição deles em tela
            let containerRow = html.create('div')
            containerRow.setAttribute('class','row m-0 justify-content-between')
            //Primeira coluna da linha, serve para dividir o espaço na horizontal
            let rowColAuto = html.create('div')
            rowColAuto.setAttribute('class','col-auto p-0')
              //Primeira coluna, contem o small com o número de nota fiscal
              let colAutoColOrcamento = html.create('div')
              colAutoColOrcamento.setAttribute('class','col')
                let colOrcamentoSmall = html.create('small')
                colOrcamentoSmall.innerHTML = `Orçamento: ${orcamento.NUMEROORCAMENTO}`
                let colRcaSmall = html.create('small')
                colRcaSmall.setAttribute('class','col-auto')
                colRcaSmall.innerHTML = `RCA: ${orcamento.RCA}`
              //Segunda coluna, contem o nome do cliente
              let colAutoColCliente = html.create('div')
              colAutoColCliente.setAttribute('class','col font-weight-bold m-0')
              colAutoColCliente.innerHTML = `Cliente: ${orcamento.CLIENTE}`
              //Terceira coluna, contem a data e hora de emissão do orçamento
              let rowColEmissao = html.create('div')
              rowColEmissao.setAttribute('class','row mb-2 pad-col')
                let colAutoDataRowEmissao = html.create('div')
                colAutoDataRowEmissao.setAttribute('class','col-auto')
                colAutoDataRowEmissao.innerHTML = `Data Emissão: ${orcamento.DATAORCAMENTO}`
                let colAutoHoraRowEmissao = html.create('div')
                colAutoHoraRowEmissao.setAttribute('class','col-auto')
                colAutoHoraRowEmissao.innerHTML = `Hora: ${orcamento.HORA}`
            //Segunda coluna da linha, serve para dividir o espaço na horizontal. Foi utilizada classe flex para alinhar os itens no centro vertical
            let rowColAutoFlex = html.create('div')
            rowColAutoFlex.setAttribute('class','col-auto d-flex align-items-center')
              //H6 contendo o valor da devolução
              let colAutoFlexH6 = html.create('h6')
              colAutoFlexH6.setAttribute('class','font-weight-bold m-0')
              colAutoFlexH6.innerHTML = `R$ ${orcamento.VALORORCA}`

            rowColAutoFlex.appendChild(colAutoFlexH6)
            colAutoColOrcamento.appendChild(colOrcamentoSmall)
            colAutoColOrcamento.appendChild(colRcaSmall)
            rowColAuto.appendChild(colAutoColOrcamento)
            rowColAuto.appendChild(colAutoColCliente)
            rowColEmissao.appendChild(colAutoDataRowEmissao)
            rowColEmissao.appendChild(colAutoHoraRowEmissao)
            rowColAuto.appendChild(rowColEmissao)
            containerRow.appendChild(rowColAuto)
            containerRow.appendChild(rowColAutoFlex)
            container.appendChild(containerRow)
            divDOMOrcamentosCliente.appendChild(container)
          })

          h4DataUltimaCompra.removeAttribute('hidden')
          dataUltimaCompra.innerHTML = orcamentos[0].DATAULTIMACOMPRA
        },
        (err)=>{
          Swal.fire({
            icon:'info',
            title:'Não há orçamentos para esse Cliente',
            html:'Nenhum orçamento foi localizado nos ultimos 30 dias para esse cliente',
            timerProgressBar: true,
            timer: 20000,
            didDestroy: ()=>{
              let divDOMOrcamentosCliente = html.get('#orcamentos-cliente')
              let h4DataUltimaCompra = html.get('#h4DataUltimaCompra')

              divDOMOrcamentosCliente.replaceChildren()

              let col = document.createElement('div')
              col.setAttribute('class','col h-100 d-flex align-items-center justify-content-center flex-column text-center')
              let icon = document.createElement('i')
              icon.setAttribute('class','fa-solid fa-person-chalkboard fa-8x mb-3')
              let h4 = document.createElement('h4')
              h4.setAttribute('class','h4')
              h4.innerHTML = 'Digite o código do cliente para consultar seus orçamentos'

              col.appendChild(icon)
              col.appendChild(h4)
              divDOMOrcamentosCliente.appendChild(col)

              h4DataUltimaCompra.setAttribute('hidden', 'hidden')
            }
          })
        }
      )
    }else{
      Swal.fire({
        icon:'warning',
        title: 'Código inválido',
        text:'Digite um código de cliente válido para realizar a consulta'
      })
    }
  })

  html.get('#filtroRca').addEventListener('keyup',e=>{
    filtro.filtrar(codRcas,html.get('#rcas'))
  })

  html.get('#mesComissao').addEventListener('change',e=>{
    let comissao = html.get('.vlComissao')
    skeleton.generateSkeleton(comissao,1,['text'])
    newReqAjax('post', 'comissao', 'json', {'codigorca': getReqRCA(tipoPerfil), 'anoMes': e.currentTarget.value},
    (comissaoRCA) =>{
      skeleton.removeSkeleton(comissao,true)
      comissao.innerHTML = `R$ ${comissaoRCA.COMISSAO}`
    })
  });
})

