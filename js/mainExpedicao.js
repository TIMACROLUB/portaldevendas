const skeleton = new Skeleton
function atualizaDados(){
    const horaCorte = html.get('.horaCorte').value, filial = html.get('#filial').value
    
    newReqAjax('post','expedicao','json',{'horaCorte':horaCorte, 'filial': filial},
    (res)=>{
        skeleton.removeSkeleton()
        html.get('.aSeparar').innerHTML = res[4].PEDIDOS_A_SEPARAR ? res[4].PEDIDOS_A_SEPARAR : 0
        html.get('.aFaturar').innerHTML = res[5].PEDIDOS_A_FATURAR ? res[5].PEDIDOS_A_FATURAR : 0 
        html.get('.metaMes').innerHTML = res[6].META_MES ? res[6].META_MES : 0 
        html.get('.metaOntem').innerHTML = res[0].META_ONTEM ? res[0].META_ONTEM : 0

        let tableBodyConferencia = html.get('.tableConferencia')
        tableBodyConferencia.replaceChildren()
        res[2].slice(0,7).map((conferente,index)=>{
            let tableRowNome = html.create('tr')
            let tableDataNome = html.create('td')
            tableDataNome.classList.add('text-left')
            tableDataNome.innerHTML = conferente.CONFERENTE

            let tableDataQt = html.create('td')
            tableDataQt.classList.add('text-center')
            tableDataQt.innerHTML = conferente.QTITENS

            
            tableRowNome.appendChild(tableDataNome)
            tableRowNome.appendChild(tableDataQt)
            tableBodyConferencia.appendChild(tableRowNome)
        })

        let tableBodySeparacao = html.get('.tableSeparacao')
        tableBodySeparacao.replaceChildren()
        res[1].slice(0,7).map((separador,index)=>{
            let tableRowNome = html.create('tr')
            let tableDataNome = html.create('td')
            tableDataNome.classList.add('text-left')
            tableDataNome.innerHTML = separador.SEPARADOR

            let tableDataQt = html.create('td')
            tableDataQt.classList.add('text-center')
            tableDataQt.innerHTML = separador.QTITENS

            
            tableRowNome.appendChild(tableDataNome)
            tableRowNome.appendChild(tableDataQt)
            tableBodySeparacao.appendChild(tableRowNome)
        })


        html.get('.percNaoDespachado').innerHTML = res[3].PERCNAODESPACHADA

        GeraGrafo(res[3].QTNOTAS,res[3].QTMANIFESTOS,"Notas Despachadas","Notas Não Despachadas")
    })
    
}

document.addEventListener('DOMContentLoaded',(event)=>{
    atualizaDados()
    interval = refresh.setTimer(atualizaDados, 300000)
})

const btnHoraCorte = html.get('.horaCorte'), inputFilial = html.get('#filial')

btnHoraCorte.onchange = (event)=>{
    html.get('.fraseMeta').innerHTML = `Enviar para nossos clientes no mesmo dia todos os pedidos liberados até as ${btnHoraCorte.value} horas`
    skeleton.activeSkeleton()
    atualizaDados()
}

inputFilial.addEventListener('change',e=>{
    const rankingWMS = html.get('#rowRanking')
    if(e.currentTarget.value === 'MG' && rankingWMS.style.display !== 'none'){
        rankingWMS.style.display = 'none'
    }else if(rankingWMS.style.display === 'none'){
        rankingWMS.style.display = 'flex'
    }

    skeleton.activeSkeleton()
    atualizaDados()
})




