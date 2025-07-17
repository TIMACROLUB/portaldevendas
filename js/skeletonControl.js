class Skeleton {
    constructor(){
        this.tipo = {
            small: 'small',
            icon: 'i',
            text: 'span',
            textH6: 'h6', 
            circle: 'div'
        }
    }

    generateSkeleton(elementoPai, quantidade, elementosLinha, ...elementosColuna){
        elementoPai.replaceChildren()
        for(let i = 0; i < quantidade; i++){
            let linhas = [], colunas = []
                elementosLinha.map(elem=>{
                    const linha = html.create(this.tipo[elem],`skeleton-${elem} skeleton`)
                    linhas.push(linha)
                }) 
                
                if(elementosColuna.length === 0) {
                    elementoPai.append(...linhas)
                }else {
                    elementosColuna.map(elem=>{
                        const coluna = html.create(this.tipo[elem],`skeleton-${elem} skeleton m-0 mx-2`)
                        colunas.push(coluna)
                    })
    
                    const skeletonRow = html.create('div','skeleton-loader row align-items-center px-3')
                    const skeletonFirstCol = html.create('div','col')
                    const skeletonSecondCol = html.create('div','col d-flex justify-content-end align-items-center')
    
                        skeletonFirstCol.append(...linhas)
                    skeletonRow.appendChild(skeletonFirstCol)
                        skeletonSecondCol.append(...colunas)
                    skeletonRow.appendChild(skeletonSecondCol)
                    elementoPai.appendChild(skeletonRow)
                }
            if(i != (quantidade - 1)){
                const hr = html.create('hr','my-3')
                elementoPai.appendChild(hr)
            }
        }
    }

    activeSkeleton(){
        const elems = Array.from(html.getAll('[class*="skeleton"]'))
        elems.map(elem=>{
            elem.replaceChildren()
            html.addClass(elem,'skeleton')
        })
    }

    removeSkeleton(elem,didDestroy){
        if(elem){
            html.removerClass(elem,'skeleton')
        }else{
            //Remover Skeleton class
            let elements = Array.prototype.slice.call(html.getAll('.skeleton'))
            
            elements.map((element)=>{
                html.removerClass(element,'skeleton')
            })
        }

        if(didDestroy){
            elem.replaceChildren()
        }
        //Remover Invisible class
        let invisibleElements = Array.prototype.slice.call(html.getAll('.invisible'))
        
        invisibleElements.map((invisibleElement)=>{
            html.removerClass(invisibleElement,'invisible')
        })
    }
}