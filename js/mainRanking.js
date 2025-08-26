let periodoPalhetas, periodoGeral;
const skeleton = new Skeleton;
function rankingPalhetas(periodo){
    const rankingContainer = html.get('.content.ranking-palhetas')
    rankingContainer.replaceChildren()
    skeleton.generateSkeleton(html.get('#rankingPalhetas'),5,['small','text'],['textH6'],['circle'])
    if(periodo == 'M'){
        newReqAjax('get','percentualmetamensalpalhetas',undefined,'',
        (res)=>{
                rankingContainer.replaceChildren()
                res.map((data,index)=>{
                    const row = html.create('div')
                    row.setAttribute('class','row rounded shadow-sm py-2 my-2 align-items-center justify-content-center ranking-member')
                    if(index == 0){
                        html.addClass(row,'first')
                    }else if(index == 1){
                        html.addClass(row,'second')
                    }else if(index == 2){
                        html.addClass(row,'third')
                    }
                        const colId = html.create('div')
                        colId.setAttribute('class','col-auto')
                            const spanId = html.create('span')
                            spanId.setAttribute('class','font-weight-bolder')
                            spanId.innerHTML = index + 1
                        const colAvatar = html.create('div')
                        colAvatar.setAttribute('class','col-auto')
                            const imgAvatar = html.create('img')
                            imgAvatar.setAttribute('class','ranking-img')
                            imgAvatar.src = data.FOTO != null ? `${url}/img/${data.FOTO}` : `img/undraw_profile_2.svg`
                        const colDadosVendedor = html.create('div')
                        colDadosVendedor.setAttribute('class','col')
                            const smallRca = html.create('small')
                            smallRca.innerHTML = `Rca: ${data.CODIGORCA}`
                            const h6Vendedor = html.create('h6')
                            h6Vendedor.setAttribute('class','font-weight-bolder media-h6')
                            h6Vendedor.innerHTML = data.NOME
                        const colRealizado = html.create('div')
                        colRealizado.setAttribute('class','col-auto')
                            h5Realizado = html.create('h5')
                            h5Realizado.setAttribute('class','font-weight-bolder m-0 media-h5')
                            h5Realizado.innerHTML = `${data.PERCENTUALMETAHOJE} %`
                        const colIconeResultado = html.create('div')
                        colIconeResultado.setAttribute('class','col-auto')
                            const iconeResultado = html.create('i')
                            if(parseInt(data.PERCENTUALMETAHOJE) < 80){
                                iconeResultado.setAttribute('class','fa-solid fa-circle-xmark fa-2x text-danger')
                            } else if (parseInt(data.PERCENTUALMETAHOJE) < 100){
                                iconeResultado.style.color = '#f3820a'
                                iconeResultado.setAttribute('class','fa-solid fa-circle-exclamation fa-2x')
                            } else if (parseInt(data.PERCENTUALMETAHOJE) >= 100){
                                iconeResultado.setAttribute('class','fa-solid fa-circle-check fa-2x text-success')
                            }
    
                        colIconeResultado.appendChild(iconeResultado)
                        colRealizado.appendChild(h5Realizado)
                        colDadosVendedor.appendChild(smallRca)
                        colDadosVendedor.appendChild(h6Vendedor)
                        colAvatar.appendChild(imgAvatar)
                        colId.appendChild(spanId)
                    row.appendChild(colId)
                    row.appendChild(colAvatar)
                    row.appendChild(colDadosVendedor)
                    row.appendChild(colRealizado)
                    row.appendChild(colIconeResultado)
                rankingContainer.appendChild(row)
                })
        })
    }else{
        newReqAjax('get','percentualmetahojepalhetas',undefined,'',
        (res)=>{
                rankingContainer.replaceChildren()
                res.map((data,index)=>{
                    const row = html.create('div')
                    row.setAttribute('class','row rounded shadow-sm py-2 my-2 align-items-center justify-content-center ranking-member')
                    if(index == 0){
                        html.addClass(row,'first')
                    }else if(index == 1){
                        html.addClass(row,'second')
                    }else if(index == 2){
                        html.addClass(row,'third')
                    }
                        const colId = html.create('div')
                        colId.setAttribute('class','col-auto')
                            const spanId = html.create('span')
                            spanId.setAttribute('class','font-weight-bolder')
                            spanId.innerHTML = index + 1
                        const colAvatar = html.create('div')
                        colAvatar.setAttribute('class','col-auto')
                            const imgAvatar = html.create('img')
                            imgAvatar.setAttribute('class','ranking-img')
                            imgAvatar.src = data.FOTO != null ? `${url}/img/${data.FOTO}` : `img/undraw_profile_2.svg`
                        const colDadosVendedor = html.create('div')
                        colDadosVendedor.setAttribute('class','col')
                            const smallRca = html.create('small')
                            smallRca.innerHTML = `Rca: ${data.CODIGORCA}`
                            const h6Vendedor = html.create('h6')
                            h6Vendedor.setAttribute('class','font-weight-bolder media-h6')
                            h6Vendedor.innerHTML = data.NOME
                        const colRealizado = html.create('div')
                        colRealizado.setAttribute('class','col-auto')
                            h5Realizado = html.create('h5')
                            h5Realizado.setAttribute('class','font-weight-bolder m-0 media-h5')
                            h5Realizado.innerHTML = `${data.PERCENTUALMETAHOJE} %`
                        const colIconeResultado = html.create('div')
                        colIconeResultado.setAttribute('class','col-auto')
                            const iconeResultado = html.create('i')
                            if(parseInt(data.PERCENTUALMETAHOJE) < 80){
                                iconeResultado.setAttribute('class','fa-solid fa-circle-xmark fa-2x text-danger')
                            } else if (parseInt(data.PERCENTUALMETAHOJE) < 100){
                                iconeResultado.style.color = '#f3820a'
                                iconeResultado.setAttribute('class','fa-solid fa-circle-exclamation fa-2x')
                            } else if (parseInt(data.PERCENTUALMETAHOJE) >= 100){
                                iconeResultado.setAttribute('class','fa-solid fa-circle-check fa-2x text-success')
                            }
    
                        colIconeResultado.appendChild(iconeResultado)
                        colRealizado.appendChild(h5Realizado)
                        colDadosVendedor.appendChild(smallRca)
                        colDadosVendedor.appendChild(h6Vendedor)
                        colAvatar.appendChild(imgAvatar)
                        colId.appendChild(spanId)
                    row.appendChild(colId)
                    row.appendChild(colAvatar)
                    row.appendChild(colDadosVendedor)
                    row.appendChild(colRealizado)
                    row.appendChild(colIconeResultado)
                rankingContainer.appendChild(row)
                })
        })
    }
}

function rankingGeral(periodo){
    const rankingContainer = html.get('.content.ranking-geral')
    rankingContainer.replaceChildren()
    skeleton.generateSkeleton(html.get('#rankingGeral'),5,['small','text'],['textH6'],['circle'])
    if(periodo == 'M'){
        newReqAjax('get','percentualmetamensaltodos',undefined,'',
        (res)=>{
            rankingContainer.replaceChildren()
            res.map((data,index)=>{
                const row = html.create('div')
                row.setAttribute('class','row rounded shadow-sm py-2 my-2 align-items-center justify-content-center ranking-member')
                if(index == 0){
                    html.addClass(row,'first')
                }else if(index == 1){
                    html.addClass(row,'second')
                }else if(index == 2){
                    html.addClass(row,'third')
                }
                    const colId = html.create('div')
                    colId.setAttribute('class','col-auto')
                        const spanId = html.create('span')
                        spanId.setAttribute('class','font-weight-bolder')
                        spanId.innerHTML = index + 1
                    const colAvatar = html.create('div')
                    colAvatar.setAttribute('class','col-auto')
                        const imgAvatar = html.create('img')
                        imgAvatar.setAttribute('class','ranking-img')
                        imgAvatar.src = data.FOTO != null ? `${url}/img/${data.FOTO}` : `img/undraw_profile_2.svg`
                    const colDadosVendedor = html.create('div')
                    colDadosVendedor.setAttribute('class','col')
                        const smallRca = html.create('small')
                        smallRca.innerHTML = `Rca: ${data.CODIGORCA}`
                        const h6Vendedor = html.create('h6')
                        h6Vendedor.setAttribute('class','font-weight-bolder media-h6')
                        h6Vendedor.innerHTML = data.NOME
                    const colRealizado = html.create('div')
                    colRealizado.setAttribute('class','col-auto')
                        h5Realizado = html.create('h5')
                        h5Realizado.setAttribute('class','font-weight-bolder m-0 media-h5')
                        h5Realizado.innerHTML = `${data.PERCENTUALMETAHOJE} %`
                    const colIconeResultado = html.create('div')
                    colIconeResultado.setAttribute('class','col-auto')
                        const iconeResultado = html.create('i')
                        if(parseInt(data.PERCENTUALMETAHOJE) < 80){
                            iconeResultado.setAttribute('class','fa-solid fa-circle-xmark fa-2x text-danger')
                        } else if (parseInt(data.PERCENTUALMETAHOJE) < 100){
                            iconeResultado.style.color = '#f3820a'
                            iconeResultado.setAttribute('class','fa-solid fa-circle-exclamation fa-2x')
                        } else if (parseInt(data.PERCENTUALMETAHOJE) >= 100){
                            iconeResultado.setAttribute('class','fa-solid fa-circle-check fa-2x text-success')
                        }

                    colIconeResultado.appendChild(iconeResultado)
                    colRealizado.appendChild(h5Realizado)
                    colDadosVendedor.appendChild(smallRca)
                    colDadosVendedor.appendChild(h6Vendedor)
                    colAvatar.appendChild(imgAvatar)
                    colId.appendChild(spanId)
                row.appendChild(colId)
                row.appendChild(colAvatar)
                row.appendChild(colDadosVendedor)
                row.appendChild(colRealizado)
                row.appendChild(colIconeResultado)
            rankingContainer.appendChild(row)
            })
        },
        (err)=>{
            console.log(err)
        }
        )
    }else{
        newReqAjax('get','percentualmetahojetodos',undefined,'',
        (res)=>{
            rankingContainer.replaceChildren()
            res.map((data,index)=>{
                const row = html.create('div')
                row.setAttribute('class','row rounded shadow-sm py-2 my-2 align-items-center justify-content-center ranking-member')
                if(index == 0){
                    html.addClass(row,'first')
                }else if(index == 1){
                    html.addClass(row,'second')
                }else if(index == 2){
                    html.addClass(row,'third')
                }
                    const colId = html.create('div')
                    colId.setAttribute('class','col-auto')
                        const spanId = html.create('span')
                        spanId.setAttribute('class','font-weight-bolder')
                        spanId.innerHTML = index + 1
                    const colAvatar = html.create('div')
                    colAvatar.setAttribute('class','col-auto')
                        const imgAvatar = html.create('img')
                        imgAvatar.setAttribute('class','ranking-img')
                        imgAvatar.src = data.FOTO != null ? `${url}/img/${data.FOTO}` : `img/undraw_profile_2.svg`
                    const colDadosVendedor = html.create('div')
                    colDadosVendedor.setAttribute('class','col')
                        const smallRca = html.create('small')
                        smallRca.innerHTML = `Rca: ${data.CODIGORCA}`
                        const h6Vendedor = html.create('h6')
                        h6Vendedor.setAttribute('class','font-weight-bolder media-h6')
                        h6Vendedor.innerHTML = data.NOME
                    const colRealizado = html.create('div')
                    colRealizado.setAttribute('class','col-auto')
                        h5Realizado = html.create('h5')
                        h5Realizado.setAttribute('class','font-weight-bolder m-0 media-h5')
                        h5Realizado.innerHTML = `${data.PERCENTUALMETAHOJE} %`
                    const colIconeResultado = html.create('div')
                    colIconeResultado.setAttribute('class','col-auto')
                        const iconeResultado = html.create('i')
                        if(parseInt(data.PERCENTUALMETAHOJE) < 80){
                            iconeResultado.setAttribute('class','fa-solid fa-circle-xmark fa-2x text-danger')
                        } else if (parseInt(data.PERCENTUALMETAHOJE) < 100){
                            iconeResultado.style.color = '#f3820a'
                            iconeResultado.setAttribute('class','fa-solid fa-circle-exclamation fa-2x')
                        } else if (parseInt(data.PERCENTUALMETAHOJE) >= 100){
                            iconeResultado.setAttribute('class','fa-solid fa-circle-check fa-2x text-success')
                        }

                    colIconeResultado.appendChild(iconeResultado)
                    colRealizado.appendChild(h5Realizado)
                    colDadosVendedor.appendChild(smallRca)
                    colDadosVendedor.appendChild(h6Vendedor)
                    colAvatar.appendChild(imgAvatar)
                    colId.appendChild(spanId)
                row.appendChild(colId)
                row.appendChild(colAvatar)
                row.appendChild(colDadosVendedor)
                row.appendChild(colRealizado)
                row.appendChild(colIconeResultado)
            rankingContainer.appendChild(row)
            })
        },
        (err)=>{
            console.log(err)
        }
        )
    }
}

function atualizaRanking(){
    
    rankingGeral(periodoGeral)
    rankingPalhetas(periodoPalhetas)
    
    newReqAjax('get','percentualmetageralmes',undefined,'',
    (suc)=>{
        const metaAcumulado = html.get('.metaMes ~ .skeleton-text')
        setStatusColor(metaAcumulado, 100, suc.percentualacumulado.PERCENTUALMETA)
        skeleton.removeSkeleton(metaAcumulado)
        metaAcumulado.innerText = `${suc.percentualacumulado.PERCENTUALMETA} %`

        const metaHoje = html.get('.metaDia ~ .skeleton-text')
        skeleton.removeSkeleton(metaHoje)
        setStatusColor(metaHoje, 100, suc.percentualhoje.PERCENTUALMETA)
        metaHoje.innerText = `${suc.percentualhoje.PERCENTUALMETA} %`

        if(suc.percentualacumulado.PERCENTUALMETA >= 100 || suc.percentualhoje.PERCENTUALMETA >= 100) {
            document.getElementById('bell').play();

            if (Notification.permission === "granted") {
                new Notification("🎉 Meta atingida!", {
                    body: `O vendedor alcançou ${suc.percentualacumulado.PERCENTUALMETA}% da meta geral ou ${suc.percentualhoje.PERCENTUALMETA}% da meta do dia.`,
                    icon: "icone.png" // opcional
                });
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        new Notification("🎉 Meta atingida!", {
                            body: `O vendedor alcançou ${suc.percentualacumulado.PERCENTUALMETA}% da meta geral ou ${suc.percentualhoje.PERCENTUALMETA}% da meta do dia.`,
                            icon: "icone.png"
                        });
                    }
                });
            }
        }

    })

    newReqAjax('get','prazomedio',undefined,'',
    (suc)=>{
        const prazoMedioHoje = html.get('.prazopagamentodiario ~ .skeleton-text')
        skeleton.removeSkeleton(prazoMedioHoje)
        prazoMedioHoje.innerHTML = `${suc.PRAZOMEDIOHOJE}`
        setStatusColor(prazoMedioHoje,suc.PRAZOMEDIOHOJE,35)
        const prazoMedioAcumulado = html.get('.prazopagamentoacumulado ~ .skeleton-text')
        skeleton.removeSkeleton(prazoMedioAcumulado)
        prazoMedioAcumulado.innerHTML = `${suc.PRAZOMEDIOACUMULADO}`
        setStatusColor(prazoMedioAcumulado, suc.PRAZOMEDIOACUMULADO, 35)
    })

    newReqAjax('get','autogestaogeral',undefined, '',
    (suc)=>{
        const autogestao = {mes: suc.MARGEMMES, dia: suc.MARGEMDIA}
        const autoGestaoDia = html.get('.autogestaodiario ~ .skeleton-text')
        skeleton.removeSkeleton(autoGestaoDia)
        autoGestaoDia.innerHTML = `${autogestao.dia} %`
        setStatusColor(autoGestaoDia, 100, autogestao.dia)

        const autoGestaoMes = html.get('.autogestaoacumulado ~ .skeleton-text')
        skeleton.removeSkeleton(autoGestaoMes)
        autoGestaoMes.innerHTML = `${autogestao.mes} %`
        setStatusColor(autoGestaoMes, 100, autogestao.mes)
    })
}

window.addEventListener('DOMContentLoaded',event =>{
    
    html.get('.switch-mode.ranking-palhetas').addEventListener('click',e=>{
        periodoPalhetas = switchOption(html.get('.switch-mode.ranking-palhetas'))
        rankingPalhetas(periodoPalhetas)
    })

    html.get('.switch-mode.ranking-geral').addEventListener('click',e=>{
        periodoGeral = switchOption(html.get('.switch-mode.ranking-geral'))
        rankingGeral(periodoGeral);
    })

    skeleton.activeSkeleton()
    skeleton.generateSkeleton(html.get('#rankingGeral'),5,['small','text'],['textH6'],['circle'])
    skeleton.generateSkeleton(html.get('#rankingPalhetas'),5,['small','text'],['textH6'],['circle'])
    atualizaRanking()
    interval = refresh.setTimer(atualizaRanking, 300000)
})