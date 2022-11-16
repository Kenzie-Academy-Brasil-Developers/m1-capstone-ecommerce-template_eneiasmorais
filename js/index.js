const vitrine = document.getElementById('vitrine')
const lateral = document.getElementById('lateral')
let arrCarrinho = []
let count = 0

for(let i = 0; i < data.length; i++){
    const card = document.createElement('div')
    const imagem = document.createElement('img')
    const tag = document.createElement('span')
    const tituloCard = document.createElement('h2')
    const descricao = document.createElement('p')
    const preco = document.createElement('h3')
    const adicionar = document.createElement('button')
    card.classList.add('cards')
    imagem.src = data[i].img
    tag.innerHTML = data[i].tag
    tag.classList.add('tags')
    tituloCard.innerHTML = data[i].nameItem
    tituloCard.classList.add('tituloCard')
    descricao.innerHTML = data[i].description
    descricao.classList.add('descricao')
    preco.innerHTML = `R$ ${data[i].value},00`
    preco.classList.add('preco')
    adicionar.innerHTML = "Adicionar ao Carrinho"
    adicionar.classList.add('adicionar')
    adicionar.id = [i + 1]
        
        
    vitrine.append(card)
    card.append(imagem,tag,tituloCard,descricao,preco,adicionar)
}

const pesquisa = document.createElement('div')
pesquisa.classList.add('pesquisa')
const inserirPesquisa = document.createElement('input')
inserirPesquisa.placeholder = " Digite aqui sua pesquisa"
const botaoPesquisa = document.createElement('button')
botaoPesquisa.innerText = "Pesquisar"
inserirPesquisa.classList.add('inserirPesquisa')
botaoPesquisa.classList.add('botaoPesquisa')
const carrinho = document.createElement('div')
carrinho.classList.add('carrinho')
const tituloCarrinho = document.createElement('h2')
tituloCarrinho.innerText = "Carrinho de Compras"
tituloCarrinho.classList.add('tituloCarrinho')
const contaItens = document.createElement('small')
contaItens.classList.add('contaItens')
const divCarrinho = document.createElement('div')
const carrinhoVazio = document.createElement('h2')
carrinhoVazio.classList.add('carrinhoVazio')
carrinhoVazio.innerText = "Carrinho Vazio "
const listaItens = document.createElement('ul')
listaItens.classList.add("listaItens")



const qtde = document.createElement('div')
qtde.classList.add('qtde')
const tituloQtde = document.createElement('h3')
tituloQtde.classList.add('tituloQtde')
tituloQtde.innerText = "Quantidade"
const numQtde = document.createElement('h3')
numQtde.classList.add('numQtde')
const total = document.createElement('div')
total.classList.add('total')
const tituloTotal = document.createElement('h3')
tituloTotal.innerText = "Total"
tituloTotal.classList.add('tituloTotal')
const numTotal = document.createElement('h3')
numTotal.innerText = "R$"
numTotal.classList.add('numTotal')


lateral.append(pesquisa,carrinho)
pesquisa.append(inserirPesquisa,botaoPesquisa)
carrinho.append(tituloCarrinho,divCarrinho,listaItens,qtde,total)
divCarrinho.append(carrinhoVazio)
tituloCarrinho.append(contaItens)


qtde.append(tituloQtde,numQtde)
total.append(tituloTotal,numTotal)



let botoesAdicionar = document.querySelectorAll('.adicionar')
let id = 0
let soma = 0

for(let j = 0; j < botoesAdicionar.length; j++){
    let botao = botoesAdicionar[j]

    botao.addEventListener('click', function(e){
    
    let idElemento = e.target.id
    let id = parseInt(idElemento)
        if(verificaCarrinho(id) == false){
            count++
            document.querySelector('.contaItens').innerHTML = " (" + count + ")"
            let product = localizaProduto(id)    
            let elementoProduto = criarCardCarrinho(product)
            listaItens.append(elementoProduto)    
            numQtde.innerText = count
            soma += product.value
            numTotal.innerText = `R$ ${soma}`
            carrinhoVazio.innerText = ""
        }
    })
}

function localizaProduto(id){
    for(let k = 0; k < data.length; k++){
        let product = data[k]
        if(product.id === id){
            return product
        }        
    }
}


function criarCardCarrinho(product){
    
    const itensCompra = document.createElement('li')
    itensCompra.classList.add('itensCompra')
    const divImg = document.createElement('div')
    divImg.classList.add('divImg')
    const divInf = document.createElement('div')
    divInf.classList.add('divInf')
    
    const imgCarrinho = document.createElement('img')
    imgCarrinho.classList.add('imgCarrinho')
    const h2Carrinho = document.createElement('h2')
    h2Carrinho.classList.add('h2Carrinho')
    const h3Carrinho = document.createElement('h3')
    h3Carrinho.classList.add('h3Carrinho')
    const buttonCarrinho = document.createElement('button')
    buttonCarrinho.classList.add('adicionar')

    itensCompra.id = 'f_' + product.id
    imgCarrinho.src = product.img
    h2Carrinho.innerHTML = product.nameItem
    h3Carrinho.innerHTML = `R$ ${product.value},00`
    buttonCarrinho.innerHTML = 'Remover'
    buttonCarrinho.id = 'fav_' + product.id

    buttonCarrinho.addEventListener('click', function(e){
        let li = document.querySelector('#f_' + product.id)
        li.remove()
        count--
        document.querySelector('.contaItens').innerHTML = " (" + count + ")"
        numQtde.innerText = count
        soma -= product.value
        numTotal.innerText = `R$ ${soma}`

    })


    divImg.append(imgCarrinho)
    divInf.append(h2Carrinho,h3Carrinho,buttonCarrinho)
    itensCompra.append(divImg,divInf)
    listaItens.append(itensCompra)

    return itensCompra
}


function verificaCarrinho(id){
    let element = document.querySelector('#f_' + id)
    if(element == null){
        return false
    } else{
        return true
    }
}