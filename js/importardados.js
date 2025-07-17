const fileInput = html.get('#InputPlanilha');
const form = html.get('#import-form');
/* const dropArea = html.get('#drop-area'); */
const btnSend = html.get('#send-button');

const dropHandler = (event) => {
    event.preventDefault();
    const itens = event.dataTransfer.items;
    if ( itens ) {
        itens.map((item)=>{
            if(item.kind === 'file'){
                const file = item.getAsFile();
                fileInput.files = event.dataTransfer.files;
            }
        })
    } else {
        event.dataTransfer.files.map((item)=>{
            fileInput.files = event.dataTransfer.files;
        })
    }

    html.removerClass(btnSend, 'd-none');
}


/* dropArea.addEventListener('ondragover', (e)=>{
    e.preventDefault();
});

dropArea.addEventListener('ondrop', (e)=>{
    e.preventDefault();
    dropHandler(e);
}); */

fileInput.addEventListener('change',(e)=>{
    if(e.currentTarget.files) {
        html.removerClass(btnSend, 'd-none');
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(form);

    newReqAjax('post','atualizarlinhaprod',undefined, data,
    (suc)=>{
        Swal.fire({
            icon: "success",
            title: "Dados importados com sucesso!"
        });
    },
    (err)=>{
        Swal.fire({
            icon: "error",
            title: err
        });
    },false,false);
})


