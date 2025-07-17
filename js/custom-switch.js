//Switch Button
function switchOption(switchElem) {
    let periodControl;
    let switchOptions = Array.from(switchElem.children)
    const activeOption = switchOptions.filter(e=>e.classList.contains('active'))
    if(activeOption[0].classList.contains('left')){
        periodControl = 'M'
    }else{
        periodControl = 'D'
    }
    switchOptions.map(e=>{
        e.classList.toggle('active')
    })
    return periodControl
}
//Fim da interação do switch

//Controle do select customizado
function getAllSelectedOptions(){
    let selectedOptions = Array.from(html.getAll('.selected-option'))
    let selectedOptionsValues = [];
    selectedOptions.map((option)=>{
        selectedOptionsValues.push(option.innerText)
    })

    return selectedOptionsValues
}

function selectOption(opt){
    let placeholder = html.get('.placeholder-text')
    placeholder.setAttribute('hidden','hidden');
    const selectedOptionsArray = getAllSelectedOptions();
    if(!selectedOptionsArray.includes(opt.getAttribute('value'))){
        const selectedOptionsContainer = html.get('.selected-options')
        let selectedOption = html.create('div')
        selectedOption.setAttribute('class','selected-option')
            let selectedOptionRemoveButton = html.create('a')
            selectedOptionRemoveButton.setAttribute('class','text-decoration-none px-1')
            selectedOptionRemoveButton.addEventListener('click',()=>{
                selectedOption.remove();
                let selectedOptionsValues = getAllSelectedOptions();
                if(!options.hasAttribute('hidden')){
                    html.addClass(options,'show')
                }
                if(selectedOptionsValues.length <= 0){
                    placeholder.removeAttribute('hidden')
                }
            })
                let selectOptionIcon = html.create('i')
                selectOptionIcon.setAttribute('class','fa-solid fa-xmark mx-2')
            selectedOptionRemoveButton.appendChild(selectOptionIcon)
        selectedOption.appendChild(selectedOptionRemoveButton)
        selectedOption.append(opt.getAttribute('value'))
    
        selectedOptionsContainer.appendChild(selectedOption)
    }
}

const select = html.get('.custom-select-input')
const options = html.get('.card.custom-options')

if(select){
    document.addEventListener('click', (e)=>{
        if(select.contains(e.target) && !options.classList.contains('show')){
            html.addClass(options,'show')
        }else{
            html.removerClass(options,'show')
            let selectedOptionsValues = getAllSelectedOptions();
            if(selectedOptionsValues.length <= 0){
                let placeholder = html.get('.placeholder-text')
                placeholder.removeAttribute('hidden')
            }
        }
    })
}
//Fim do controle do select customizado
