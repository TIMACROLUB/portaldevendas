document.addEventListener("DOMContentLoaded", function(event) {
    //Habilita o Tooltip na página
    $('[data-toggle="tooltip"]').tooltip()

    let codigoComprador = sessionStorage.getItem("rca")
    let gridCompradores = document.getElementById('gridCompradores')

    function atualizaDados(){
        newReqAjax('post','compras','json',{codigoComprador},
        (ret)=>{
            let res = JSON.parse(ret)
            let compradores = res
            
            gridCompradores.setAttribute('class','row text-left')
            let totalGerencialZero = 0
            let totalAvaria = 0
            let totalBloqueado = 0
            let totalIndisponivel = 0 
            
            compradores.map((comprador,index)=>{
                let temp = comprador.PRODUTOSGERENCIALZERO
                totalGerencialZero = temp + totalGerencialZero

                temp = comprador.PRODUTOSAVARIA
                totalAvaria = temp + totalAvaria

                temp = comprador.PRODUTOSBLOQUEADOS
                totalBloqueado = temp + totalBloqueado

                temp = comprador.PRODUTOSINDISPONIVEIS
                totalIndisponivel = temp + totalIndisponivel
            })

            let dados = {
                PRODUTOSGERENCIALZERO : totalGerencialZero, 
                PRODUTOSAVARIA: totalAvaria,
                PRODUTOSBLOQUEADOS: totalBloqueado,
                PRODUTOSINDISPONIVEIS: totalIndisponivel
            }
            preencheDadosComprador(dados)

            //Preenche a Tabela com os dados para cada comprador
            let tbCompradores = document .getElementById('tbCompradores')
            tbCompradores.replaceChildren()
            compradores.filter((comprador)=>{
                    let tableRow = document.createElement('tr')
                    let tableHead = document.createElement('th')
                    tableHead.setAttribute('scope','row')
                    tableHead.setAttribute('class','text-left')
                    tableHead.innerHTML = `${comprador.CODIGOCOMPRADOR} - ${comprador.COMPRADOR}`
                    let tableDataSemEstoque = document.createElement('td')
                    tableDataSemEstoque.innerHTML = comprador.PRODUTOSGERENCIALZERO
                    let tableDataAvaria = document.createElement('td')
                    tableDataAvaria.innerHTML = comprador.PRODUTOSAVARIA
                    let tableDataBloqueados = document.createElement('td')
                    tableDataBloqueados.innerHTML = comprador.PRODUTOSBLOQUEADOS
                    let tableDataIndisponivel = document.createElement('td')
                    tableDataIndisponivel.innerHTML = comprador.PRODUTOSINDISPONIVEIS

                    tableRow.appendChild(tableHead)
                    tableRow.appendChild(tableDataSemEstoque)
                    tableRow.appendChild(tableDataAvaria)
                    tableRow.appendChild(tableDataBloqueados)
                    tableRow.appendChild(tableDataIndisponivel)
                    tbCompradores.appendChild(tableRow)
            })
        })
    }

    atualizaDados()
    interval = refresh.setTimer(atualizaDados, 300000)
})
    
//Função que preenche os dados totalizados na página (Todos os compradores)
function preencheDadosComprador(dados){
    document.getElementById('gerencialZerado').innerHTML = dados.PRODUTOSGERENCIALZERO;
    document.getElementById('avaria').innerHTML = dados.PRODUTOSAVARIA;
    document.getElementById('bloqueados').innerHTML = dados.PRODUTOSBLOQUEADOS;
    document.getElementById('indisponivelVenda').innerHTML = dados.PRODUTOSINDISPONIVEIS

    if(dados.PRODUTOSGERENCIALZERO >= 0 && dados.PRODUTOSGERENCIALZERO < 41){
        document.getElementById('cardGerencial').setAttribute('class','card border-left-success')      
    }else if(dados.PRODUTOSGERENCIALZERO < 45){
        document.getElementById('cardGerencial').setAttribute('class','card border-left-warning')      
    }else{
        document.getElementById('cardGerencial').setAttribute('class','card border-left-danger')      
    }
    
    if(dados.PRODUTOSAVARIA >= 0 && dados.PRODUTOSAVARIA < 41){
        document.getElementById('cardAvaria').setAttribute('class','card border-left-success')      
    }else if(dados.PRODUTOSAVARIA < 45){
        document.getElementById('cardAvaria').setAttribute('class','card border-left-warning')      
    }else{
        document.getElementById('cardAvaria').setAttribute('class','card border-left-danger')      
    }

    if(dados.PRODUTOSINDISPONIVEIS >= 0 && dados.PRODUTOSINDISPONIVEIS < 41){
        document.getElementById('cardIndisponivel').setAttribute('class','card border-left-success')      
    }else if(dados.PRODUTOSINDISPONIVEIS < 45){
        document.getElementById('cardIndisponivel').setAttribute('class','card border-left-warning')      
    }else{
        document.getElementById('cardIndisponivel').setAttribute('class','card border-left-danger')      
    }

    if(dados.PRODUTOSBLOQUEADOS >= 0 && dados.PRODUTOSBLOQUEADOS < 41){
        document.getElementById('cardBloqueados').setAttribute('class','card border-left-success')      
    }else if(dados.PRODUTOSBLOQUEADOS < 45){
        document.getElementById('cardBloqueados').setAttribute('class','card border-left-warning')      
    }else{
        document.getElementById('cardBloqueados').setAttribute('class','card border-left-danger')      
    }
}