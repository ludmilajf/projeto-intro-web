let guardarObjetos = [{
    nome: "Dominguinhos",
    idade: Number(71),
    discografia: Number(50),
    vivo: false,
    sucessos: ["Apôs tá certo", " Festa no sertão", " Oi, lá vou eu!", " Quem me levará sou eu", " Isso aqui tá bom demais"],
},
{
    nome: "Anastácia",
    idade: Number(82),
    discografia: Number(31),
    vivo: true,
    sucessos: ["Eu sou Anastácia", "Daquele jeito", "Saudade matadeira", "Canto do Sabiá"],
},
{
    nome: "Luiz Gonzaga",
    idade: Number(76),
    discografia: Number(74),
    vivo: false,
    sucessos: ["Baião", "Festa", "Asa branca", "O Xote das meninas", "Respeita Januário", "Olha pro céu"],
},
{
    nome: "Marinês",
    idade: Number(71),
    discografia: Number(34),
    vivo: false,
    sucessos: ["Bate coração", "Cidade de pedreira", "Desabafo", "Nordeste valente"],
}
]


//Parte 1
for (let i of guardarObjetos) {
    console.log(`
    ${i.nome.toUpperCase()}
    Idade: ${i.idade}
    Discografia: ${i.discografia} álbuns
    A(o) Artista está viva(o): ${i.vivo}
    Sucessos: ${i.sucessos.join("; ")}
    `)
}

//Parte 2
for (objetos of guardarObjetos) {
    for (propriedade in objetos) {
        console.log(`${propriedade}: ${objetos[propriedade]}`)
    }
}

//Parte 3
function objetosArtistas(objeto) {
    for (let i in objeto) {
        console.log(`
    ${objeto[i].nome.toUpperCase()}
    ${objeto[i].idade}
    ${objeto[i].discografia}
    ${objeto[i].vivo}
    ${objeto[i].sucessos}
    `)
    }
}
objetosArtistas(guardarObjetos)

//Parte 4
const objetoNome = guardarObjetos.map((objeto, string) => {
    if (objeto.nome) {
        console.log(objeto.nome.toUpperCase())
    } else {
        alert("O item não foi adicionado")
    }
})


// DOM


const listaDominguinhos = document.getElementById("texto-dominguinhos")
listaDominguinhos.innerHTML += ' <li><a href="https://pt.wikipedia.org/wiki/Dominguinhos"><strong>DOMINGUINHOS</strong></a></li> '
listaDominguinhos.innerHTML += ' <li><strong>Idade</strong>: 71 anos</li>'
listaDominguinhos.innerHTML += ' <li><strong>Discografia</strong>: 50 álbuns</li> '
listaDominguinhos.innerHTML += ' <li><strong>Período de vida</strong>: 12/02/1941 - 23/07/2013</li> '
listaDominguinhos.innerHTML += ' <li><strong>Sucessos</strong>: <em>Apôs tá certo; Festa no sertão; Oi, lá vou eu!; Quem me levará sou eu; Isso aqui tá bom demais</em></li> '

const listaAnastacia = document.getElementById("texto-anastacia")
listaAnastacia.innerHTML += ' <li><a href="https://pt.wikipedia.org/wiki/Anast%C3%A1cia_(cantora)"><strong>ANASTÁCIA</strong></a></li> '
listaAnastacia.innerHTML += ' <li><strong>Idade</strong>: 82 anos</li> '
listaAnastacia.innerHTML += ' <li><strong>Discografia</strong>: 31 álbuns</li> '
listaAnastacia.innerHTML += ' <li><strong>Período de vida</strong>: 30/05/1941 - atualmente</li> '
listaAnastacia.innerHTML += ' <li><strong>Sucessos</strong>: <em>Eu sou Anastácia; Daquele jeito; Saudade matadeira; Canto do Sabiá</em></li> '

const listaGonzaga = document.getElementById("texto-gonzaga")
listaGonzaga.innerHTML += ' <li><a href="https://pt.wikipedia.org/wiki/Luiz_Gonzaga"><strong>LUIZ GONZAGA</strong></a></li> '
listaGonzaga.innerHTML += ' <li><strong>Idade</strong>: 76 anos</li> '
listaGonzaga.innerHTML += ' <li><strong>Discografia</strong>: 74 álbuns</li> '
listaGonzaga.innerHTML += ' <li><strong>Período de vida</strong>: 13/12/1912 - 01/08/1989</li> '
listaGonzaga.innerHTML += ' <li><strong>Sucessos</strong>: <em>Baião; Festa; Asa branca; O Xote das meninas; Respeita Januário; Olha pro céu</em></li> '

const listaMarines = document.getElementById("texto-marines")
listaMarines.innerHTML += ' <li><a href="https://pt.wikipedia.org/wiki/Marin%C3%AAs"><strong>MARINÊS</strong></a></li> '
listaMarines.innerHTML += ' <li><strong>Idade</strong>: 71 anos</li> '
listaMarines.innerHTML += ' <li><strong>Discografia</strong>: 34 álbuns</li> '
listaMarines.innerHTML += ' <li><strong>Período de vida</strong>: 16/11/1935 - 14/05/2007</li> '
listaMarines.innerHTML += ' <li><strong>Sucessos</strong>: <em>Bate coração; Cidade de pedreira; Desabafo; Nordeste valente</em></li> '




const caixaArtista = document.getElementById("caixa-artista")

function pesquisaArtista() {
    const artista = document.getElementById("pesquisar")
    const opcoes = [...guardarObjetos].map(el => el.value)

    const opcoesSelecionadas = opcoes.find((value) => {
        return value == artista.value
    })

    if (!opcoesSelecionadas) {
        alert("Artista não encontrado")
        artista.value = ""
    }else{
        return document.getElementsById("texto-artista").innerHTML
    }
}