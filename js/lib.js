//let url = "https://api.macrolub.com.br:2087";
let interval;
//let url = "https://apisec.moraiscasa.dev.br:2083"
let url = "http://localhost:3031"

class Usuario {
    constructor(){
      this.nome = sessionStorage.getItem('nome');
      this.email = sessionStorage.getItem('email');
      this.rca = sessionStorage.getItem('rca');
      this.codPerfil = sessionStorage.getItem('tipoPerfil');
      this.perfil = this.getLabelPerfil();
      this.foto = sessionStorage.getItem('foto');
      this.salt = sessionStorage.getItem('salt');
    }
    getLabelPerfil(){
      switch(this.codPerfil){
        case 'V':
          return 'Vendedor';
        case 'S':
          return 'Supervisor';
        case 'G':
          return 'Gerente Comercial';
        case 'F':
          return 'Financeiro';
        case 'C':
          return 'Comprador';
        case 'A':
          return 'Administrador';
        case 'E':
          return 'Expedição';
      }
    }
    rota(){
        switch(this.codPerfil) {
            case 'V':
                window.location.href = 'index';
                break;
            case 'A':
                window.location.href = 'index';
                break;
            case 'S':
                window.location.href = 'index';
                break;
            case 'G': 
                window.location.href = 'index';
                break;
            case 'F':
                window.location.href = '2via';
                break;
            case 'C':
                window.location.href = 'compras';
                break;
            case 'E':
                window.location.href = 'expedicao';
                break;
        }
    }
    logout(){
        sessionStorage.clear();
        newReqAjax('post','logout','json',{cancelar:'true'});
        window.location.href = 'login';
    }
}

const usuario = new Usuario;

const html = {
    get(elem){
        let element = document.querySelector(elem);
        return element
    },
    getAll(elem){
        let element = document.querySelectorAll(elem);
        return element;
    },
    removerClass(elem,classe){
        elem.classList.remove(classe);
        return true;
    },
    addClass(elem,classe){
        elem.classList.add(classe);
        return true;
    },
    create: (type,attributes,innerHtml,value,id,isHidden)=>{
        const element = document.createElement(type);
        element.setAttribute('class',attributes);
        innerHtml ? element.innerHTML = innerHtml : '';
        value ? element.value = value : '';
        id ? element.id = id : false;
        isHidden ? element.setAttribute('hidden','hidden') : '';
        return element;
    },
};

const refresh = {
    setTimer(fn, timer) {
        let schedule = setInterval(fn, timer);
        console.log('timer set!');
        return schedule;
    },
    resetTimer(interval) {
        clearInterval(interval);
        console.log('timer clear!');
    },
    updateTimer(timer) {
        let interval = setInterval(timer);
        console.log('timer updated!');
        return interval;
    }
};

function newReqAjax(method, route, dataType, data, sucFnCallback, errFnCallback, contentType, processData, mimeType,responseType) {
    const settings = {
        "method": method,
        "url": `${url}/api/${route}`,
        "data": data,
        "success": sucFnCallback, 
        "error": errFnCallback,
        "xhrFields": {
            withCredentials: true
        }
    };

    dataType != undefined ? settings.dataType = dataType : false;
    contentType != undefined ? settings.contentType = contentType : false;
    processData != undefined ? settings.processData = processData : false;
    mimeType != undefined ? settings.mimeType = mimeType : false;
   /*  withCredentials != undefined ? settings.xhrFields = {"withCredentials": withCredentials} : false; */
    responseType != undefined ? settings.xhrFields = {"withCredentials": true, "responseType": responseType} : false;

    $.ajax(settings);
    return data;   
}

if(document.querySelector('.timer')){
    document.querySelector('.timer').addEventListener('change', event=>{
        let checks = Array.prototype.slice.call(document.querySelectorAll('.form-check-input'));
        let checked = checks.filter((elem)=>{
            if(elem.checked){
                return elem;
            }
        });
        refresh.resetTimer(interval);
        interval = refresh.updateTimer(checked[0].value);
    });
}
setInterval(()=>newReqAjax('post','refreshtoken','json',{'salt': usuario.salt}), 43200000);

function setStatusColor(elem,target,actualValue){
    if(parseFloat(actualValue) >= target){
        elem.classList.add('complete');
        elem.classList.remove('incomplete');
    }else{
        elem.classList.add('incomplete');
        elem.classList.remove('complete');
    }
}

const toggleValidityStatus = (status, input)=>{
    //Atribuindo a variavel inputParent o elemento pai do input para alterar a classe do container Form-group
    const inputParent = input.parentElement;
    if(status){
        //Se estiver remove a classe invalid (se houver) 
        html.removerClass(input, 'invalid');
        html.removerClass(inputParent,'invalid');
        //e adiciona a classe valid
        html.addClass(input,'valid');
        html.addClass(inputParent,'valid');
    } else {
        html.removerClass(input, 'valid');
        html.removerClass(inputParent,'valid');
        //e adiciona a classe invalid
        html.addClass(input,'invalid');
        html.addClass(inputParent, 'invalid');
    }
};

const validarCampos = (formCard)=> {
    const paraValidar = Array.from(html.getAll(`#${formCard.id} .required`));
    paraValidar.map(input=>{
        validarCampo(input);
    });
    return paraValidar.every(input=> input.classList.contains('valid'));
};

const validarCampo = (elem)=>{
    elemParrent = elem.parentElement;
    switch(elem.type){
        case 'text':
            if(elem.value){
                toggleValidityStatus(true,elem);
            }else{
                toggleValidityStatus(false,elem);
            }
        break;
        case 'number': 
            if(elem.value){
                toggleValidityStatus(true,elem);
            }else{
                toggleValidityStatus(false,elem);
            }
        break;
        case 'select-one':
            if(elem.value != 'Default'){
                toggleValidityStatus(true,elem);
            }else{
                toggleValidityStatus(false,elem);
            }
        break;
        case 'file':
            if(elem.files[0]){
                toggleValidityStatus(true,elem);
            }else{
                toggleValidityStatus(false,elem);
            }
        break;
        case 'radio':
            const parentElement = elem.parentElement;
            const radios = Array.from(html.getAll(`input[name= '${elem.name}']`));
            if(radios.find(radio => radio.checked) != undefined){
                toggleValidityStatus(true,parentElement);
                radios.map(radio => toggleValidityStatus(true,radio));
            }else{
                toggleValidityStatus(false,parentElement);
                radios.map(radio => toggleValidityStatus(false,radio));
            }
        break;
        case 'password':
            if(elem.value){
                toggleValidityStatus(true,elem);
            }else{
                toggleValidityStatus(false,elem);
            }
        break;
        case 'email':
            const regEx = /\S+@\S+\.\S+/g;
            if(regEx.test(elem.value)){
                toggleValidityStatus(true,elem);
                return true;
            }else{
                toggleValidityStatus(false,elem);
            }
        break;
    }
}