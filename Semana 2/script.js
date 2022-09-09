// SEMANA 1

//Parte 1- Item: Artistas de forró

// //Parte 2 -
// const dominguinhos = "Dominguinhos"
// const idadeDominguinhos = Number(71)
// const discografiaDominguinhos = Number(50)
// const estaVivo = false
// const sucessosDominguinhos = ["Apôs tá certo", " Festa no sertão", " Oi, lá vou eu!", " Quem me levará sou eu", " Isso aqui tá bom demais", ]

// const anastacia = "Anastácia"
// let idadeAnastacia = Number(82)
// let discografiaAnastacia = Number(31)
// const estaVivo2 = true
// let sucessosAnastacia = ["Eu sou Anastácia", "Daquele jeito", "Saudade matadeira", "Canto do Sabiá"]

// const gonzaga = "Luiz Gonzaga"
// const idadeGonzaga = Number(76)
// const discografiaGonzaga = Number(74)
// const estaVivo3 = false
// const sucessosGonzaga = ["Baião", "Festa", "Asa branca", "O Xote das meninas", "Respeita Januário", "Olha pro céu"]

// const marines = "Marinês"
// const idadeMarines = Number(71)
// const discografiaMarines = Number(34)
// const estaVivo4 = false
// const sucessosMarines = ["Bate coração", "Cidade de pedreira","Desabafo", "Nordeste valente"]

//Parte 3 -
// let valorMedioIdade = (idadeAnastacia + idadeDominguinhos + idadeGonzaga + idadeMarines) / 4
// console.log(valorMedioIdade)

// Parte 4 -
// const estaoTodosVivos = estaVivo && estaVivo2 && estaVivo3 && estaVivo4
// console.log(estaoTodosVivos);

//Parte 5 - array sucessos

//Parte 6 - 
// console.log(`
// ${dominguinhos.toUpperCase()}
// Idade: ${idadeDominguinhos}
// Discografia: ${discografiaDominguinhos} álbuns
// Está vivo? ${estaVivo}
// Sucessos: ${sucessosDominguinhos}

// ${anastacia.toUpperCase()}
// Idade: ${idadeAnastacia}
// Discografia: ${discografiaAnastacia} álbuns
// Está vivo? ${estaVivo2}
// Sucessos: ${sucessosAnastacia}

// ${gonzaga.toUpperCase()}
// Idade: ${idadeGonzaga}
// Discografia: ${discografiaGonzaga} álbuns
// Está vivo? ${estaVivo3}
// Sucessos: ${sucessosGonzaga}

// ${marines.toUpperCase()}
// Idade: ${idadeMarines}
// Discografia: ${discografiaMarines} álbuns
// Está vivo? ${estaVivo4}
// Sucessos: ${sucessosMarines}
// `)


// SEMANA 2

//Parte 1 -
objetoDominguinhos = {
    nome: "Dominguinhos",
    idade: Number(71),
    discografia: Number(50),
    vivo: false,
    sucessos: ["Apôs tá certo", " Festa no sertão", " Oi, lá vou eu!", " Quem me levará sou eu", " Isso aqui tá bom demais", ]
}

objetoAnastacia = {
    nome: "Anastácia",
    idade: Number(82),
    discografia: Number(31),
    viva: true,
    sucessos: ["Eu sou Anastácia", "Daquele jeito", "Saudade matadeira", "Canto do Sabiá"],
}

objetoGonzaga = {
    nome: "Luiz Gonzaga",
    idade: Number(76),
    discografia: Number(74),
    vivo: false,
    sucessos: ["Baião", "Festa", "Asa branca", "O Xote das meninas", "Respeita Januário", "Olha pro céu"],
}

objetoMarines = {
    nome: "Marinês",
    idade: Number(71),
    discografia: Number(34),
    viva: false,
    sucessos: ["Bate coração", "Cidade de pedreira","Desabafo", "Nordeste valente"],
}

// Parte 2
let todosArtistas = []

// Parte 3
// todosArtistas.push(objetoAnastacia, objetoDominguinhos, objetoGonzaga, objetoMarines)
//console.log(todosArtistas)

// Parte 4 e 5

// if(objetoDominguinhos.vivo === true){
//     todosArtistas.push(objetoDominguinhos)
//     console.log(todosArtistas)
// }else{
//     alert("O item não foi adicionado")
// }

// if(objetoAnastacia.viva === true){
//     todosArtistas.push(objetoAnastacia)
//     console.log(todosArtistas)
// }else{
//     alert("O item não foi adicionado")
// }

// if(objetoGonzaga.vivo === true){
//     todosArtistas.push(objetoGonzaga)
//     console.log(todosArtistas)
// }else{
//     alert("O item não foi adicionado")
// }

// if(objetoMarines.viva === true){
//     todosArtistas.push(objetoMarines)
//     console.log(todosArtistas)
// }else{
//     alert("O item não foi adicionado")
// }

//tentativa com if ternário:
objetoDominguinhos.vivo === true ? todosArtistas.push(objetoDominguinhos) : alert("O item não foi adicionado")

objetoAnastacia.viva === true ? todosArtistas.push(objetoAnastacia) : alert("O item não foi adicionado")

objetoGonzaga.vivo === true ? todosArtistas.push(objetoGonzaga) : alert("O item não foi adicionado")

objetoMarines.viva === true ? todosArtistas.push(objetoMarines) : alert("O item não foi adicionado")

//console.log(todosArtistas)