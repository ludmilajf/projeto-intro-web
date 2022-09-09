// SEMANA 1

//Parte 1- Item: Artistas de forró

//Parte 2 -
const dominguinhos = "Dominguinhos"
const idadeDominguinhos = Number(71)
const discografiaDominguinhos = Number(50)
const estaVivo = false
const sucessosDominguinhos = ["Apôs tá certo", " Festa no sertão", " Oi, lá vou eu!", " Quem me levará sou eu", " Isso aqui tá bom demais", ]

const anastacia = "Anastácia"
let idadeAnastacia = Number(82)
let discografiaAnastacia = Number(31)
const estaVivo2 = true
let sucessosAnastacia = ["Eu sou Anastácia", "Daquele jeito", "Saudade matadeira", "Canto do Sabiá"]

const gonzaga = "Luiz Gonzaga"
const idadeGonzaga = Number(76)
const discografiaGonzaga = Number(74)
const estaVivo3 = false
const sucessosGonzaga = ["Baião", "Festa", "Asa branca", "O Xote das meninas", "Respeita Januário", "Olha pro céu"]

const marines = "Marinês"
const idadeMarines = Number(71)
const discografiaMarines = Number(34)
const estaVivo4 = false
const sucessosMarines = ["Bate coração", "Cidade de pedreira","Desabafo", "Nordeste valente"]

//Parte 3 -
let valorMedioIdade = (idadeAnastacia + idadeDominguinhos + idadeGonzaga + idadeMarines) / 4
console.log(valorMedioIdade)

// Parte 4 -
const estaoTodosVivos = estaVivo && estaVivo2 && estaVivo3 && estaVivo4
console.log(estaoTodosVivos);

//Parte 5 - array sucessos

//Parte 6 - 
console.log(`
${dominguinhos.toUpperCase()}
Idade: ${idadeDominguinhos}
Discografia: ${discografiaDominguinhos} álbuns
Está vivo? ${estaVivo}
Sucessos: ${sucessosDominguinhos}

${anastacia.toUpperCase()}
Idade: ${idadeAnastacia}
Discografia: ${discografiaAnastacia} álbuns
Está vivo? ${estaVivo2}
Sucessos: ${sucessosAnastacia}

${gonzaga.toUpperCase()}
Idade: ${idadeGonzaga}
Discografia: ${discografiaGonzaga} álbuns
Está vivo? ${estaVivo3}
Sucessos: ${sucessosGonzaga}

${marines.toUpperCase()}
Idade: ${idadeMarines}
Discografia: ${discografiaMarines} álbuns
Está vivo? ${estaVivo4}
Sucessos: ${sucessosMarines}
`)
