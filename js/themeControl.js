function buttonThemeChange(){
    let btnTheme = html.get('.custom-switch-label')
    btnTheme.replaceChildren()
    
    let classArray = Array.prototype.slice.call(btnTheme.classList)

    let icon = html.create('i')

    if(classArray.includes('day')){
        html.removerClass(btnTheme,'day')
        html.addClass(btnTheme,'night')
        icon.setAttribute('class','fa-solid fa-moon')
    }else{
        html.removerClass(btnTheme,'night')
        html.addClass(btnTheme,'day')
        icon.setAttribute('class','fa-solid fa-circle')
    }

    btnTheme.appendChild(icon)
}

function changeTheme(){
    let darkArray = Array.prototype.slice.call(html.getAll('.dark-mode'))
    if(darkArray.length > 0){
        darkArray.map((darkElem)=>{
            html.removerClass(darkElem,'dark-mode')
        })
        document.cookie = "theme=light"
    }else{
        /*Alterar cor da Barra de Navegação Lateral*/
        html.addClass(html.get('.sidebar'),'dark-mode')
        /*Alterar cor da Barra de Navegação Superior*/ 
        html.addClass(html.get('.topbar'),'dark-mode')
        /*Alterar cor do Rodapé*/
        html.addClass(html.get('.sticky-footer'),'dark-mode')
        /*Alterar demais elementos demarcados*/
        let ElemsArray = Array.prototype.slice.call(html.getAll('.element'))
        ElemsArray.map((elem)=>{
            html.addClass(elem,'dark-mode')
        })

        document.cookie = "theme=dark;"
    }
}

function turnLightOff(){
    html.addClass(html.get('.sidebar'),'dark-mode')
    /*Alterar cor da Barra de Navegação Superior*/ 
    html.addClass(html.get('.topbar'),'dark-mode')
    /*Alterar cor do Rodapé*/
    html.addClass(html.get('.sticky-footer'),'dark-mode')
    /*Alterar demais elementos demarcados*/
    let ElemsArray = Array.prototype.slice.call(html.getAll('.element'))
    ElemsArray.map((elem)=>{
        html.addClass(elem,'dark-mode')
    })
}

document.addEventListener('DOMContentLoaded',event=>{
    let themeCookie = document.cookie
    if(themeCookie.includes('dark')){
        turnLightOff()
        buttonThemeChange()
    }

    let checkTheme = html.get('#theme-change')
    checkTheme.addEventListener('change',event=>{
        buttonThemeChange()
        changeTheme()
    })
})