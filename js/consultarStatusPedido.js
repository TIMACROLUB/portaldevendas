const renderOrder = ({NUMEROPEDIDO, NOMECLIENTE,ETAPAATUAL}) => {
    const card = html.create('div','card card-body');
    const row = html.create('div', 'row');
    const colOrderData = html.create('div', 'col');
      const h5NumeroPedido = html.create('small','',`Numero do pedido: ${NUMEROPEDIDO}`);
      const h5NomeCliente = html.create('p','',`Cliente: ${NOMECLIENTE}`);
    const colStatus = html.create('div','col d-flex align-items-center justify-content-end text-right');
      const h3Status = html.create('h3', '', ETAPAATUAL);
  
      colOrderData.appendChild(h5NumeroPedido);
      colOrderData.appendChild(h5NomeCliente);
      colStatus.appendChild(h3Status)
      row.appendChild(colOrderData);
      row.appendChild(colStatus);
    card.appendChild(row);
  
    return card;
  }

  const serraParkStatusLabel = {
    99: 'Inativo',
    98: 'Finalizado',
    97: 'Cancelado',
    96: 'Embarcado',
    95: 'Finalizado pelo Operador',

    0: 'Enviar',
    1: 'Em Separacao',
    2: 'Enviado Cancelamento',

    9: 'Aguardando Retorno',

    10: 'Retorno Ok',
    11: 'Retorno com Problema',
    12: 'Cancelado com Problema',
    13: 'Pedido Rejeitado',

    20: 'Aguardando NFe',
    21: 'Nfe Enviada',
    22: 'Erro ao enviar NFe',
    23: 'Sem Danfe',
    24: 'Sem PDF Boleto',
    25: 'Sem Produto',
    26: 'Sem Etiqueta',
    27: 'Erro Juncao PDF'
  };

  const getStatusFromGestao = (numeroPedido) => {
    const divPedidos = html.get('#pedidos');
    skeleton.generateSkeleton(divPedidos,1,['text']);
    newReqAjax('get', `consultarstatuspedidoserrapark/${numeroPedido}`, '','',
      (pedido)=>{
        if(pedido && pedido.dados.length === 0){
          getStatusFromWinthor(numeroPedido);
        }

        const dados = pedido.dados[0];
        dados.ETAPAATUAL = serraParkStatusLabel[dados.ETAPAATUAL];

        skeleton.removeSkeleton(divPedidos, true);
        const content = renderOrder(dados);
        divPedidos.appendChild(content);
      },
      (err)=>{
        getStatusFromWinthor(numeroPedido);
      }
    );
  }

  const getStatusFromWinthor = (numeroPedido) => {
    const divPedidos = html.get('#pedidos');
    skeleton.generateSkeleton(divPedidos,1,['text']);
    newReqAjax('get',`consultarstatuspedido/${numeroPedido}`,'','',
    (pedido)=>{
      skeleton.removeSkeleton(divPedidos, true);
      const content = renderOrder(pedido);
      divPedidos.appendChild(content);
    });
  }

  html.get('#btn-consulta-pedido').addEventListener('click', e=> {
    const numeroPedido = html.get('#input-order').value;
    getStatusFromGestao(numeroPedido);
  })
  