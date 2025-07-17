let data = [];
let containerElem;
let buttonsContainer;
let method;
let perPage = 5
let totalPages = 1
const state = {
    page: 1,
    perPage,
    totalPages, 
    maxVisibleButtons: 5  
}


const controls = {
    next() {
        state.page++
        const lastPage = state.page > state.totalPages
        if(lastPage){
            state.page--
        }
    },
    prev() {
        state.page--
        if(state.page < 1){
            state.page++
        }
    },
    goTo(page) {
        if(state.page < 1){
            state.page = 1
        }
        state.page = +page
        if(page > state.totalPages){
            state.page = state.totalPages
        }
    },
    createListeners(){
        if(html.get('.prev')){
            html.get('.prev').addEventListener('click', ()=>{
                this.prev()
                update() 
            })
        }
        if(html.get('.next')){
            html.get('.next').addEventListener('click', ()=>{
                this.next()
                update() 
            })
        }
    }
}

const list = {
    create(items) {
        method(items)
    },
    update() {
        containerElem.innerHTML = ''

        let page = state.page - 1 
        let start = page * state.perPage
        let end = start + state.perPage
        const paginatedItems = data.slice(start,end)
        paginatedItems.forEach(list.create)
    }
}

const buttons = {
    create(number) {
        const listbutton = html.create('li','page-item')
        const button = html.create('a','page-link rounded-0',number)
        html.removerClass(html.get('#controlePaginacao'),'invisible')
        
        if(state.page == number){
            listbutton.classList.add('active')
        }

        button.addEventListener('click',(event)=>{
            const page = event.target.innerText

            controls.goTo(page)
            update()
        })

        listbutton.appendChild(button)
        buttonsContainer.appendChild(listbutton)
    },
    update() {
        buttonsContainer.innerHTML = ""
        const {maxLeft, maxRight} = buttons.calculateMaxVisible()

        for(let page = maxLeft; page <= maxRight; page++) {
            buttons.create(page)
        }
    },
    calculateMaxVisible() {
        const { maxVisibleButtons, totalPages } = state
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))

        if(maxLeft < 1){
            maxLeft = 1
            maxRight = maxVisibleButtons
        }
        if(maxRight > totalPages){
            maxLeft = state.totalPages - (maxVisibleButtons - 1)
            maxRight = totalPages

            if(maxLeft < 1){
                maxLeft = 1
            }
        }
        
        return {maxLeft,maxRight}
    }
}

function update() {
    list.update()
    buttons.update()
}

function init(){
    controls.createListeners()
}