const valorAdicional = (objDescricao) => {
    let leia;

    if((objDescricao.valor < 3000)){
        leia = 'Isento'
    }else if(objDescricao.valor >= 3000 && objDescricao.valor < 8000){
        leia = `${parseFloat(objDescricao.valor * 0.05).toFixed(2)}`
    }else if(objDescricao.valor >= 8000 && objDescricao.valor < 12000){
        leia = `${parseFloat(objDescricao.valor * 0.10).toFixed(2)}`
    }else if(objDescricao.valor >= 12000 && objDescricao.valor < 20000){
        leia = `${parseFloat(objDescricao.valor * 0.15).toFixed(2)}`
    }else{
        leia = `${parseFloat(objDescricao.valor * 0.20).toFixed}`
    }

    return leia
}

export {valorAdicional}