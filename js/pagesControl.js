let hideableElems = Array.prototype.slice.call(html.getAll('.hideable'))

hideableElems.map((elem)=>{
    html.addClass(elem,'invisible')
})