

let valor = objDescricao.valor * objDescricao.quantidade

const valorTotal = (objDescricao) => {
    let leia;

    if((valor < 3000)){
        leia = 'Isento'
    }else if(valor >= 3000 && valor < 8000){
        leia = `${parseFloat(valor * 0.05).toFixed(2)}`
    }else if(valor >= 8000 && valor < 12000){
        leia = `${parseFloat(valor * 0.10).toFixed(2)}`
    }else if(valor >= 12000 && valor < 20000){
        leia = `${parseFloat(valor * 0.15).toFixed(2)}`
    }else{
        leia = `${parseFloat(valor * 0.20).toFixed}`
    }

    return leia
}


export {valorTotal}