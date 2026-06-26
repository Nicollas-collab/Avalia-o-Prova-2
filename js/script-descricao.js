const descricao = []

const formDescricao = document.querySelector('form-descricao')
const divLote = document.querySelector('info-lote')

formDescricao.addEventListener('submit', (evt) => {

    evt.preventDefault()

    const cadDescricao = new FormData(formDescricao)

    const descricao = {

        produto: cadDescricao.get('produto'),
        valor: cadDescricao.get('valor'),
        quantidade: cadDescricao.get('quantidade')

    }

    addDescricao(descricao)

    formDescricao.reset()

})

const addDescricao = (objDescricao) => {

    descricao.push(objDescricao)

    listDescricao()
}

const listDescricao = () => {

    divLote.innerHTML = ''

    descricao.forEach((elem,i) => {
        divLote.innerHTML += `<div> ${i + 1} - ${elem.produto} | ${parseFloat(elem.valor).toFixed(2).replace('.', ',')} | ${elem.quantidade}  </div>`


    })


}
 
